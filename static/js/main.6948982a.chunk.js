(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{131:function(t,e,n){},132:function(t,e,n){},429:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(2),o=n.n(c),i=n(14),s=n.n(i),r=(n(131),n(44)),l=n(17),h=n(18),m=n(21),j=n(20),u=n(19);n.p,n(132);o.a.Component,n(79);var b=function(t){return Object(a.jsxs)("div",{className:"todo-item",children:[Object(a.jsx)("input",{type:"checkbox",onChange:function(){return t.handleChange(t.item.id)}}),Object(a.jsx)("p",{children:t.item.text})]})},d=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean gecko tank",completed:!1},{id:4,text:"Mow lawn",completed:!0},{id:5,text:"Catch up on Arrested Development",completed:!1}];o.a.Component;n(133);var p=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).state={toptext:"",bottomtext:"",image:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},t.handleChange=t.handleChange.bind(Object(m.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(m.a)(t)),t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("in mount"),fetch("https://api.imgflip.com/get_memes").then((function(t){return t.json()})).then((function(e){var n=e.data.memes;console.log(n[0]),t.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(t){console.log("text changed"),this.setState(Object(r.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=Math.floor(Math.random()*this.state.allMemeImgs.length),n=this.state.allMemeImgs[e].url;this.setState({image:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"meme-from",onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",name:"toptext",value:this.state.toptext,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"bottomtext",value:this.state.bottomtext,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{children:"Gen"}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"meme",children:[Object(a.jsx)("img",{src:this.state.image,alt:""}),Object(a.jsx)("h2",{className:"top",children:this.state.toptext}),Object(a.jsx)("h2",{className:"bottom",children:this.state.bottomtext})]})]})}}]),n}(o.a.Component),x=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("header",{children:[" ",Object(a.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"})]})}}]),n}(o.a.Component),O=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{}),Object(a.jsx)(p,{})]})}}]),n}(o.a.Component);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))},79:function(t,e,n){}},[[429,1,2]]]);
//# sourceMappingURL=main.6948982a.chunk.js.map