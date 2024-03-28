import{s as J,f as k,a as V,g as x,h as w,d,c as H,j as f,i as y,K as C,L as E,M as v1,u as g1,o as d1,l as D,m as N,T as e1,p as K,O as P,q as p1,U as t1,V as r1,n as Y,W as _1,N as z1}from"../chunks/scheduler.7a274a43.js";import{S as W,i as Q,b as O,d as R,m as q,a as T,t as S,e as G,c as C1,g as M1}from"../chunks/index.28409b7f.js";import{U as l1,e as Z,g as a1}from"../chunks/UIcon.ab5b68af.js";import{w as b1}from"../chunks/paths.f747bf15.js";import{P as $}from"../chunks/types.1ebf2f37.js";import{u as L1,M as w1,t as k1}from"../chunks/app.6746fa0d.js";import{s as x1,n as s1,l as n1,t as A1,a as o1,d as i1}from"../chunks/home.50768762.js";import{i as V1}from"../chunks/skills.816d71c7.js";import{i as H1}from"../chunks/index.3b5ea2db.js";function c1(e,t,r){const l=e.slice();return l[16]=t[r],l}function h1(e){let t,r,l,n,a,i,o=e[16].name+"",c,z;return{c(){t=k("div"),r=k("img"),a=V(),i=k("span"),c=D(o),z=V(),this.h()},l(v){t=x(v,"DIV",{class:!0});var p=w(t);r=x(p,"IMG",{class:!0,src:!0,alt:!0}),a=H(p),i=x(p,"SPAN",{class:!0});var M=w(i);c=N(M,o),M.forEach(d),z=H(p),p.forEach(d),this.h()},h(){f(r,"class","w-120px h-120px aspect-square"),e1(r.src,l=a1(e[16].logo))||f(r,"src",l),f(r,"alt",n=e[16].name),f(i,"class","text-center m-t-20px"),f(t,"class","box-content w-150px p-15px col-center")},m(v,p){y(v,t,p),C(t,r),C(t,a),C(t,i),C(i,c),C(t,z)},p(v,p){p&1&&!e1(r.src,l=a1(v[16].logo))&&f(r,"src",l),p&1&&n!==(n=v[16].name)&&f(r,"alt",n),p&1&&o!==(o=v[16].name+"")&&K(c,o)},d(v){v&&d(t)}}}function y1(e){let t,r,l,n,a,i,o,c,z,v,p;l=new l1({props:{icon:"i-carbon-chevron-left"}});let M=Z(e[0]),g=[];for(let h=0;h<M.length;h+=1)g[h]=h1(c1(e,M,h));return c=new l1({props:{icon:"i-carbon-chevron-right"}}),{c(){t=k("div"),r=k("button"),O(l.$$.fragment),n=V(),a=k("div");for(let h=0;h<g.length;h+=1)g[h].c();i=V(),o=k("button"),O(c.$$.fragment),this.h()},l(h){t=x(h,"DIV",{class:!0});var b=w(t);r=x(b,"BUTTON",{class:!0});var m=w(r);R(l.$$.fragment,m),m.forEach(d),n=H(b),a=x(b,"DIV",{class:!0});var u=w(a);for(let s=0;s<g.length;s+=1)g[s].l(u);u.forEach(d),i=H(b),o=x(b,"BUTTON",{class:!0});var B=w(o);R(c.$$.fragment,B),B.forEach(d),b.forEach(d),this.h()},h(){f(r,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),f(a,"class","row overflow-hidden box-content w-150px"),f(o,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),f(t,"class","carrousel flex-[0.5] row-center")},m(h,b){y(h,t,b),C(t,r),q(l,r,null),C(t,n),C(t,a);for(let m=0;m<g.length;m+=1)g[m]&&g[m].m(a,null);e[11](a),C(t,i),C(t,o),q(c,o,null),z=!0,v||(p=[E(r,"click",e[2]),E(r,"keyup",e[8]),E(r,"keydown",e[9]),E(r,"keypress",e[10]),E(o,"click",e[3]),E(o,"keyup",e[5]),E(o,"keydown",e[6]),E(o,"keypress",e[7])],v=!0)},p(h,[b]){if(b&1){M=Z(h[0]);let m;for(m=0;m<M.length;m+=1){const u=c1(h,M,m);g[m]?g[m].p(u,b):(g[m]=h1(u),g[m].c(),g[m].m(a,null))}for(;m<g.length;m+=1)g[m].d(1);g.length=M.length}},i(h){z||(T(l.$$.fragment,h),T(c.$$.fragment,h),z=!0)},o(h){S(l.$$.fragment,h),S(c.$$.fragment,h),z=!1},d(h){h&&d(t),G(l),v1(g,h),e[11](null),G(c),v=!1,g1(p)}}}const E1=2e3;function T1(e,t,r){let{items:l=[]}=t,n,a,i=0,o=!0;const c=s=>{s?i<l.length-1?r(4,i=i+1):(r(4,i=i-1),o=!1):i>0?r(4,i=i-1):(r(4,i=i+1),o=!0)},z=s=>{clearTimeout(a),a=setTimeout(()=>{c(s),z(o)},E1)},v=()=>{clearTimeout(a),o=!1,c(!1),z(o)},p=()=>{clearTimeout(a),o=!0,c(!0),z(o)};d1(()=>{z(!0)});function M(s){P.call(this,e,s)}function g(s){P.call(this,e,s)}function h(s){P.call(this,e,s)}function b(s){P.call(this,e,s)}function m(s){P.call(this,e,s)}function u(s){P.call(this,e,s)}function B(s){p1[s?"unshift":"push"](()=>{n=s,r(1,n)})}return e.$$set=s=>{"items"in s&&r(0,l=s.items)},e.$$.update=()=>{e.$$.dirty&18&&n&&n.scroll({left:i*150,behavior:"smooth"})},[l,n,v,p,i,M,g,h,b,m,u,B]}class $1 extends W{constructor(t){super(),Q(this,t,T1,y1,J,{items:0})}}var j=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(j||{});const S1=e=>{switch(e){case $.GitHub:return"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";case $.Linkedin:return"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z";case $.StackOverflow:return"m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z";case $.Facebook:return"M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z";case $.Email:return"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z";case $.Twitter:return"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";case $.Youtube:return"M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"}},u1=e=>e===j.Youtube?"0 0 461.001 461.001":e===j.Facebook?"0 0 408.788 408.788":[j.GitHub,j.Search,j.Code].includes(e)?"0 0 16 16":"0 0 24 24";function B1(e){let t,r,l;return{c(){t=t1("svg"),r=t1("path"),this.h()},l(n){t=r1(n,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var a=w(t);r=r1(a,"path",{d:!0}),w(r).forEach(d),a.forEach(d),this.h()},h(){f(r,"d",e[2]),f(t,"class","inline-block"),f(t,"viewBox",l=u1(e[2])),f(t,"fill",e[1]),f(t,"height",e[0]),f(t,"width",e[0])},m(n,a){y(n,t,a),C(t,r),e[4](t)},p(n,[a]){a&4&&f(r,"d",n[2]),a&4&&l!==(l=u1(n[2]))&&f(t,"viewBox",l),a&2&&f(t,"fill",n[1]),a&1&&f(t,"height",n[0]),a&1&&f(t,"width",n[0])},i:Y,o:Y,d(n){n&&d(t),e[4](null)}}}function P1(e,t,r){let l,{size:n="30px"}=t,{color:a="var(--main-text)"}=t,{icon:i}=t;function o(c){p1[c?"unshift":"push"](()=>{l=c,r(3,l)})}return e.$$set=c=>{"size"in c&&r(0,n=c.size),"color"in c&&r(1,a=c.color),"icon"in c&&r(2,i=c.icon)},[n,a,i,l,o]}class j1 extends W{constructor(t){super(),Q(this,t,P1,B1,J,{size:0,color:1,icon:2})}}function f1(e,t,r){const l=e.slice();return l[7]=t[r],l}function D1(e){let t,r,l,n,a=e[0]?"_":" ",i;return{c(){t=D(s1),r=V(),l=D(n1),n=k("span"),i=D(a),this.h()},l(o){t=N(o,s1),r=H(o),l=N(o,n1),n=x(o,"SPAN",{class:!0});var c=w(n);i=N(c,a),c.forEach(d),this.h()},h(){f(n,"class","cursor")},m(o,c){y(o,t,c),y(o,r,c),y(o,l,c),y(o,n,c),C(n,i)},p(o,c){c&1&&a!==(a=o[0]?"_":" ")&&K(i,a)},d(o){o&&(d(t),d(r),d(l),d(n))}}}function m1(e){let t,r,l,n;return r=new j1({props:{icon:S1(e[7].platform),color:"var(--accent-text)",size:"20px"}}),{c(){t=k("a"),O(r.$$.fragment),l=V(),this.h()},l(a){t=x(a,"A",{class:!0,href:!0,target:!0,rel:!0});var i=w(t);R(r.$$.fragment,i),l=H(i),i.forEach(d),this.h()},h(){f(t,"class","decoration-none"),f(t,"href",`${e[2](e[7].link)?"mailto:":""}${e[7].link}`),f(t,"target","_blank"),f(t,"rel","noreferrer")},m(a,i){y(a,t,i),q(r,t,null),C(t,l),n=!0},p:Y,i(a){n||(T(r.$$.fragment,a),n=!0)},o(a){S(r.$$.fragment,a),n=!1},d(a){a&&d(t),G(r)}}}function N1(e){let t,r,l,n,a,i,o,c,z,v,p,M,g,h,b;document.title=L1(A1,k1),n=new w1({props:{classes:"md:text-left ",$$slots:{default:[D1]},$$scope:{ctx:e}}});let m=Z(o1),u=[];for(let s=0;s<m.length;s+=1)u[s]=m1(f1(e,m,s));const B=s=>S(u[s],1,1,()=>{u[s]=null});return h=new $1({props:{items:x1??V1}}),{c(){t=V(),r=k("div"),l=k("div"),O(n.$$.fragment),a=V(),i=k("p"),o=D(e[1]),c=V(),z=k("p"),v=D(i1),p=V(),M=k("div");for(let s=0;s<u.length;s+=1)u[s].c();g=V(),O(h.$$.fragment),this.h()},l(s){_1("svelte-1tippc1",document.head).forEach(d),t=H(s),r=x(s,"DIV",{class:!0});var A=w(r);l=x(A,"DIV",{class:!0});var _=w(l);R(n.$$.fragment,_),a=H(_),i=x(_,"P",{class:!0});var U=w(i);o=N(U,e[1]),U.forEach(d),c=H(_),z=x(_,"P",{class:!0});var X=w(z);v=N(X,i1),X.forEach(d),p=H(_),M=x(_,"DIV",{class:!0});var I=w(M);for(let F=0;F<u.length;F+=1)u[F].l(I);I.forEach(d),_.forEach(d),g=H(A),R(h.$$.fragment,A),A.forEach(d),this.h()},h(){f(i,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),f(z,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),f(M,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),f(l,"class","md:flex-1 gap-10px"),f(r,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(s,L){y(s,t,L),y(s,r,L),C(r,l),q(n,l,null),C(l,a),C(l,i),C(i,o),C(l,c),C(l,z),C(z,v),C(l,p),C(l,M);for(let A=0;A<u.length;A+=1)u[A]&&u[A].m(M,null);C(r,g),q(h,r,null),b=!0},p(s,[L]){const A={};if(L&1025&&(A.$$scope={dirty:L,ctx:s}),n.$set(A),(!b||L&2)&&K(o,s[1]),L&4){m=Z(o1);let _;for(_=0;_<m.length;_+=1){const U=f1(s,m,_);u[_]?(u[_].p(U,L),T(u[_],1)):(u[_]=m1(U),u[_].c(),T(u[_],1),u[_].m(M,null))}for(M1(),_=m.length;_<u.length;_+=1)B(_);C1()}},i(s){if(!b){T(n.$$.fragment,s);for(let L=0;L<m.length;L+=1)T(u[L]);T(h.$$.fragment,s),b=!0}},o(s){S(n.$$.fragment,s),u=u.filter(Boolean);for(let L=0;L<u.length;L+=1)S(u[L]);S(h.$$.fragment,s),b=!1},d(s){s&&(d(t),d(r)),G(n),v1(u,s),G(h)}}}function U1(e,t,r){let l;const n=v=>{const p=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!H1(v)&&p.test(v)},a=b1("");z1(e,a,v=>r(1,l=v));const i=["a software engineer","a web developer","an open source contributor"];let o=0,c=!0;function z(){a.set("");let v=0;const p=i[o],M=setInterval(()=>{a.update(g=>g+p[v]),v++,v===p.length&&(clearInterval(M),o=(o+1)%i.length,setTimeout(z,2e3))},150)}return d1(()=>{z(),setInterval(()=>{r(0,c=!c)},530)}),[c,l,n,a]}class W1 extends W{constructor(t){super(),Q(this,t,U1,N1,J,{})}}export{W1 as component};
