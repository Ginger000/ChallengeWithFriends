(this["webpackJsonptip-calculator-app-solution"]=this["webpackJsonptip-calculator-app-solution"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),s=c(5),a=c.n(s),i=(c(11),c(12),c(13),c(2)),r=function(e){var t=Object(n.useState)(e),c=Object(i.a)(t,2),l=c[0],s=c[1];return[l,function(e){s(e.target.value)},function(){s("")}]},o=c(0),u=Object(n.createContext)();function j(e){var t=r(""),c=Object(i.a)(t,3),n=c[0],l=c[1],s=c[2];return Object(o.jsx)(u.Provider,{value:{bill:n,handleBillChange:l,resetBill:s},children:e.children})}var h=function(e){var t=Object(n.useContext)(u),c=t.bill,l=t.handleBillChange;return t.resetBill,Object(o.jsxs)("div",{className:"InputForm",children:[Object(o.jsx)("svg",{className:"iconTrick",xmlns:"http://www.w3.org/2000/svg",width:"11",height:"17",children:Object(o.jsx)("path",{fill:"#9EBBBD",d:"M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"})}),Object(o.jsx)("input",{type:"text",placeholder:"0",value:c,onChange:l})]})},b=(c(15),Object(n.createContext)());function d(e){var t=r(""),c=Object(i.a)(t,3),n=c[0],l=c[1],s=c[2];return Object(o.jsx)(b.Provider,{value:{people:n,handlePeopleChange:l,resetPeople:s},children:e.children})}var p=function(e){var t=Object(n.useContext)(b),c=t.people,l=t.handlePeopleChange;return t.resetPeople,Object(o.jsxs)("div",{children:[Object(o.jsx)("svg",{className:"iconTrick",xmlns:"http://www.w3.org/2000/svg",width:"300",height:"300",children:Object(o.jsx)("path",{fill:"#9EBBBD",d:"M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"})}),Object(o.jsx)("input",{type:"text",value:c,placeholder:"0",onChange:l})]})},O=(c(16),c(6)),x=Object(n.createContext)();function v(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),l=c[0],s=c[1],a=r(""),u=Object(i.a)(a,3),j=u[0],h=u[1],b=u[2],d=function(){var e,t=document.querySelectorAll(".preload"),c=Object(O.a)(t);try{for(c.s();!(e=c.n()).done;){var n=e.value;!0===n.checked&&(n.checked=!1)}}catch(l){c.e(l)}finally{c.f()}};return Object(o.jsx)(x.Provider,{value:{buttonTip:l,changeButtonTip:function(e){return s(e.target.value)},changeCustomTip:function(){return s(j)},customTip:j,handleCusTipChange:h,resetCusTip:b,resetTip:function(){s(""),b(),d()},uncheckRadio:d},children:e.children})}var m=function(e){var t=Object(n.useContext)(u),c=t.bill,l=t.resetBill,s=Object(n.useContext)(x),a=s.buttonTip,i=s.resetTip,r=Object(n.useContext)(b),j=r.people,h=r.resetPeople,d=parseFloat(a)/100,p=(c*d/j).toFixed(2),O=(c*(1+d)/j).toFixed(2);return Object(o.jsxs)("div",{className:"ResultPanel",children:[Object(o.jsxs)("div",{className:"ResultPanel-item",children:[Object(o.jsxs)("div",{className:"ResultPanel-label",children:[" ",Object(o.jsx)("span",{className:"label-highlight",children:" Tip Amount"})," ",Object(o.jsx)("br",{})," person"]}),Object(o.jsx)("div",{className:"ResultPanel-value",children:Object(o.jsx)("h1",{className:"result-value",children:"$ ".concat(p>0?p:"0.00")})})]}),Object(o.jsxs)("div",{className:"ResultPanel-item",children:[Object(o.jsxs)("div",{className:"ResultPanel-label",children:[Object(o.jsx)("span",{className:"label-highlight",children:"Total"})," ",Object(o.jsx)("br",{})," /person "]}),Object(o.jsx)("div",{className:"ResultPanel-value",children:Object(o.jsx)("h1",{className:"result-value",children:"$ ".concat(O>0?O:"0.00")})})]}),Object(o.jsx)("button",{name:"resetButton",onClick:function(){l(),h(),i()},className:"button reset ",children:"RESET"})]})};c(17);function C(){var e=Object(n.useContext)(x),t=(e.buttonTip,e.changeButtonTip),c=e.changeCustomTip,l=e.customTip,s=e.handleCusTipChange,a=e.uncheckRadio;return Object(o.jsxs)("div",{className:"ButtonPanel Buttons",children:[[{tip:"5%"},{tip:"10%"},{tip:"15%"},{tip:"25%"},{tip:"50%"}].map((function(e,c){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{className:"preload",type:"radio",name:"buttonGroup",value:e.tip,id:c,onClick:t},c),Object(o.jsx)("label",{htmlFor:c,children:e.tip})]})})),Object(o.jsx)("input",{className:"customInput",type:"text",name:"customInput",id:5,placeholder:"Custom",value:l,onChange:function(e){t(e),s(e)},onClick:function(){c(),a(),console.log("hahahah")}},5)]})}var f=function(){return Object(o.jsxs)("div",{className:"Calculator",children:[Object(o.jsxs)("div",{className:"Calculator-input",children:[Object(o.jsxs)("div",{className:"InputComp",children:[Object(o.jsx)("label",{htmlFor:"bill",children:"Bill"}),Object(o.jsx)(h,{})]}),Object(o.jsxs)("div",{className:"InputComp middle-button",children:[Object(o.jsx)("label",{htmlFor:"bill",children:"Select Tip %"}),Object(o.jsx)(C,{})]}),Object(o.jsxs)("div",{className:"InputComp",children:[Object(o.jsx)("label",{htmlFor:"people",children:"Number of People"}),Object(o.jsx)(p,{})]})]}),Object(o.jsx)("div",{className:"Calculator-output",children:Object(o.jsx)(m,{})})]})};var g=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{className:"App-headline",children:["SPLI ",Object(o.jsx)("br",{})," TTER"]}),Object(o.jsx)(j,{children:Object(o.jsx)(v,{children:Object(o.jsx)(d,{children:Object(o.jsx)(f,{})})})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),l(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),N()}],[[18,1,2]]]);
//# sourceMappingURL=main.2dc8249c.chunk.js.map