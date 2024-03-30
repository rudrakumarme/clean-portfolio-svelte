import{s as l1,f as x,a as T,g as y,h as V,d as p,c as S,j as c,i as A,K as C,L as j,M as b1,u as L1,o as t1,l as U,m as G,T as K,p as M1,O as R,q as C1,U as i1,V as o1,n as W,W as w1,I as c1,N as x1,k as u}from"../chunks/scheduler.7a274a43.js";import{S as r1,i as n1,b as I,d as Y,m as F,a as D,t as q,e as Q,c as y1,g as V1}from"../chunks/index.28409b7f.js";import{U as h1,e as X,g as u1}from"../chunks/UIcon.3db36554.js";import{w as A1}from"../chunks/paths.540fc208.js";import{P as $}from"../chunks/types.333b5f7d.js";import{u as H1,M as E1,t as T1}from"../chunks/app.515a4485.js";import{s as S1,n as m1,l as f1,t as B1,a as v1}from"../chunks/home.700cddb3.js";import{i as $1}from"../chunks/skills.4d57b871.js";import{i as P1}from"../chunks/index.367653ed.js";function p1(t,e,l){const n=t.slice();return n[16]=e[l],n}function d1(t){let e,l,n,s,r,a,o=t[16].name+"",h,_;return{c(){e=x("div"),l=x("img"),r=T(),a=x("span"),h=U(o),_=T(),this.h()},l(m){e=y(m,"DIV",{class:!0});var g=V(e);l=y(g,"IMG",{class:!0,src:!0,alt:!0}),r=S(g),a=y(g,"SPAN",{class:!0});var L=V(a);h=G(L,o),L.forEach(p),_=S(g),g.forEach(p),this.h()},h(){c(l,"class","w-120px h-120px aspect-square"),K(l.src,n=u1(t[16].logo))||c(l,"src",n),c(l,"alt",s=t[16].name),c(a,"class","text-center m-t-20px"),c(e,"class","box-content w-150px p-15px col-center")},m(m,g){A(m,e,g),C(e,l),C(e,r),C(e,a),C(a,h),C(e,_)},p(m,g){g&1&&!K(l.src,n=u1(m[16].logo))&&c(l,"src",n),g&1&&s!==(s=m[16].name)&&c(l,"alt",s),g&1&&o!==(o=m[16].name+"")&&M1(h,o)},d(m){m&&p(e)}}}function j1(t){let e,l,n,s,r,a,o,h,_,m,g;n=new h1({props:{icon:"i-carbon-chevron-left"}});let L=X(t[0]),d=[];for(let z=0;z<L.length;z+=1)d[z]=d1(p1(t,L,z));return h=new h1({props:{icon:"i-carbon-chevron-right"}}),{c(){e=x("div"),l=x("button"),I(n.$$.fragment),s=T(),r=x("div");for(let z=0;z<d.length;z+=1)d[z].c();a=T(),o=x("button"),I(h.$$.fragment),this.h()},l(z){e=y(z,"DIV",{class:!0});var w=V(e);l=y(w,"BUTTON",{class:!0});var v=V(l);Y(n.$$.fragment,v),v.forEach(p),s=S(w),r=y(w,"DIV",{class:!0});var B=V(r);for(let f=0;f<d.length;f+=1)d[f].l(B);B.forEach(p),a=S(w),o=y(w,"BUTTON",{class:!0});var H=V(o);Y(h.$$.fragment,H),H.forEach(p),w.forEach(p),this.h()},h(){c(l,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border-light)] bg-transparent rounded-[0%] hover:border-[var(--border-hover)]"),c(r,"class","row overflow-hidden box-content w-150px"),c(o,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border-light)] bg-transparent rounded-[0%] hover:border-[var(--border-hover)]"),c(e,"class","carrousel flex-[0.5] row-center")},m(z,w){A(z,e,w),C(e,l),F(n,l,null),C(e,s),C(e,r);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(r,null);t[11](r),C(e,a),C(e,o),F(h,o,null),_=!0,m||(g=[j(l,"click",t[2]),j(l,"keyup",t[8]),j(l,"keydown",t[9]),j(l,"keypress",t[10]),j(o,"click",t[3]),j(o,"keyup",t[5]),j(o,"keydown",t[6]),j(o,"keypress",t[7])],m=!0)},p(z,[w]){if(w&1){L=X(z[0]);let v;for(v=0;v<L.length;v+=1){const B=p1(z,L,v);d[v]?d[v].p(B,w):(d[v]=d1(B),d[v].c(),d[v].m(r,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=L.length}},i(z){_||(D(n.$$.fragment,z),D(h.$$.fragment,z),_=!0)},o(z){q(n.$$.fragment,z),q(h.$$.fragment,z),_=!1},d(z){z&&p(e),Q(n),b1(d,z),t[11](null),Q(h),m=!1,L1(g)}}}const D1=2e3;function O1(t,e,l){let{items:n=[]}=e,s,r,a=0,o=!0;const h=f=>{f?a<n.length-1?l(4,a=a+1):(l(4,a=a-1),o=!1):a>0?l(4,a=a-1):(l(4,a=a+1),o=!0)},_=f=>{clearTimeout(r),r=setTimeout(()=>{h(f),_(o)},D1)},m=()=>{clearTimeout(r),o=!1,h(!1),_(o)},g=()=>{clearTimeout(r),o=!0,h(!0),_(o)};t1(()=>{_(!0)});function L(f){R.call(this,t,f)}function d(f){R.call(this,t,f)}function z(f){R.call(this,t,f)}function w(f){R.call(this,t,f)}function v(f){R.call(this,t,f)}function B(f){R.call(this,t,f)}function H(f){C1[f?"unshift":"push"](()=>{s=f,l(1,s)})}return t.$$set=f=>{"items"in f&&l(0,n=f.items)},t.$$.update=()=>{t.$$.dirty&18&&s&&s.scroll({left:a*150,behavior:"smooth"})},[n,s,m,g,a,L,d,z,w,v,B,H]}class q1 extends r1{constructor(e){super(),n1(this,e,O1,j1,l1,{items:0})}}var N=(t=>(t.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",t.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",t.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",t.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",t.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",t.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",t.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",t.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",t.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",t.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",t.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",t.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",t.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",t.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",t.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",t.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",t.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",t.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",t.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",t.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",t.Medium="M9.031,0C4.047,0,0,4.047,0,9.031v105.938C0,119.953,4.047,124,9.031,124h105.938c4.984,0,9.031-4.047,9.031-9.031V9.031C124,4.047,119.953,0,114.969,0H9.031zM97.25,37.109l-6.563,6.25c-0.781,0.781-1.172,1.875-1.172,2.969v32.813c0,1.094,0.391,2.188,1.172,2.969l6.563,6.25V37.109zM44.609,50.672l15.625,15.234l-15.625,15.234V50.672zM34.781,50.078v23.438l29.688-11.719L34.781,50.078zM89.219,73.516L64.531,85.234l24.688,11.719V73.516z",t.Quora="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 3.5 12 3.5 21.5 7.762 21.5 13 17.238 22.5 12 22.5zm-3.5-8.5h7v-2h-7v2zm0-4h7v-2h-7v2z",t.Instagram="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.75 15.75h-1.5c.01-.34.02-.68.02-1.02 0-3.63-2.94-6.57-6.57-6.57-3.63 0-6.57 2.94-6.57 6.57 0 .",t))(N||{});const Z1=t=>{switch(t){case $.GitHub:return"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";case $.Linkedin:return"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z";case $.StackOverflow:return"m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z";case $.Facebook:return"M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z";case $.Email:return"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z";case $.Twitter:return"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";case $.Youtube:return"M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z";case $.Medium:return"M9.031,0C4.047,0,0,4.047,0,9.031v105.938C0,119.953,4.047,124,9.031,124h105.938c4.984,0,9.031-4.047,9.031-9.031V9.031C124,4.047,119.953,0,114.969,0H9.031zM97.25,37.109l-6.563,6.25c-0.781,0.781-1.172,1.875-1.172,2.969v32.813c0,1.094,0.391,2.188,1.172,2.969l6.563,6.25V37.109zM44.609,50.672l15.625,15.234l-15.625,15.234V50.672zM34.781,50.078v23.438l29.688-11.719L34.781,50.078zM89.219,73.516L64.531,85.234l24.688,11.719V73.516z";case $.Quora:return"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 3.5 12 3.5 21.5 7.762 21.5 13 17.238 22.5 12 22.5zm-3.5-8.5h7v-2h-7v2zm0-4h7v-2h-7v2z";case $.Instagram:return"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.75 15.75h-1.5c.01-.34.02-.68.02-1.02 0-3.63-2.94-6.57-6.57-6.57-3.63 0-6.57 2.94-6.57 6.57 0 ."}},z1=t=>t===N.Youtube?"0 0 461.001 461.001":t===N.Facebook?"0 0 408.788 408.788":[N.GitHub,N.Search,N.Code].includes(t)?"0 0 16 16":"0 0 24 24";function R1(t){let e,l,n;return{c(){e=i1("svg"),l=i1("path"),this.h()},l(s){e=o1(s,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var r=V(e);l=o1(r,"path",{d:!0}),V(l).forEach(p),r.forEach(p),this.h()},h(){c(l,"d",t[2]),c(e,"class","inline-block"),c(e,"viewBox",n=z1(t[2])),c(e,"fill",t[1]),c(e,"height",t[0]),c(e,"width",t[0])},m(s,r){A(s,e,r),C(e,l),t[4](e)},p(s,[r]){r&4&&c(l,"d",s[2]),r&4&&n!==(n=z1(s[2]))&&c(e,"viewBox",n),r&2&&c(e,"fill",s[1]),r&1&&c(e,"height",s[0]),r&1&&c(e,"width",s[0])},i:W,o:W,d(s){s&&p(e),t[4](null)}}}function N1(t,e,l){let n,{size:s="30px"}=e,{color:r="var(--main-text)"}=e,{icon:a}=e;function o(h){C1[h?"unshift":"push"](()=>{n=h,l(3,n)})}return t.$$set=h=>{"size"in h&&l(0,s=h.size),"color"in h&&l(1,r=h.color),"icon"in h&&l(2,a=h.icon)},[s,r,a,n,o]}class U1 extends r1{constructor(e){super(),n1(this,e,N1,R1,l1,{size:0,color:1,icon:2})}}function g1(t,e,l){const n=t.slice();return n[8]=e[l],n}function G1(t){let e,l;return{c(){e=x("video"),this.h()},l(n){e=y(n,"VIDEO",{preload:!0,poster:!0,style:!0,src:!0}),V(e).forEach(p),this.h()},h(){e.autoplay=!0,e.loop=!0,e.muted=!0,e.playsInline=!0,c(e,"preload","metadata"),c(e,"poster","/hero-desktop-poster.webp?tr=q-95"),u(e,"position","initial"),u(e,"visibility","visible"),u(e,"display","block"),u(e,"height","100%"),u(e,"object-fit","cover"),u(e,"pointer-events","none"),u(e,"width","100%"),u(e,"left","0px"),u(e,"top","0px"),u(e,"height","100%"),u(e,"left","0px"),u(e,"pointer-events","none"),u(e,"position","absolute"),u(e,"top","0px"),u(e,"width","100%"),u(e,"z-index","0"),K(e.src,l="/hero-desktop.mp4?tr=q-95")||c(e,"src",l)},m(n,s){A(n,e,s)},d(n){n&&p(e)}}}function I1(t){let e,l;return{c(){e=x("video"),this.h()},l(n){e=y(n,"VIDEO",{preload:!0,poster:!0,style:!0,src:!0}),V(e).forEach(p),this.h()},h(){e.autoplay=!0,e.loop=!0,e.muted=!0,e.playsInline=!0,c(e,"preload","metadata"),c(e,"poster","/hero-mobile-poster.webp?tr=q-95"),u(e,"position","initial"),u(e,"visibility","visible"),u(e,"display","block"),u(e,"height","100%"),u(e,"object-fit","cover"),u(e,"pointer-events","none"),u(e,"width","100%"),u(e,"left","0px"),u(e,"top","0px"),u(e,"height","100%"),u(e,"left","0px"),u(e,"pointer-events","none"),u(e,"position","absolute"),u(e,"top","0px"),u(e,"width","100%"),u(e,"z-index","0"),K(e.src,l="/hero-mobile.mp4?tr=q-95")||c(e,"src",l)},m(n,s){A(n,e,s)},d(n){n&&p(e)}}}function Y1(t){let e,l,n,s;return{c(){e=U("I'm "),l=U(m1),n=T(),s=U(f1)},l(r){e=G(r,"I'm "),l=G(r,m1),n=S(r),s=G(r,f1)},m(r,a){A(r,e,a),A(r,l,a),A(r,n,a),A(r,s,a)},p:W,d(r){r&&(p(e),p(l),p(n),p(s))}}}function _1(t){let e,l,n,s;return l=new U1({props:{icon:Z1(t[8].platform),color:"var(--accent-text)",size:"20px"}}),{c(){e=x("a"),I(l.$$.fragment),n=T(),this.h()},l(r){e=y(r,"A",{class:!0,href:!0,target:!0,rel:!0});var a=V(e);Y(l.$$.fragment,a),n=S(a),a.forEach(p),this.h()},h(){c(e,"class","decoration-none"),c(e,"href",`${t[2](t[8].link)?"mailto:":""}${t[8].link}`),c(e,"target","_blank"),c(e,"rel","noreferrer")},m(r,a){A(r,e,a),F(l,e,null),C(e,n),s=!0},p:W,i(r){s||(D(l.$$.fragment,r),s=!0)},o(r){q(l.$$.fragment,r),s=!1},d(r){r&&p(e),Q(l)}}}function F1(t){let e,l=`.cursor {
		  opacity: 1;
		  animation: blink-animation 1s steps(2, start) infinite;
		}
		@keyframes blink-animation {
		  to {
			opacity: 0;
		  }
		}

		@media (max-width: 768px) {
			.cursor {
				display: none;
			}
		}

		.z-index-2 {
			z-index: 2;
		}
		
	  `,n,s,r,a,o,h,_,m,g,L,d,z=`<a href="https://calendly.com/rudrakumarme/30min" class="transparent-button">Let&#39;s Talk
			<svg width="19" height="8" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-b5xc4a-2 ggybSB"><path d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z" fill="white"></path></svg></a>`,w,v,B,H,f;document.title=H1(B1,T1);function a1(i,k){return i[0]?I1:G1}let J=a1(t),P=J(t);o=new E1({props:{classes:"",$$slots:{default:[Y1]},$$scope:{ctx:t}}});let O=X(v1),b=[];for(let i=0;i<O.length;i+=1)b[i]=_1(g1(t,O,i));const k1=i=>q(b[i],1,1,()=>{b[i]=null});return H=new q1({props:{items:S1??$1}}),{c(){e=x("style"),e.textContent=l,n=T(),P.c(),s=T(),r=x("div"),a=x("div"),I(o.$$.fragment),h=T(),_=x("p"),m=U(t[1]),g=U(" "),L=T(),d=x("div"),d.innerHTML=z,w=T(),v=x("div");for(let i=0;i<b.length;i+=1)b[i].c();B=T(),I(H.$$.fragment),this.h()},l(i){const k=w1("svelte-iujtf6",document.head);e=y(k,"STYLE",{["data-svelte-h"]:!0}),c1(e)!=="svelte-1g7uc1l"&&(e.textContent=l),k.forEach(p),n=S(i),P.l(i),s=S(i),r=y(i,"DIV",{class:!0});var E=V(r);a=y(E,"DIV",{class:!0});var M=V(a);Y(o.$$.fragment,M),h=S(M),_=y(M,"P",{class:!0});var Z=V(_);m=G(Z,t[1]),g=G(Z," "),Z.forEach(p),L=S(M),d=y(M,"DIV",{class:!0,["data-svelte-h"]:!0}),c1(d)!=="svelte-vm03k3"&&(d.innerHTML=z),w=S(M),v=y(M,"DIV",{class:!0});var s1=V(v);for(let e1=0;e1<b.length;e1+=1)b[e1].l(s1);s1.forEach(p),M.forEach(p),B=S(E),Y(H.$$.fragment,E),E.forEach(p),this.h()},h(){c(_,"class","text-[var(--light-0)] text-center text-[1.2em] p-y-10px p-x-0px gap-2 font-black"),c(d,"class","row justify-center p-y-15px p-x-0px gap-2"),c(v,"class","row justify-center p-y-15px p-x-0px gap-2"),c(a,"class","flex-1 gap-10px"),c(r,"class","col self-center flex-1 justify-center lg:justify-between items-center p-y-60px p-x-10px z-index-2")},m(i,k){C(document.head,e),A(i,n,k),P.m(i,k),A(i,s,k),A(i,r,k),C(r,a),F(o,a,null),C(a,h),C(a,_),C(_,m),C(_,g),C(a,L),C(a,d),C(a,w),C(a,v);for(let E=0;E<b.length;E+=1)b[E]&&b[E].m(v,null);C(r,B),F(H,r,null),f=!0},p(i,[k]){J!==(J=a1(i))&&(P.d(1),P=J(i),P&&(P.c(),P.m(s.parentNode,s)));const E={};if(k&2048&&(E.$$scope={dirty:k,ctx:i}),o.$set(E),(!f||k&2)&&M1(m,i[1]),k&4){O=X(v1);let M;for(M=0;M<O.length;M+=1){const Z=g1(i,O,M);b[M]?(b[M].p(Z,k),D(b[M],1)):(b[M]=_1(Z),b[M].c(),D(b[M],1),b[M].m(v,null))}for(V1(),M=O.length;M<b.length;M+=1)k1(M);y1()}},i(i){if(!f){D(o.$$.fragment,i);for(let k=0;k<O.length;k+=1)D(b[k]);D(H.$$.fragment,i),f=!0}},o(i){q(o.$$.fragment,i),b=b.filter(Boolean);for(let k=0;k<b.length;k+=1)q(b[k]);q(H.$$.fragment,i),f=!1},d(i){i&&(p(n),p(s),p(r)),p(e),P.d(i),Q(o),b1(b,i),Q(H)}}}function Q1(t,e,l){let n,s=!1;t1(()=>{const m=navigator.userAgent;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(m)&&l(0,s=!0)});const r=m=>{const g=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!P1(m)&&g.test(m)},a=A1("");x1(t,a,m=>l(1,n=m));const o=["a full stack developer","a web developer","e-commerce developer","an open source contributor","shopify expert","a freelancer","opencart expert"];let h=0;function _(){a.set("");let m=0;const g=o[h],L=setInterval(()=>{a.update(d=>d+g[m]),m++,m===g.length&&(clearInterval(L),h=(h+1)%o.length,setTimeout(_,300))},50)}return t1(()=>{_(),setInterval(()=>{},130)}),[s,n,r,a]}class a2 extends r1{constructor(e){super(),n1(this,e,Q1,F1,l1,{})}}export{a2 as component};
