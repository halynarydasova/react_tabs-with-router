(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a.n(c),n=a(4),i=a(2),b=(a(14),a(15),a(16),a(6)),j=a.n(b),r=a(1),l=function(e){var t=e.activeTabId,a=e.tabs,c=a.find((function(e){return e.id===t}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:a.map((function(e){var a=e.id;return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":t===a}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(a),children:e.title})},a)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:c?c.content:"Please select a tab"})]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.g)("/tabs/:tabId"),t=null===e||void 0===e?void 0:e.params.tabId;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(l,{tabs:d,activeTabId:t})]})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(l,{tabs:d,activeTabId:t})]})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c60769a6.chunk.js.map