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
skills: getSkills('opencart', 'php', 'mysql', 'js', 'css', 'html'),
type: 'eCommerce',
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
		"skills": getSkills('opencart', 'php', 'mysql', 'js', 'css', 'html', 'eCommerce', 'web design', 'SEO optimization', 'photo printing technology'),
		"type": "eCommerce",
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
	  },
	  {
		"slug": "namoxy.com",
		"color": "#E91E61",
		"description": "Namoxy.com offers over 1,000 premium, catchy, and brandable domain names for sale online, catering to various companies and business services. With its intuitive search features, users can find domain names by industry, affordable price, and more, making it a go-to destination for acquiring the perfect domain.",
		"shortDescription": "Namoxy.com is your ultimate destination for finding premium, catchy, and brandable domain names for sale online. Whether you're searching by industry or price, our platform simplifies the process of acquiring the ideal domain for your business.",
		"links": [
			{
				"to": "https://namoxy.com/",
				"label": "Website"
			}
		],
		"logo": Assets.Namoxy, // Replace "Assets.Namoxy" with the actual path to your logo asset
		"name": "Namoxy.com",
		"period": {
			"from": new Date(2021, 0)
		},
		"skills": getSkills('wordpress', 'php', 'html', 'css', 'js', 'email automation', 'bulk editing', 'web design'),
		"type": "eCommerce",
		"screenshots": [
			{
				"label": "Homepage",
				"src": "/screenshots/namoxy_homepage.jpg"
			},
			{
				"label": "Search Results",
				"src": "/screenshots/namoxy_domains_page.jpg"
			}
		]
	},

	{
		"slug": "zumamall.com",
		"color": "#007bff",
		"description": "ZumaMall.com is a contemporary e-commerce company established in 2012 to deliver high-quality office and educational supplies in Nigeria. Since its inception, ZumaMall.com has been committed to providing thousands of clients with reliable and cost-efficient technology solutions for their collaboration, presentation, and educational needs.",
		"shortDescription": "ZumaMall.com is a leading e-commerce platform in Nigeria specializing in high-quality office and educational supplies. With a focus on professionalism and quality service delivery, we offer a wide range of audiovisual products, IT, electronics, teaching aids, and office supplies sourced from reputable manufacturers and sellers.",
		"links": [
			{
				"to": "https://zumamall.com/",
				"label": "Website"
			}
		],
		"logo": Assets.Zumamall, // Replace "Assets.ZumaMall" with the actual path to your logo asset
		"name": "ZumaMall.com",
		"period": {
			"from": new Date(2023, 5)
		},
		"skills": getSkills('opencart', 'php', 'mysql', 'javascript', 'css', 'html', 'eCommerce', 'extension development', 'theme design', 'SMS integration', 'abandoned cart recovery'),
		"type": "eCommerce",
		"screenshots": [
			{
				"label": "Homepage",
				"src": "/screenshots/zumamall_homepage.jpg"
			}
		]
	}


	
	  
];

export const title = 'Projects';
