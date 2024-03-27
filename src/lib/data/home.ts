import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rudra';

export const lastName = 'Kumar';

export const description: string =
	'Dynamic eCommerce Developer specializing in Shopify and OpenCart. I transform online stores into visually stunning, highly functional marketplaces optimized for both speed and user experience. Let\'s elevate your digital presence together.';

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
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'hello@rudrakumar.me'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
