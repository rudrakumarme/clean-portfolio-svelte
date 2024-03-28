import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'usedproducts.ro',
color: '#ee7a01',
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
				label: 'homepage',
				src: '/screenshots/p1_ss.jpg'
			}
		]
	},
	{
		"slug": "pirktukas.lt",
		"color": "#bf1d2d",
		"description": "Pirktukas.lt stands as a beacon of fashion-forward and affordable men's clothing in Lithuania, distinguished by its unrivaled ratings from male shoppers. This e-commerce platform merges the latest fashion trends with innovative features like photo-printed clothing and wholesale offerings, catalyzing market growth. Our commitment to collaborating exclusively with reputable manufacturers ensures a consistent balance of low prices and high quality. The youthful spirit and professionalism of our team guarantee top-tier service, streamlined shopping experiences, and swift delivery across Lithuania.",
		"shortDescription": "A leading e-shop in Lithuania for men's fashion, pirktukas.lt excels in delivering trendy, affordable clothing with a commitment to quality and customer service. Specializing in photo printing and wholesale, our platform is a trendsetter in the fashion industry.",
		"links": [
		  {
			"to": "https://pirktukas.lt/",
			"label": "Website"
		  }
		],
		"logo": Assets.Pirktukas,
		"name": "Pirktukas.lt",
		"period": {
		  "from": new Date(2022, 0)
		},
		"skills": getSkills('opencart', 'php', 'mysql', 'javascript', 'css', 'html', 'eCommerce', 'web design', 'SEO optimization', 'photo printing technology'),
		"type": "E-commerce Website",
		"screenshots": [
		  {
			"label": "homepage",
			"src": "/screenshots/pirktukas_homepage.jpg"
		  },
		  {
			"label": "product page",
			"src": "/screenshots/pirktukas_product.jpg"
		  }
		]
	  }
	  
];

export const title = 'Projects';