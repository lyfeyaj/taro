(window.webpackJsonp=window.webpackJsonp||[]).push([[1563],{1627:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var l=n(2197),a=n(2198),r=(n(0),n(2199)),c={title:"Taro.uploadFile(option)",sidebar_label:"uploadFile"},b={unversionedId:"apis/network/upload/uploadFile",id:"version-3.2.0-canary.3/apis/network/upload/uploadFile",isDocsHomePage:!1,title:"Taro.uploadFile(option)",description:"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-3.2.0-canary.3/apis/network/upload/uploadFile.md",slug:"/apis/network/upload/uploadFile",permalink:"/taro/docs/3.2.0-canary.3/apis/network/upload/uploadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/apis/network/upload/uploadFile.md",version:"3.2.0-canary.3",sidebar_label:"uploadFile",sidebar:"version-3.2.0-canary.3/API",previous:{title:"DownloadTask",permalink:"/taro/docs/3.2.0-canary.3/apis/network/download/DownloadTask"},next:{title:"UploadTask",permalink:"/taro/docs/3.2.0-canary.3/apis/network/upload/UploadTask"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[]},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d ",Object(r.b)("inlineCode",{parentName:"p"},"content-type")," \u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"multipart/form-data"),"\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"}),"\u76f8\u5173\u8bf4\u660e"),"\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult & UploadTask> & UploadTask\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"url"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u5730\u5740")),Object(r.b)("tr",null,Object(r.b)("td",null,"filePath"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u8981\u4e0a\u4f20\u6587\u4ef6\u8d44\u6e90\u7684\u8def\u5f84")),Object(r.b)("tr",null,Object(r.b)("td",null,"name"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u6587\u4ef6\u5bf9\u5e94\u7684 key\uff0c\u5f00\u53d1\u8005\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a key \u83b7\u53d6\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9")),Object(r.b)("tr",null,Object(r.b)("td",null,"header"),Object(r.b)("td",null,Object(r.b)("code",null,"Record<string, any>")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"HTTP \u8bf7\u6c42 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(r.b)("tr",null,Object(r.b)("td",null,"formData"),Object(r.b)("td",null,Object(r.b)("code",null,"Record<string, any>")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"HTTP \u8bf7\u6c42\u4e2d\u5176\u4ed6\u989d\u5916\u7684 form data")),Object(r.b)("tr",null,Object(r.b)("td",null,"timeout"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2")),Object(r.b)("tr",null,Object(r.b)("td",null,"fileName"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u4e0a\u4f20\u7684\u6587\u4ef6\u540d",Object(r.b)("br",null),"API \u652f\u6301\u5ea6: h5")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Option.fileName"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"data"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e")),Object(r.b)("tr",null,Object(r.b)("td",null,"statusCode"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseImage({\n  success (res) {\n    const tempFilePaths = res.tempFilePaths\n    Taro.uploadFile({\n      url: 'https://example.weixin.qq.com/upload', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n      filePath: tempFilePaths[0],\n      name: 'file',\n      formData: {\n        'user': 'test'\n      },\n      success (res){\n        const data = res.data\n        //do something\n      }\n    })\n  }\n})\n")),Object(r.b)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"const uploadTask = Taro.uploadFile({\n  url: 'https://example.weixin.qq.com/upload', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  filePath: tempFilePaths[0],\n  name: 'file',\n  formData:{\n    'user': 'test'\n  },\n  success: function (res){\n    var data = res.data\n    //do something\n  }\n})\nuploadTask.progress((res) => {\n  console.log('\u4e0a\u4f20\u8fdb\u5ea6', res.progress)\n  console.log('\u5df2\u7ecf\u4e0a\u4f20\u7684\u6570\u636e\u957f\u5ea6', res.totalBytesSent)\n  console.log('\u9884\u671f\u9700\u8981\u4e0a\u4f20\u7684\u6570\u636e\u603b\u957f\u5ea6', res.totalBytesExpectedToSend)\n})\nuploadTask.abort() // \u53d6\u6d88\u4e0a\u4f20\u4efb\u52a1\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.uploadFile"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0},2197:function(e,t,n){"use strict";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return l}))},2198:function(e,t,n){"use strict";function l(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return l}))},2199:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=l,j=d["".concat(c,".").concat(s)]||d[s]||O[s]||r;return n?a.a.createElement(j,b(b({ref:t},i),{},{components:n})):a.a.createElement(j,b({ref:t},i))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,c=new Array(r);c[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:l,c[1]=b;for(var i=2;i<r;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);