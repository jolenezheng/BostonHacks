(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,n){},62:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n(8),s=n.n(i),r=(n(62),n(17)),l=n(10),o=n(48),j=Object(o.a)(),d=(n(47),n(98)),b=n(99);var u=function(e){return Object(c.jsxs)("div",{children:["LOGIN",Object(c.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(c.jsx)(d.a,{id:"user",label:"Username"}),Object(c.jsx)(d.a,{id:"pass",label:"Password"})]}),Object(c.jsx)(r.b,{to:"/home",children:Object(c.jsx)(b.a,{variant:"contained",children:"Login"})})]})},O=n(15),h=n(100),x=n.p+"static/media/box.1c939293.png";function m(e){var t=Object(a.useState)(),n=Object(O.a)(t,2),i=n[0],s=n[1];return Object(c.jsxs)("div",{className:"uploadModal",children:[i?Object(c.jsx)("div",{className:"uploadModalImage",children:Object(c.jsx)("img",{src:i})}):Object(c.jsx)(b.a,{className:"uploadModalSelect",variant:"contained",onClick:function(){s(x)},children:"Select a picture"}),Object(c.jsx)(r.b,{to:{pathname:"/testAPI",state:{image:x}},children:Object(c.jsx)(b.a,{className:"uploadModalUpload",variant:"contained",children:"Upload"})})]})}function p(e){var t=e.parentCallback,n=Object(a.useState)(),i=Object(O.a)(n,2),s=i[0],r=i[1];return Object(c.jsx)("div",{className:"manualModal",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("p",{className:"manualOne",children:Object(c.jsx)(b.a,{variant:"contained",onClick:function(){r("bottles")},children:"Jugs or Bottles"})}),Object(c.jsx)("p",{className:"manualTwo",children:Object(c.jsx)(b.a,{variant:"contained",onClick:function(){r("containers")},children:"Containers"})}),Object(c.jsx)("p",{className:"manualThree",children:Object(c.jsx)(b.a,{variant:"contained",onClick:function(){r("electronics")},children:"Electronics"})}),Object(c.jsx)("p",{className:"manualFour",children:Object(c.jsx)(b.a,{variant:"contained",onClick:function(){r("textiles")},children:"Textiles"})}),Object(c.jsx)("input",{className:"manualEntry",type:"text",name:"other"}),Object(c.jsx)("div",{className:"manualSubmit",children:Object(c.jsx)(b.a,{variant:"contained",onClick:function(){t(s)},children:"Submit"})})]})})}function v(e){var t=e.detectedObject||e.history.location.state||"box",n=Object(a.useState)(!1),i=Object(O.a)(n,2),s=i[0],l=i[1],o=Object(a.useState)(),d=Object(O.a)(o,2),u=d[0],h=d[1],x="https://data.edmonton.ca/resource/gtej-pcij.json?$where=material_title like '%25".concat(t,"%25'");return["containers","jugs","bottles","electronics","propane tanks"].includes(t)?Object(c.jsx)(f,{detectedObject:t}):(s||fetch(x,{method:"GET"}).then((function(e){return e.json()})).then((function(e){h(e),l(!0)})).catch((function(e){return console.log(e)})),u&&1===u.length&&j.push("/final"),s?Object(c.jsx)("div",{className:"resultOptions",children:Object(c.jsx)("div",{className:"resultOptionsScroll",children:u&&u.length>1&&u.map((function(e,t){return Object(c.jsx)(r.b,{to:{pathname:"/final",state:{title:e.material_title,result:e.stream_title,info:e.special_instructions}},className:"resultOptionsButton",children:Object(c.jsx)(b.a,{children:e.material_title})})}))})}):Object(c.jsx)("div",{children:"Loading..."}))}function f(e){var t=e.detectedObject,n=(e.parentCallback,Object(a.useState)(null)),i=Object(O.a)(n,2),s=(i[0],i[1]),r=Object(a.useState)(),l=Object(O.a)(r,2),o=l[0],j=l[1],d=Object(a.useState)(),u=Object(O.a)(d,2),h=u[0],x=u[1],m=Object(a.useState)(),p=Object(O.a)(m,2),v=p[0],f=(p[1],["Is the container empty and dry?","Please dry the container"]),k=["Is there a straw or lid?","Please separate the straw and lid and send them to waste","Is it less than 5 liters?"];if(v)return Object(c.jsxs)("div",{children:["We recommend: ",v]});var C=Object(c.jsx)("div",{children:"Next results"});return"box"===t||"containers"===t?(C=Object(c.jsxs)("div",{children:[f[0],Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return j("material")},children:"Yes"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return j("follow up")},children:"No"})]}),"follow up"===o&&(C=Object(c.jsxs)("div",{children:[f[1],Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return j("material")},children:"All Done!"})]}))):"jugs"===t||"bottles"===t?(C=Object(c.jsxs)("div",{children:[k[0],Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return j("follow up")},children:"Yes"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return j("next")},children:"No"})]}),"follow up"===o&&(C=Object(c.jsxs)("div",{children:[k[1],Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return j("next")},children:"All Done!"})]})),"next"===o&&(C=Object(c.jsxs)("div",{children:[k[2],Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return j("material")},children:"Yes"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return s("w")},children:"No"})]}))):"electronics"===t||"propane tanks"===t?C=Object(c.jsx)("div",{children:"Look for the closest disposal center near you! (google maps?)"}):j("material"),"material"===o&&(C=Object(c.jsxs)("div",{children:["What material is your item made of?",Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return x("glass")},children:"Glass"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return x("plastic")},children:"Plastic"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return s("r")},children:"Metal"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return x("paper")},children:"Paper"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return s("w")},children:"Styrofoam"})]}),"glass"===h?C=Object(c.jsxs)("div",{children:["Is it broken?",Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return s("w")},children:"Yes"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return s("r")},children:"No"})]}):"plastic"===h?C=Object(c.jsx)("div",{children:"Please Enter the SPI Number. (form)"}):"paper"===h&&(C=Object(c.jsxs)("div",{children:["Is there a wax or plastic coating?",Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return s("w")},children:"Yes"}),Object(c.jsx)(b.a,{variant:"contained",onClick:function(){return s("r")},children:"No"})]}))),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Follow Up Questions: ",t]}),C]})}function k(e){var t=e.history.location.state,n=(t.title,t.result),a=t.info;return console.log(n.includes("Recyc")),Object(c.jsxs)("div",{className:"finalScreen",children:[Object(c.jsx)("h3",{children:n.includes("Recyc")?"Your item is recyclable!":"Your item is not recyclable"}),Object(c.jsxs)("div",{className:"finalDesc",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)("body",{children:a})]}),Object(c.jsx)("div",{className:"finalButton",children:Object(c.jsx)(r.b,{to:"/home",children:"Start Over"})})]})}var C=function(e){var t=Object(a.useState)(!1),n=Object(O.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)(!1),l=Object(O.a)(r,2),o=l[0],j=l[1],d=Object(a.useState)(null),u=Object(O.a)(d,2),x=u[0],f=u[1],k=function(){j(!1),s(!1)},C=function(e){f(e),k()};return x?Object(c.jsx)(v,{detectedObject:x}):Object(c.jsxs)("div",{className:"welcomeScreen",children:[Object(c.jsx)(b.a,{className:"welcomeUpload",variant:"contained",onClick:function(){s(!0)},children:"Upload a Photo"}),Object(c.jsx)(b.a,{className:"welcomeManual",onClick:function(){j(!0)},children:"Manual Submission"}),Object(c.jsx)(h.a,{open:i,onClose:k,children:Object(c.jsx)("div",{children:Object(c.jsx)(m,{parentCallback:C})})}),Object(c.jsx)(h.a,{open:o,onClose:k,children:Object(c.jsx)("div",{children:Object(c.jsx)(p,{parentCallback:C})})})]})};var N=function(e){var t=e.history.location.state.image,n=Object(a.useState)(t),i=Object(O.a)(n,2),s=(i[0],i[1],Object(a.useState)()),l=Object(O.a)(s,2),o=l[0],j=l[1],d=Object(a.useState)(!1),u=Object(O.a)(d,2),h=u[0],x=u[1];return h||(j("box"),x(!0)),o?Object(c.jsxs)("div",{children:["Your photo has been recognized. Your item: ",o,Object(c.jsx)(r.b,{to:{pathname:"/fetching"},children:Object(c.jsx)(b.a,{children:"Yes, Proceed"})}),Object(c.jsx)(b.a,{children:"No, let's try again"})]}):Object(c.jsx)("div",{children:"Loading..."})};var g=function(){return Object(c.jsx)(r.a,{history:j,children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(l.a,{path:"/home",component:C}),Object(c.jsx)(l.a,{path:"/final",component:k}),Object(c.jsx)(l.a,{path:"/testAPI",component:N}),Object(c.jsx)(l.a,{path:"/fetching",component:v})]})})})};s.a.render(Object(c.jsx)(r.a,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.279244f6.chunk.js.map