(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),r=n.n(s),o=n(6),i=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0);!function(t){t.default="",t.ByAlphabet="Sort alphabetically",t.ByLength="Sort by length"}(c||(c={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var d=function(){var t=Object(a.useState)(c.default),e=Object(o.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(!1),l=Object(o.a)(r,2),d=l[0],j=l[1],g=function(t,e,n){var s=Object(i.a)(t);return e&&s.sort((function(t,n){switch(e){case c.ByAlphabet:return t.localeCompare(n);case c.ByLength:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(h,n,d);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==c.ByAlphabet}),onClick:function(){return s(c.ByAlphabet)},children:c.ByAlphabet}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==c.ByLength}),"is-warning":!0,onClick:function(){return s(c.ByLength)},children:c.ByLength}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!d}),onClick:function(){return j((function(t){return!t}))},children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return j(!1),void s(c.default)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};r.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14aaaf63.chunk.js.map