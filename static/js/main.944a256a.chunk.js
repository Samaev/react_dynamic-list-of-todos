(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),d=c(1),i=(c(9),c(10),c(0)),o=function(e){var t=e.todos,c=e.setSelectedTodo,s=e.setModal;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed?Object(i.jsx)("i",{className:"fas fa-check-square has-text-success"}):Object(i.jsx)("i",{className:"fas fa-exclamation-triangle has-text-danger"})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e),s(!0)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));var r=function(e){var t=e.todos,c=e.onSettingTodo,a=Object(d.useState)(""),n=Object(l.a)(a,2),o=n[0],r=n[1],j=o.toLowerCase();Object(d.useEffect)((function(){c(t.filter((function(e){return e.title.toLowerCase().includes(j)})))}),[j]);return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case s.All:c(t);break;case s.Completed:c(t.filter((function(e){return e.completed})));break;case s.Active:c(t.filter((function(e){return!e.completed})))}},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:o,onChange:function(e){return r(e.target.value)},placeholder:"Search..."}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(t),r("")}})})]})]})},j=(c(12),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),b=function(e){var t=e.selectedTodo,c=e.selectedUser,s=e.onSelectTodo,a=e.setSelectedUser,n=e.setModal;return Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),c?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(i.jsx)("h2",{children:"Title"}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(null),a(null),n(!1)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),c&&Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]}):Object(i.jsx)(j,{})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(c),n=Object(l.a)(a,2),u=n[0],m=n[1],O=Object(d.useState)(null),x=Object(l.a)(O,2),f=x[0],v=x[1],N=Object(d.useState)(null),p=Object(l.a)(N,2),y=p[0],g=p[1],S=Object(d.useState)(!1),k=Object(l.a)(S,2),T=k[0],C=k[1];return Object(d.useEffect)((function(){var e;h("/todos").then((function(e){s(e),m(e)})),f&&(e=f.userId,h("/users/".concat(e))).then(g)}),[f]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(r,{todos:c,onSettingTodo:m})}),Object(i.jsx)("div",{className:"block",children:0===c.length?Object(i.jsx)(j,{}):Object(i.jsx)(o,{todos:u,setSelectedTodo:v,setModal:C})})]})})}),T&&Object(i.jsx)(b,{selectedTodo:f,selectedUser:y,onSelectTodo:v,setSelectedUser:g,setModal:C})]})};n.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.944a256a.chunk.js.map