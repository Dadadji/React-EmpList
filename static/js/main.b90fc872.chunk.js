(this.webpackJsonpemplist=this.webpackJsonpemplist||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(2),i=n.n(a),c=n(4),r=n.n(c),u=(n(21),n(13)),d=n(8),l=n(9),o=n(3),m=n(15),h=n(14),j=(n.p,n(22),n(23),n(10)),b=n(11);var p=function(t){var e=t.items.map((function(e){return Object(s.jsx)("div",{className:"list",Key:e.key,children:Object(s.jsxs)("p",{children:[Object(s.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(s.jsx)("span",{children:Object(s.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})})}));return Object(s.jsx)("div",{children:Object(s.jsx)(b.a,{duration:200,easing:"ease-in-out",children:e})})},f=n(5),v=n(12);f.b.add(v.a);var x=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},s.handleInput=s.handleInput.bind(Object(o.a)(s)),s.addItem=s.addItem.bind(Object(o.a)(s)),s.deleteItem=s.deleteItem.bind(Object(o.a)(s)),s.setUpdate=s.setUpdate.bind(Object(o.a)(s)),s}return Object(l.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(u.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){console.log("items:"+this.state.items);var n=this.state.items;n.map((function(n){n.key===e&&(console.log(n.key+"    "+e),n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsxs)("form",{id:"lstem",onSubmit:this.addItem,children:[Object(s.jsx)("input",{type:"text",placeholder:"Enter Employee Name",value:this.state.currentItem.text,onChange:this.handleInput}),Object(s.jsx)("button",{type:"submit",children:"Add Enp"})]})}),Object(s.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(i.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.b90fc872.chunk.js.map