(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{2197:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2198:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},2199:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,O=s["".concat(a,".").concat(d)]||s[d]||p[d]||l;return n?c.a.createElement(O,o(o({ref:t},i),{},{components:n})):c.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var i=2;i<l;i++)a[i]=n[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2197),c=n(2198),l=(n(0),n(2199)),a={title:"Taro.login(option)",sidebar_label:"login"},o={unversionedId:"apis/open-api/login/login",id:"version-3.2.0-canary.3/apis/open-api/login/login",isDocsHomePage:!1,title:"Taro.login(option)",description:"\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1\uff08code\uff09\u3002\u901a\u8fc7\u51ed\u8bc1\u8fdb\u800c\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\uff08openid\uff09\u53ca\u672c\u6b21\u767b\u5f55\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff08session_key\uff09\u7b49\u3002\u7528\u6237\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u901a\u8baf\u9700\u8981\u4f9d\u8d56\u4f1a\u8bdd\u5bc6\u94a5\u5b8c\u6210\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 \u5c0f\u7a0b\u5e8f\u767b\u5f55\u3002",source:"@site/versioned_docs/version-3.2.0-canary.3/apis/open-api/login/login.md",slug:"/apis/open-api/login/login",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/login/login",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/apis/open-api/login/login.md",version:"3.2.0-canary.3",sidebar_label:"login",sidebar:"version-3.2.0-canary.3/API",previous:{title:"Stats",permalink:"/taro/docs/3.2.0-canary.3/apis/files/Stats"},next:{title:"Taro.checkSession(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/login/checkSession"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1\uff08code\uff09\u3002\u901a\u8fc7\u51ed\u8bc1\u8fdb\u800c\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\uff08openid\uff09\u53ca\u672c\u6b21\u767b\u5f55\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff08session_key\uff09\u7b49\u3002\u7528\u6237\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u901a\u8baf\u9700\u8981\u4f9d\u8d56\u4f1a\u8bdd\u5bc6\u94a5\u5b8c\u6210\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html"}),"\u5c0f\u7a0b\u5e8f\u767b\u5f55"),"\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"timeout"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms")))),Object(l.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"code"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u7528\u6237\u767b\u5f55\u51ed\u8bc1\uff08\u6709\u6548\u671f\u4e94\u5206\u949f\uff09\u3002\u5f00\u53d1\u8005\u9700\u8981\u5728\u5f00\u53d1\u8005\u670d\u52a1\u5668\u540e\u53f0\u8c03\u7528 ",Object(l.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html"},"auth.code2Session"),"\uff0c\u4f7f\u7528 code \u6362\u53d6 openid \u548c session_key \u7b49\u4fe1\u606f")),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.login({\n  success: function (res) {\n    if (res.code) {\n      //\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\n      Taro.request({\n        url: 'https://test.com/onLogin',\n        data: {\n          code: res.code\n        }\n      })\n    } else {\n      console.log('\u767b\u5f55\u5931\u8d25\uff01' + res.errMsg)\n    }\n  }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.login"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);