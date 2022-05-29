"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8326],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),s=p(r),k=i,f=s["".concat(l,".").concat(k)]||s[k]||c[k]||a;return r?o.createElement(f,m(m({ref:t},u),{},{components:r})):o.createElement(f,m({ref:t},u))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,m=new Array(a);m[0]=s;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:i,m[1]=n;for(var p=2;p<a;p++)m[p]=r[p];return o.createElement.apply(null,m)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73937:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return n},toc:function(){return p}});var o=r(87462),i=r(63366),a=(r(67294),r(3905)),m=["components"],n={},l=void 0,p=[{value:"5.2.1 (2022-06-21)",id:"521-2022-06-21",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"5.1.5 (2022-05-29)",id:"515-2022-05-29",level:2},{value:"5.1.4 (2022-05-19)",id:"514-2022-05-19",level:2},{value:"5.1.3 (2022-04-27)",id:"513-2022-04-27",level:2},{value:"5.1.2 (2022-04-10)",id:"512-2022-04-10",level:2},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"Features",id:"features",level:3},{value:"5.1.1 (2022-03-20)",id:"511-2022-03-20",level:2},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"Features",id:"features-1",level:3},{value:"5.0.5 (2022-02-27)",id:"505-2022-02-27",level:2},{value:"5.0.4 (2022-02-22)",id:"504-2022-02-22",level:2},{value:"5.0.3 (2022-02-20)",id:"503-2022-02-20",level:2},{value:"Bug Fixes",id:"bug-fixes-3",level:3},{value:"Features",id:"features-2",level:3}],u={toc:p};function c(e){var t=e.components,r=(0,i.Z)(e,m);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All notable changes to this project will be documented in this file.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://conventionalcommits.org"},"Conventional Commits")," for commit guidelines."),(0,a.kt)("h2",{id:"521-2022-06-21"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.2.0...v5.2.1"},"5.2.1")," (2022-06-21)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,a.kt)("h1",{id:"520-2022-06-10"},(0,a.kt)("a",{parentName:"h1",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.5...v5.2.0"},"5.2.0")," (2022-06-10)"),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," allow changing PK via UoW (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/32ab21583d2718ab874ff71b3f13c9e6a9e5faf0"},"32ab215"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/3184"},"#3184")),(0,a.kt)("li",{parentName:"ul"},"typing detection with typescript 4.7 node16 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/3163"},"#3163"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/08322fa90112534629e4d2327991519e0b3e01c4"},"08322fa"),")")),(0,a.kt)("h2",{id:"515-2022-05-29"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.4...v5.1.5"},"5.1.5")," (2022-05-29)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,a.kt)("h2",{id:"514-2022-05-19"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.3...v5.1.4"},"5.1.4")," (2022-05-19)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,a.kt)("h2",{id:"513-2022-04-27"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.2...v5.1.3"},"5.1.3")," (2022-04-27)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,a.kt)("h2",{id:"512-2022-04-10"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.1...v5.1.2"},"5.1.2")," (2022-04-10)"),(0,a.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"postgres:")," do not ignore custom PK constraint names (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2931"},"#2931"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/24bf10e668dd2d3b4b6cc4c52ed215fbffcc9d45"},"24bf10e"),")")),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"schema:")," support mysql 8 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2961"},"#2961"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/acc960ebc694c61a959f48e89a9fee5513f6bdfa"},"acc960e"),")")),(0,a.kt)("h2",{id:"511-2022-03-20"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.1.0...v5.1.1"},"5.1.1")," (2022-03-20)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,a.kt)("h1",{id:"510-2022-03-13"},(0,a.kt)("a",{parentName:"h1",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.5...v5.1.0"},"5.1.0")," (2022-03-13)"),(0,a.kt)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," do not alias JSON conditions on update/delete queries (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/5c0674e61d97f9b143b48ae5314e5e7d1eeb4529"},"5c0674e"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2839"},"#2839"))),(0,a.kt)("h3",{id:"features-1"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," map check constraint failures to specific error type (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/ebcbdfff43cdc4069fc1c70de516493782619123"},"ebcbdff"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2836"},"#2836"))),(0,a.kt)("h2",{id:"505-2022-02-27"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.4...v5.0.5"},"5.0.5")," (2022-02-27)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,a.kt)("h2",{id:"504-2022-02-22"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.3...v5.0.4"},"5.0.4")," (2022-02-22)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @mikro-orm/better-sqlite"),(0,a.kt)("h2",{id:"503-2022-02-20"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/mikro-orm/mikro-orm/compare/v5.0.2...v5.0.3"},"5.0.3")," (2022-02-20)"),(0,a.kt)("h3",{id:"bug-fixes-3"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sqlite:")," respect ",(0,a.kt)("inlineCode",{parentName:"li"},"autoincrement: false")," in schema diffing (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/b39b6ada0e276a21c3089558a996092174b546fc"},"b39b6ad"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2800"},"#2800"))),(0,a.kt)("h3",{id:"features-2"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add better-sqlite driver (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/2792"},"#2792"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/commit/1b39d6687fc2db64e85a45f6a964cf1776a374aa"},"1b39d66"),")")))}c.isMDXComponent=!0}}]);