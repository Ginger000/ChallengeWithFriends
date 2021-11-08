(this["webpackJsonptime-tracking-dashboard"]=this["webpackJsonptime-tracking-dashboard"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Work","timeframes":{"daily":{"current":5,"previous":7},"weekly":{"current":32,"previous":36},"monthly":{"current":103,"previous":128}}},{"title":"Play","timeframes":{"daily":{"current":1,"previous":2},"weekly":{"current":10,"previous":8},"monthly":{"current":23,"previous":29}}},{"title":"Study","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":4,"previous":7},"monthly":{"current":13,"previous":19}}},{"title":"Exercise","timeframes":{"daily":{"current":1,"previous":1},"weekly":{"current":4,"previous":5},"monthly":{"current":11,"previous":18}}},{"title":"Social","timeframes":{"daily":{"current":1,"previous":3},"weekly":{"current":5,"previous":10},"monthly":{"current":21,"previous":23}}},{"title":"Self Care","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":2,"previous":2},"monthly":{"current":7,"previous":11}}}]')},17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),r=c(10),a=c.n(r),n=(c(17),c(18),c.p+"static/media/icon-study.917aec1b.svg"),l=c.p+"static/media/icon-play.c0dcb4f6.svg",o=c.p+"static/media/icon-exercise.000e67a1.svg",d=c.p+"static/media/icon-self-care.7307494c.svg",j=c.p+"static/media/icon-social.1686b937.svg",u=c.p+"static/media/icon-work.f5191626.svg",m=c.p+"static/media/icon-ellipsis.a57a4ac8.svg",b=c(11),h=c(7),x=c(0),p=Object(s.createContext)();function v(e){var t=Object(s.useState)("Daily"),c=Object(h.a)(t,2),i=c[0],r=c[1];return Object(x.jsx)(p.Provider,{value:{time:i,changeTimeOption:function(e){return r(e.target.value)}},children:e.children})}var O=function(e){var t,c,i,r=Object(s.useContext)(p).time,a=e.title,h=(e.activity,b.find((function(e){return e.title===a}))),v=r.toLowerCase();switch("Daily"===r&&(t="Day"),"Weekly"===r&&(t="Week"),"Monthly"===r&&(t="Month"),a){case"Exercise":c=o,i="hsl(145, 58%, 55%)";break;case"Play":c=l,i="hsl(195, 74%, 62%)";break;case"Self Care":c=d,i="hsl(43, 84%, 65%)";break;case"Social":c=j,i="hsl(264, 64%, 52%)";break;case"Study":c=n,i="hsl(348, 100%, 68%)";break;case"Work":c=u,i="hsl(15, 100%, 70%)"}return Object(x.jsx)("div",{className:"ActivityCard",style:{backgroundImage:"url(".concat(c,")"),backgroundColor:"".concat(i)},children:Object(x.jsxs)("div",{className:"ActivityCard-display",children:[Object(x.jsxs)("div",{className:"titleBar",children:[Object(x.jsx)("span",{className:"activityTitle",children:a}),Object(x.jsx)("span",{children:Object(x.jsx)("img",{src:m,alt:"compressed-menu-icon"})})]}),Object(x.jsxs)("div",{className:"times",children:[Object(x.jsxs)("div",{className:"currentTime",children:[h.timeframes[v].current,"hrs"]}),Object(x.jsxs)("div",{className:"previousTime",children:["Last ",t," - ",h.timeframes[v].previous,"hrs"]})]})]})})},y=(c(20),c(21),c(12)),f=c(8),g=c(3),k=c.p+"static/media/image-jeremy.71cd41f1.png";c(22);var N=function(){var e=Object(s.useContext)(p).changeTimeOption,t=["Daily","Weekly","Monthly"].map((function(t,c){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"radio",name:"buttons",value:t,id:c,onClick:e},c),Object(x.jsx)("label",{htmlFor:c,children:t})]})}));return Object(x.jsxs)("div",{className:"ProfileCard",children:[Object(x.jsxs)("div",{className:"ProfileCard-upperCard",children:[Object(x.jsx)("img",{src:k,alt:"Jeremy's-profile-picture"}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("span",{className:"small",children:" Report for "}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"large",children:" Jeremy Robson"})]})]}),Object(x.jsx)("div",{className:"Buttons",children:t})]})};var C=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(v,{children:Object(x.jsx)(y.a,{children:Object(x.jsxs)(f.a,{children:[Object(x.jsxs)(g.a,{className:"centerMobile",lg:3,md:3,xs:12,children:[Object(x.jsx)(N,{})," "]}),Object(x.jsxs)(g.a,{lg:9,md:9,xs:12,children:[Object(x.jsxs)(f.a,{children:[Object(x.jsx)(g.a,{className:"centerMobile",lg:4,md:4,xs:12,children:Object(x.jsx)(O,{title:"Work"})}),Object(x.jsx)(g.a,{className:"centerMobile",lg:4,md:4,xs:12,children:Object(x.jsx)(O,{title:"Play"})}),Object(x.jsx)(g.a,{className:"centerMobile",lg:4,md:4,xs:12,children:Object(x.jsx)(O,{title:"Study"})})]}),Object(x.jsxs)(f.a,{className:"lower",children:[Object(x.jsx)(g.a,{className:"centerMobile",lg:4,md:4,xs:12,children:Object(x.jsx)(O,{title:"Exercise"})}),Object(x.jsx)(g.a,{className:"centerMobile",lg:4,md:4,xs:12,children:Object(x.jsx)(O,{title:"Social"})}),Object(x.jsx)(g.a,{className:"centerMobile",lg:4,md:4,xs:12,children:Object(x.jsx)(O,{title:"Self Care"})})]})]})]})})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),r(e),a(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),S()}},[[23,1,2]]]);
//# sourceMappingURL=main.67db8dfa.chunk.js.map