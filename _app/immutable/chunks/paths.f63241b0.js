import{n as c,s as d}from"./scheduler.7a274a43.js";const e=[];function g(i,l=c){let o;const n=new Set;function r(t){if(d(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=l(r,f)||c),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_7oi84d)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_7oi84d)==null?void 0:a.assets)??h;export{q as a,h as b,g as w};
