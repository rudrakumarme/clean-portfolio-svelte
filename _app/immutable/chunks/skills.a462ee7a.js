import{A as s}from"./UIcon.64e8cd75.js";function m(e,...a){const n=Object.assign({},e);return Object.keys(n).forEach(o=>{a.includes(o)&&delete n[o]}),n}const t=e=>e,p=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],r=e=>{const a=m(e,"category");return e.category&&(a.category=p.find(n=>n.slug===e.category)),a},c=[r({slug:"js",color:"yellow",description:"My journey with JavaScript began with immersive online tutorials and hands-on practice. From mastering basic syntax to tackling advanced concepts like DOM manipulation, I 've honed my skills through project-based learning. JavaScript powers my passion for web development, enabling me to create dynamic and interactive experiences for users. Let's build something amazing together.",logo:s.JavaScript,name:"Javascript",category:"pro-lang"}),r({slug:"ts",color:"blue",description:"My journey with TypeScript began as I delved into the world of statically typed JavaScript. Through dedicated learning and hands-on projects, I've embraced TypeScript's ability to catch errors early and enhance code maintainability. From defining precise interfaces to leveraging advanced features like decorators, TypeScript has empowered me to write cleaner and more robust code.",logo:s.TypeScript,name:"Typescript",category:"pro-lang"}),r({slug:"css",color:"blue",description:"CSS is the language that brings life and style to the web. With CSS, I've mastered the art of designing visually appealing and responsive user interfaces. From simple layouts to complex animations, CSS allows me to transform ideas into captivating digital experiences. I continually explore new techniques and best practices to stay at the forefront of web design.",logo:s.CSS,name:"CSS",category:"markup-style"}),r({slug:"html",color:"orange",description:"HTML serves as the backbone of the web, providing structure and semantics to content. With HTML, I've crafted accessible and SEO-friendly web pages that prioritize user experience. From semantic markup to modern HTML5 features, I leverage the power of HTML to create well-structured and future-proof websites.",logo:s.HTML,name:"HTML",category:"markup-style"}),r({slug:"sass",color:"pink",description:"Sass revolutionized my approach to CSS with its powerful features and enhanced workflow. With Sass, I've embraced modular and maintainable stylesheets, utilizing variables, mixins, and nesting to streamline development. Whether it's organizing stylesheets or implementing design systems, Sass empowers me to write CSS with confidence and efficiency.",logo:s.Sass,name:"Sass",category:"markup-style"}),r({slug:"reactjs",color:"cyan",description:"React Js has redefined the way I build dynamic and interactive user interfaces. With React, I've mastered component-based architecture and state management, creating reusable and scalable UI components. From single-page applications to complex web interfaces, React empowers me to build responsive and performant user experiences.",logo:s.ReactJs,name:"React Js",category:"library"}),r({slug:"svelte",color:"orange",description:"Svelte has transformed my approach to frontend development with its innovative compiler-driven approach. With Svelte, I've embraced reactive programming and component encapsulation, simplifying complex UI logic. Whether it's optimizing performance or enhancing developer experience, Svelte enables me to build efficient and maintainable web applications.",logo:s.Svelte,name:"Svelte",category:"library"}),r({slug:"php",color:"blue",description:"PHP has been the backbone of numerous web projects, enabling server-side scripting and dynamic content generation. With PHP, I've built robust backend systems and integrated with various databases and third-party APIs. From content management systems to e-commerce platforms, PHP empowers me to create scalable and secure web applications.",logo:s.Php,name:"Php",category:"pro-lang"}),r({slug:"python",color:"blue",description:"Python's simplicity and versatility have made it my go-to language for a wide range of projects. From web development to data analysis and machine learning, Python excels in diverse domains. With Python, I've crafted efficient algorithms, implemented automation scripts, and developed scalable web applications. Its rich ecosystem and readability make Python a joy to work with.",logo:s.Python,name:"Python",category:"pro-lang"})],u="Skills",y=(...e)=>c.filter(a=>e.includes(a.slug)),h=e=>{const a=[],n=[];return c.forEach(o=>{if(e.trim()&&!o.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!o.category){console.log(o.category),n.push(o);return}let i=a.find(g=>{var l;return g.category.slug===((l=o.category)==null?void 0:l.slug)});i||(i={items:[],category:o.category},a.push(i)),i.items.push(o)}),n.length!==0&&a.push({category:{name:"Others",slug:"others"},items:n}),a};export{h as a,y as g,c as i,u as t};
