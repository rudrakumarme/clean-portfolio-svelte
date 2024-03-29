import { Platform } from '$lib/types';
import Assets from './assets';
import { getSkills } from './skills';

export const title = 'Expert Full Stack Developer | OpenCart & Shopify Specialist';

export const name = 'Rudra';

export const lastName = 'Kumar';

export const description: string =
	'Dynamic eCommerce Developer specializing in Shopify and OpenCart. I transform online stores into visually stunning, highly functional marketplaces optimized for both speed and user experience. Let\'s elevate your digital presence together.';

export const rating = Assets.Rating;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/rudrakumarme/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/rudrakumarme/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/rudrakumarme'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/23850805/rudra-kumar'
	},
	{
		platform: Platform.Email,
		link: 'rudrakumarme@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@rudrakumarme'
	},
	// {
	// 	platform: Platform.Medium,
	// 	link: 'https://medium.com/@rudrakumarme'
	// },
	// {
	// 	platform: Platform.Quora,
	// 	link: 'https://www.quora.com/profile/Rudra-Kumar-747'
	// },
	// {
	// 	platform: Platform.Instagram,
	// 	link: 'https://www.instagram.com/rudrakumarme/'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com/rudrakumarme/'
	// },
	// {
	// 	platform: Platform.Dribbble,
	// 	link: 'https://dribbble.com/rudrakumarme'
	// },
	// {
	// 	platform: Platform.Behance,
	// 	link: 'https://www.behance.net/rudrakumarme'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
