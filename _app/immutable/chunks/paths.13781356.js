import{n as c,s as g}from"./scheduler.7a274a43.js";const e=[];function p(n,l=c){let i;const o=new Set;function r(t){if(g(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,a)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_lg5da7)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_lg5da7)==null?void 0:u.assets)??d;export{q as a,d as b,p as w};
