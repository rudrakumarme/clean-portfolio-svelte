import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	
	{
		slug: 'web-developer',
		company: 'Self-employed',
		description: 'Creating custom websites and web applications for clients.',
		contract: ContractType.SelfEmployed,
		type: 'Full Stack Developer',
		location: 'Remote',
		period: { from: new Date() },
		skills: getSkills('Opencart', 'Shopify', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Liquid', 'React', 'Svelte', 'TypeScript'),
		name: 'Full Stack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating custom websites and web applications for clients.'
	},
	{
		slug: 'aasistant-cloud-engineer',
		company: 'Infoage Technologies',
		description: 'Support in managing and optimizing cloud infrastructure to meet organizational requirements.',
		contract: ContractType.Freelance,
		type: 'Cloud Engineering',
		location: 'Home',
		period: { from: new Date(2020, 1, 1), to: new Date(2022, 11, 1) },
		skills: getSkills('AWS', 'Azure', 'GCP', 'Networking', 'Linux', 'Scripting'),
		name: 'Assistant Cloud Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Support in managing and optimizing cloud infrastructure to meet organizational requirements.'
	},
	{
		slug: 'junior-cloud-engineer',
		company: 'Infoage Technologies',
		description: 'Managing and optimizing cloud infrastructure to support business needs.',
		contract: ContractType.Freelance,
		type: 'Cloud Engineering',
		location: 'India',
		period: { from: new Date(2019, 6, 1), to: new Date(2020, 1, 1) },
		skills: getSkills('AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes'),
		name: 'Junior Cloud Engineer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Managing and optimizing cloud infrastructure to support business needs.'
	}
];

export const title = 'Experience';
