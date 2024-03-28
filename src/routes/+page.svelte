<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';

	let currentTitle = '';
    const titles = ['a software engineer', 'a web developer', 'an open source contributor', 'a tech enthusiast', 'a problem solver']; // Add more titles as needed
    let titleIndex = 0;
    let charIndex = -1;
    let isDeleting = false;
    let blink = true;

    const type = () => {
        if (isDeleting) {
            if (charIndex > -1) {
                currentTitle = titles[titleIndex].slice(0, charIndex);
                charIndex--;
                setTimeout(type, 50); // Speed of deleting
            } else {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(type, 200); // Pause before starting next title
            }
        } else {
            if (charIndex < titles[titleIndex].length) {
                charIndex++;
                currentTitle = titles[titleIndex].slice(0, charIndex);
                setTimeout(type, 150); // Speed of typing
            } else {
                isDeleting = true;
                setTimeout(type, 2000); // Time before start deleting
            }
        }
    };

    onMount(() => {
        setTimeout(type, 2000); // Start delay
        setInterval(() => {
            blink = !blink;
        }, 500); // Blinking cursor speed
    });

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>
<style>
    .blinking-cursor {
        opacity: 1;
        animation: blink 1s steps(1) infinite;
    }
    @keyframes blink {
        50% { opacity: 0; }
    }
</style>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName}<span class="blinking-cursor">{blink ? '_' : ' '}</span></MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? skillsItems} />
</div>
