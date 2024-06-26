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


	let isMobile = false;

onMount(() => {
  const userAgent = navigator.userAgent;
  
  // Regular expressions to match common mobile browsers
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  // Check if the user agent matches a mobile device
  if (mobileRegex.test(userAgent)) {
	isMobile = true;
  }
});

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

{#if isMobile}
<video autoplay loop muted playsinline preload="metadata" poster="/hero-mobile-poster.webp?tr=q-95" style="position: initial;visibility: visible;display: block;height: 100%;object-fit: cover;pointer-events: none;width: 100%;left: 0px;top: 0px;height: 100%;left: 0px;pointer-events: none;position: absolute;top: 0px;width: 100%;z-index: 0;" src="/hero-mobile.mp4?tr=q-95"></video>
{:else}
	<video autoplay loop muted playsinline preload="metadata" poster="/hero-desktop-poster.webp?tr=q-95" style="position: initial;visibility: visible;display: block;height: 100%;object-fit: cover;pointer-events: none;width: 100%;left: 0px;top: 0px;height: 100%;left: 0px;pointer-events: none;position: absolute;top: 0px;width: 100%;z-index: 0;" src="/hero-desktop.mp4?tr=q-95"></video>
{/if}
<div
	class="col self-center flex-1 justify-center lg:justify-between items-center p-y-60px p-x-10px z-index-2"
>

	<div class="flex-1 gap-10px">
		<!-- h2 class="text-[var(--light-0)] text-center  text-[2em]">I'm</h2 -->
		<MainTitle classes="">I'm {name} {lastName}</MainTitle>
		<!-- a class="text-center" target="_blank" href="https://www.trustpilot.com/review/clickrays.com"><img src="{rating}" alt="Rating" class="h-auto text-center rating" /></a -->
		<p class="text-[var(--light-0)] text-center text-[1.2em] md:text-[1.6em] p-y-10px p-x-0px gap-2 font-light">{$dynamicTitle}&nbsp;</p>
		<!-- p class="text-[var(--tertiary-text)]  text-center text-[1.2em] font-extralight">
			{description}
		</p -->


		<div class="row justify-center p-y-15px p-x-0px gap-2">
		<a href="https://calendly.com/rudrakumarme/30min" class="transparent-button">
			Let's Talk
			<svg width="19" height="8" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-b5xc4a-2 ggybSB">
				<path d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z" fill="white"></path>
			</svg>
		</a>
		</div>
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
