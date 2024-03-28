<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, lastName, name } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
  
	// Store for the dynamic title
	const dynamicTitle = writable('');
	// List of titles
	const titles = ['a software engineer', 'a web developer', 'an open source contributor'];
	// Current title index
	let titleIndex = 0;
	// Toggle for the blinking cursor
	let showCursor = true;
  
	// Function to update the title with a typing effect
	function updateTitle() {
	  dynamicTitle.set('');
	  let i = 0;
	  const currentTitle = titles[titleIndex];
	  const interval = setInterval(() => {
		dynamicTitle.update(n => n + currentTitle[i]);
		i++;
		if (i === currentTitle.length) {
		  clearInterval(interval);
		  titleIndex = (titleIndex + 1) % titles.length;
		  setTimeout(updateTitle, 2000); // wait for 2s before updating to the next title
		}
	  }, 150);
	}
  
	// Start the typing effect when the component is mounted
	onMount(() => {
	  updateTitle();
	  setInterval(() => {
		showCursor = !showCursor;
	  }, 530); // blink cursor every 530ms
	});

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
  <title>{useTitle($dynamicTitle, titleSuffix)}</title>
  <style>
    .cursor {
      opacity: 1;
      animation: blink-animation 1s steps(2, start) infinite;
    }
    @keyframes blink-animation {
      to {
        opacity: 0;
      }
    }
  </style>
</svelte:head>

<div class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px">
  <div class="md:flex-1 gap-10px">
    <MainTitle classes="md:text-left ">{name} {lastName}<span class="cursor">{showCursor ? '_' : ' '}</span></MainTitle>
    <p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
      {$dynamicTitle}
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