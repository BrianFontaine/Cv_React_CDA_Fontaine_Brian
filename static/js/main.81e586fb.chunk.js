(this["webpackJsonpsoluclef-v_2.0.1"]=this["webpackJsonpsoluclef-v_2.0.1"]||[]).push([[0],[,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),c=a(4),s=a.n(c),r=(a(9),a(2)),l=(a(10),a(0));var i=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:Object(l.jsx)("i",{class:"fab fa-apple"})})})};a(12);var u=function(){var t=o.a.useState(localStorage.getItem("mode")),e=Object(r.a)(t,2),a=e[0],n=e[1],c=o.a.useState({tabBar:localStorage.getItem("tapBar"),button:localStorage.getItem("button"),buttonMenu:localStorage.getItem("buttonMenu"),switchMode:localStorage.getItem("switchMode")}),s=Object(r.a)(c,2),i=s[0],u=s[1];return 0==localStorage.length&&(localStorage.setItem("mode","fas fa-moon"),localStorage.setItem("tapBar","tapBarLight"),localStorage.setItem("button","buttonLight"),localStorage.setItem("buttonMenu","buttonMenuLight"),localStorage.setItem("switchMode","Dark")),Object(l.jsxs)("div",{className:i.tabBar,children:[Object(l.jsx)("div",{className:i.button,children:Object(l.jsx)("i",{class:"fas fa-envelope"})}),Object(l.jsx)("div",{className:i.button,children:Object(l.jsx)("i",{class:"fas fa-home"})}),Object(l.jsx)("div",{className:i.buttonMenu,children:Object(l.jsx)("i",{class:"fas fa-th-large"})}),Object(l.jsx)("div",{className:i.button,children:Object(l.jsx)("i",{class:"fas fa-phone"})}),Object(l.jsx)("a",{href:"#",onClick:function(t){return function(t){t.preventDefault(),"fas fa-sun"==a?(n("fas fa-moon"),localStorage.setItem("mode","fas fa-moon"),localStorage.setItem("tapBar","tapBarLight"),localStorage.setItem("button","buttonLight"),localStorage.setItem("buttonMenu","buttonMenuLight"),localStorage.setItem("switchMode","Dark"),u({tabBar:"tapBarLight",button:"buttonLight",buttonMenu:"buttonMenuLight",switchMode:"Dark"})):(n("fas fa-sun"),localStorage.setItem("mode","fas fa-sun"),localStorage.setItem("tapBar","tapBar"),localStorage.setItem("button","button"),localStorage.setItem("buttonMenu","buttonMenu"),localStorage.setItem("switchMode","Light"),u({tabBar:"tapBar",button:"button",buttonMenu:"buttonMenu",switchMode:"Light"}))}(t)},className:i.switchMode,children:Object(l.jsx)("i",{class:a})})]})};var b=function(){var t=o.a.useState(!1),e=Object(r.a)(t,2),a=e[0],n=e[1],c=o.a.useState({y:window.screen.width,x:window.screen.height}),s=Object(r.a)(c,2),b=s[0],h=s[1];return o.a.useEffect((function(){window.addEventListener("resize",(function(){h({y:window.screen.width,x:window.screen.height})}))}),[a,n]),Object(l.jsxs)("div",{children:[b.y>800?Object(l.jsx)(i,{}):"",Object(l.jsx)("h1",{children:"Fontaine Brian"}),Object(l.jsx)("h2",{children:"Concepteur d\xe9veloppeur d'application"}),b.y<800?Object(l.jsx)(u,{}):""]})},h=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),n(t),o(t),c(t),s(t)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}],[[13,1,2]]]);
//# sourceMappingURL=main.81e586fb.chunk.js.map