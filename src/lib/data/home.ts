import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rudra';

export const lastName = 'Kumar';

export const description: string =
	'Discover the intersection of innovation and elegance in my portfolio, where each project is a testament to my expertise in Shopify and OpenCart development. Specializing in crafting bespoke eCommerce solutions, I elevate online stores with custom designs, seamless functionality, and optimized performance. My work not only enhances user experience but also drives sales, reflecting a blend of technical proficiency and creative vision. Let\'s transform your eCommerce goals into digital success stories.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'riadh_adrani@hotmail.fr'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
