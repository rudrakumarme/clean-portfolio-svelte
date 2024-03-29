import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
// Define Shopify
defineSkill({
	slug: 'shopify',
	color: '#96bf48', // Shopify color code
	description:
		"Shopify is a leading e-commerce platform that enables businesses to set up and manage their online stores with ease. With its user-friendly interface and extensive features, Shopify empowers merchants to sell products online, manage inventory, process orders, and customize their storefronts without the need for extensive technical knowledge.",
	logo: Assets.ShopifyPartner,
	name: 'Shopify',
	category: 'platforms'
}),


// Define OpenCart
defineSkill({
	slug: 'opencart',
	color: '#f37034', // OpenCart color code
	description:
		"OpenCart is an open-source e-commerce platform known for its simplicity and flexibility. It offers a range of features including a user-friendly admin interface, customizable templates, multi-store support, and a robust extension system. OpenCart is suitable for businesses of all sizes looking to establish an online presence and sell products effectively.",
	logo: Assets.Opencart,
	name: 'OpenCart',
	category: 'platforms'
}),

// Define WordPress
defineSkill({
	slug: 'wordpress',
	color: '#21759b', // WordPress color code
	description:
		"WordPress is a versatile content management system (CMS) that powers a significant portion of the web. It is renowned for its ease of use, extensive plugin ecosystem, and flexibility, making it suitable for various types of websites, from blogs and portfolios to e-commerce stores and corporate sites. With WordPress, users can create and manage content efficiently, customize their websites with themes and plugins, and scale their online presence as needed.",
	logo: Assets.Wordpress,
	name: 'WordPress',
	category: 'platforms'
}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'My journey with JavaScript began with immersive online tutorials and hands-on practice. From mastering basic syntax to tackling advanced concepts like DOM manipulation, I \'ve honed my skills through project-based learning. JavaScript powers my passion for web development, enabling me to create dynamic and interactive experiences for users. Let\'s build something amazing together.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'My journey with TypeScript began as I delved into the world of statically typed JavaScript. Through dedicated learning and hands-on projects, I\'ve embraced TypeScript\'s ability to catch errors early and enhance code maintainability. From defining precise interfaces to leveraging advanced features like decorators, TypeScript has empowered me to write cleaner and more robust code.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS is the language that brings life and style to the web. With CSS, I\'ve mastered the art of designing visually appealing and responsive user interfaces. From simple layouts to complex animations, CSS allows me to transform ideas into captivating digital experiences. I continually explore new techniques and best practices to stay at the forefront of web design.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML serves as the backbone of the web, providing structure and semantics to content. With HTML, I\'ve crafted accessible and SEO-friendly web pages that prioritize user experience. From semantic markup to modern HTML5 features, I leverage the power of HTML to create well-structured and future-proof websites.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass revolutionized my approach to CSS with its powerful features and enhanced workflow. With Sass, I\'ve embraced modular and maintainable stylesheets, utilizing variables, mixins, and nesting to streamline development. Whether it\'s organizing stylesheets or implementing design systems, Sass empowers me to write CSS with confidence and efficiency.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React Js has redefined the way I build dynamic and interactive user interfaces. With React, I\'ve mastered component-based architecture and state management, creating reusable and scalable UI components. From single-page applications to complex web interfaces, React empowers me to build responsive and performant user experiences.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			'Svelte has transformed my approach to frontend development with its innovative compiler-driven approach. With Svelte, I\'ve embraced reactive programming and component encapsulation, simplifying complex UI logic. Whether it\'s optimizing performance or enhancing developer experience, Svelte enables me to build efficient and maintainable web applications.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description:
			'PHP has been the backbone of numerous web projects, enabling server-side scripting and dynamic content generation. With PHP, I\'ve built robust backend systems and integrated with various databases and third-party APIs. From content management systems to e-commerce platforms, PHP empowers me to create scalable and secure web applications.',
		logo: Assets.Php,
		name: 'Php',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'Python\'s simplicity and versatility have made it my go-to language for a wide range of projects. From web development to data analysis and machine learning, Python excels in diverse domains. With Python, I\'ve crafted efficient algorithms, implemented automation scripts, and developed scalable web applications. Its rich ecosystem and readability make Python a joy to work with.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	})
	

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
