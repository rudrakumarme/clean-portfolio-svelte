import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [

	{
		slug: 'web-developer',
		company: 'ClickRays',
		description: 'Creating custom websites and web applications for clients.',
		contract: ContractType.SelfEmployed,
		type: 'Full Stack Developer',
		location: 'Remote',
		period: { from: new Date(2017, 8, 1), to: new Date() },
		skills: getSkills('Opencart', 'Shopify', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Liquid', 'React', 'Svelte', 'TypeScript'),
		name: 'Full Stack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Dev,
		shortDescription: 'Creating custom websites and web applications for clients.'
	},
	{
		slug: 'assistant-cloud-engineer',
		company: 'Infoage Technologies',
		description: 'Support in managing and optimizing cloud infrastructure to meet organizational requirements.',
		contract: ContractType.FullTime,
		type: 'Cloud Engineering',
		location: 'India',
		period: { from: new Date(2020, 1, 1), to: new Date(2022, 11, 1) },
		skills: getSkills('AWS', 'Azure', 'GCP', 'Networking', 'Linux', 'Scripting'),
		name: 'Assistant Cloud Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Infoage,
		shortDescription: 'Support in managing and optimizing cloud infrastructure to meet organizational requirements.'
	},
	{
		slug: 'junior-cloud-engineer',
		company: 'Infoage Technologies',
		description: 'As a pioneering Junior Cloud Engineer at InfoAge Technologies, India, I spearheaded the integration and management of robust cloud solutions, laying the groundwork for scalable and secure cloud infrastructures. With a keen eye for innovation and a steadfast commitment to excellence, I played a crucial role in automating deployments, enhancing system security, and optimizing resource utilization. My tenure was marked by relentless pursuit of knowledge, collaborative success in cross-functional teams, and a series of strategic achievements that propelled our cloud capabilities to new heights. Leveraging tools like AWS, Python, and CloudWatch, I not only contributed to the creation of a resilient technical ecosystem but also ensured its continuous improvement through proactive monitoring and maintenance. Recognized for my technical acumen and problem-solving prowess, I emerged as a key player in the cloud domain, driving projects to fruition with precision and efficiency. 🌐🔒📈',
		contract: ContractType.Internship,
		type: 'Cloud Engineering',
		location: 'India',
		period: { from: new Date(2019, 6, 1), to: new Date(2020, 1, 1) },
		skills: getSkills('AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes'),
		name: 'Junior Cloud Engineer',
		color: 'green',
		links: [],
		logo: Assets.Infoage,
		shortDescription: 'Managing and optimizing cloud infrastructure to support business needs.'
	}
];

export const title = 'Experience';
