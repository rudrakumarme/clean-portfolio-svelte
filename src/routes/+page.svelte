<script lang="ts">
	import { onMount } from 'svelte';
  	import { writable } from 'svelte/store';
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills, rating } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};

	// Store for the dynamic title
	const dynamicTitle = writable('');
  // List of titles
  const titles = ['a full stack developer', 'a web developer', 'e-commerce developer', 'an open source contributor', 'shopify expert', 'a freelancer', 'opencart expert'];
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
        setTimeout(updateTitle, 300); // wait for 2s before updating to the next title
      }
    }, 50);
  }

  // Start the typing effect when the component is mounted
  onMount(() => {
    updateTitle();
    setInterval(() => {
      showCursor = !showCursor;
    }, 130); // blink cursor every 530ms
  });


</script>

<svelte:head>
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

		@media (max-width: 768px) {
			.cursor {
				display: none;
			}
		}

		.z-index-2 {
			z-index: 2;
		}
		
	  </style>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<video autoplay="" loop="" muted="" playsinline="" preload="metadata" poster="/hero-desktop-poster.jpg?tr=q-95" style="position: initial;visibility: visible;display: block;height: 100%;object-fit: cover;pointer-events: none;width: 100%;left: 0px;top: 0px;height: 100%;left: 0px;pointer-events: none;position: absolute;top: 0px;width: 100%;z-index: 0;" src="/hero-desktop.mp4?tr=q-95" class="sc-1ck9s4i-0 iaATcO"></video>
<div
	class="col self-center flex-1 justify-center lg:justify-between items-center p-y-60px p-x-10px z-index-2"
>

	<div class="flex-1 gap-10px">
		<h1 class="text-[var(--greenyellow)] text-center  text-[2em]">Hey</h1>
		<MainTitle classes="">I'm {name} {lastName}</MainTitle>
		<a class="text-center" target="_blank" href="https://www.trustpilot.com/review/clickrays.com"><img src="{rating}" alt="Rating" class="h-auto text-center rating" /></a>
		<p class="text-[var(--greenyellow)] text-center text-[1.2em] p-y-10px p-x-0px gap-2 font-extralight">{$dynamicTitle}&nbsp;</p>
		<!-- p class="text-[var(--tertiary-text)]  text-center text-[1.2em] font-extralight">
			{description}
		</p -->
		<div class="row justify-center p-y-15px p-x-0px gap-2">
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
