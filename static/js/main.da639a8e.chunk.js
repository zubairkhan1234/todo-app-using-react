(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(t,e,c){},8:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(6),s=c(7),o=c(1),r=c.n(o),i=c(5),l=c.n(i);c(14);function u(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),c=e[0],i=e[1];r.a.useEffect((function(){var t=localStorage.getItem("Data");t&&i(JSON.parse(t))}),[]),r.a.useEffect((function(){localStorage.setItem("Data",JSON.stringify(c))}));return Object(n.jsxs)("div",{className:"todoList",children:[Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=document.getElementById("TodoText").value;""===e&&alert("some text "),i((function(t){return t.concat(e)}))},className:"form",children:[Object(n.jsx)("h1",{children:"ToDo App"}),Object(n.jsx)("input",{type:"text",id:"TodoText",placeholder:"Type......."}),Object(n.jsx)("button",{children:" Add "})]}),c.map((function(t,e){return Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("p",{className:"listText",children:t}),Object(n.jsx)("i",{className:"fas fa-trash-alt button",onClick:function(){return function(t){var e=Object(a.a)(c);e.splice(t,1),i(e)}(e)}})]},e)}))]})}l.a.render(Object(n.jsx)(u,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.da639a8e.chunk.js.map