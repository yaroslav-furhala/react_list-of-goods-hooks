(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var s=n(4),c=n.n(s),r=n(2),o=n(5),a=n.n(o),u=n(1),l=n(0),i=function(t){var e=t.goods;return Object(l.jsx)("ul",{className:"goods-list",children:e.map((function(t){return Object(l.jsx)("li",{className:"goods-list__item",children:t})}))})},b=function(t){var e=t.isReversed,n=t.setIsReversed,s=t.setSortBy,c=t.reset;return Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){return n(!e)},className:"button",children:"reverse"}),Object(l.jsx)("button",{type:"button",onClick:function(){return s("alpha")},className:"button",children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",onClick:function(){return s("length")},className:"button",children:"Sort by length"}),Object(l.jsx)("button",{type:"button",onClick:c,className:"button",children:"Reset"})]})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(){var t=Object(u.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(u.useState)(!1),o=Object(r.a)(c,2),d=o[0],h=o[1],p=Object(u.useState)(""),O=Object(r.a)(p,2),m=O[0],f=O[1],g=[].concat(j);return m&&g.sort((function(t,e){switch(m){case"alpha":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),d&&g.reverse(),Object(l.jsx)("div",{className:a()("App",{"App--before":!n,"App--after":n}),children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{goods:g}),Object(l.jsx)(b,{isReversed:d,setIsReversed:h,setSortBy:f,reset:function(){h(!1),f("")}})]}):Object(l.jsx)("button",{type:"button",onClick:function(){return s(!0)},className:"button button--start",children:"Start"})})};c.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4134086b.chunk.js.map