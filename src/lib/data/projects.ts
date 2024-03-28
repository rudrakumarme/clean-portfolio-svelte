import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'usedproductsro',
color: '#ff3e00',
description:
  "A redesign and abandoned cart extension for Used Products, a European chain with over 60 stores across five countries, specializing in buying, selling, and marketing sustainable products, both new and second-hand, with a focus on providing customers cash for their items and warranty with each purchase. Their unique combination of physical stores and online presence allows them to efficiently serve a diverse set of needs.",
shortDescription:
  "A redesign and abandoned cart extension for Used Products, a European chain with over 60 stores across five countries, specializing in buying, selling, and marketing sustainable products, both new and second-hand, with a focus on providing customers cash for their items and warranty with each purchase.",
links: [{ to: 'https://usedproducts.ro/', label: 'Website' }],
logo: Assets.UsedProducts, // Replace with the appropriate logo variable or link
name: 'Used Products',
period: {
  from: new Date( 2023, 4),
},
skills: getSkills('opencart', 'php', 'mysql', 'javascript', 'css', 'html'),
type: 'E-commerce Website',
		screenshots: [
			{
				label: 'screen 1',
				src: '/static/screenshots/p1_ss.jpg'
			}
		]
	}
];

export const title = 'Projects';
