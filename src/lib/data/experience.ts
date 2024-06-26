import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [

	{
		slug: 'web-developer',
		company: 'ClickRays',
		description: 'As a Full Stack Developer, I specialize in creating dynamic, high-performance web applications that span across cutting-edge technologies. My expertise encompasses the development of robust eCommerce platforms using OpenCart and Shopify, crafting seamless shopping experiences that drive sales and user engagement. 🛒✨ With a profound command over the latest tech stacks, including React for front-end development, Node.js for scalable server-side operations, and MongoDB for flexible, efficient database management, I deliver comprehensive solutions that cater to the diverse needs of modern businesses. 🌐🔧 My projects also integrate advanced functionalities with technologies like Docker for containerization, ensuring easy deployment and CI/CD pipelines for automated, error-free releases. 🚀 By marrying aesthetic design with functional prowess using CSS frameworks like Tailwind CSS and Bootstrap, my work stands at the intersection of creativity and technological innovation, offering users intuitive, responsive, and visually appealing digital environments. 💻🎨 Committed to continuous learning, I stay abreast of emerging trends such as serverless architectures with AWS Lambda, enhancing application performance and scalability. My approach is holistic, focusing on crafting digital experiences that are not only technically sound but also strategically aligned with business goals. 🎯💡',
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
		description: 'As an Assistant Cloud Engineer at InfoAge Technologies, India, I dove deep into the world of cloud computing, playing a pivotal role in shaping our cloud architecture to be more resilient, scalable, and efficient. 🚀 From deploying sophisticated cloud infrastructure on AWS and Azure to automating workflows with Python, I ensured seamless operations and robust security protocols to protect our digital assets. 🛡️ My journey was marked by continuous learning and innovation, leading to a significant reduction in operational costs and an enhancement in system performance. With a knack for problem-solving and a passion for technology, I contributed to a culture of excellence, driving the adoption of best practices in cloud management and DevOps methodologies. 🌐💡',
		contract: ContractType.FullTime,
		type: 'Cloud Engineering',
		location: 'India',
		period: { from: new Date(2020, 1, 1), to: new Date(2022, 11, 1) },
		skills: getSkills('Python', 'AWS', 'Azure', 'GCP', 'Networking', 'Linux', 'Scripting'),
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
