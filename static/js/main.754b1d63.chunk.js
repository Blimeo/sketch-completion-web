(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,n){e.exports=n(51)},26:function(e,t,n){},27:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),l=n.n(r),c=(n(26),n(3)),i=(n(27),n(20));function u(){var e=n(33).default,t=Object(a.useState)("#000"),r=Object(c.a)(t,2),l=r[0],u=r[1],s=Object(a.useState)(480),m=Object(c.a)(s,2),f=m[0],d=(m[1],Object(a.useState)(480)),b=Object(c.a)(d,2),p=b[0],h=(b[1],Object(a.useState)(7)),E=Object(c.a)(h,2),v=E[0],g=E[1],C=Object(a.useState)(0),k=Object(c.a)(C,2),y=k[0],j=k[1],w=Object(a.useRef)(null),O=function(e){u(e)};return o.a.createElement("body",null,o.a.createElement("h1",null,"CIFAR-10 Sketch Completion Demo"),o.a.createElement("p",null,"Completions take about 15 seconds to generate. Your sketch will be downsampled very significantly. Due to hosting limitations on request timeouts, quality is compromised. Host locally for best results."),o.a.createElement("div",{className:"left"},o.a.createElement("div",{className:"drawboard"},o.a.createElement(i.a,{ref:w,hideGrid:!0,brushRadius:v,brushColor:l,canvasWidth:f,canvasHeight:p})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{style:{backgroundColor:"#ff0000"},onClick:function(){return O("#ff0000")}},"\u2800\u2800"),o.a.createElement("button",{style:{backgroundColor:"#228B22"},onClick:function(){return O("#228B22")}},"\u2800\u2800"),o.a.createElement("button",{style:{backgroundColor:"#0000ff"},onClick:function(){return O("#0000ff")}},"\u2800\u2800"),o.a.createElement("button",{style:{backgroundColor:"#ffff00"},onClick:function(){return O("#ffff00")}},"\u2800\u2800"),o.a.createElement("button",{style:{backgroundColor:"#00ffff"},onClick:function(){return O("#00ffff")}},"\u2800\u2800"),o.a.createElement("button",{style:{backgroundColor:"#964b00"},onClick:function(){return O("#964b00")}},"\u2800\u2800"),o.a.createElement("button",{style:{backgroundColor:"#000000"},onClick:function(){return O("#000000")}},"\u2800\u2800"),o.a.createElement("button",{style:{backgroundColor:"#ffffff"},onClick:function(){return O("#ffffff")}},"\u2800\u2800"),o.a.createElement("label",null,o.a.createElement("select",{value:v,onChange:function(e){return g(e.target.value)}},o.a.createElement("option",{value:2},"hungry"),o.a.createElement("option",{value:4},"thin"),o.a.createElement("option",{value:7},"normal"),o.a.createElement("option",{value:15},"thick"),o.a.createElement("option",{value:50},"monstrous"),o.a.createElement("option",{value:800},"fill")))),o.a.createElement("label",null,"Pick your target class:",o.a.createElement("select",{value:y,onChange:function(e){return j(e.target.value)}},o.a.createElement("option",{value:"0"},"airplane"),o.a.createElement("option",{value:"1"},"automobile"),o.a.createElement("option",{value:"2"},"bird"),o.a.createElement("option",{value:"3"},"cat"),o.a.createElement("option",{value:"4"},"deer"),o.a.createElement("option",{value:"5"},"dog"),o.a.createElement("option",{value:"6"},"frog"),o.a.createElement("option",{value:"7"},"horse"),o.a.createElement("option",{value:"8"},"ship"),o.a.createElement("option",{value:"9"},"truck"))),o.a.createElement("div",{className:"submit"},o.a.createElement("button",{onClick:function(){return function(){if(w.current){var e=w.current.canvasContainer.children[1];e.getContext("2d").clearRect(0,0,e.width,e.height)}}()}},"Reset canvas"),o.a.createElement("button",{onClick:function(){return function(){if(w.current){var t=w.current.canvasContainer.children[1].toDataURL(),n={headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:t,cls:y};""!==t?e.post("https://sketch-completion.herokuapp.com/query",n).then((function(e){var t=new Image;t.src="data:image/png;base64,"+e.data;var n=document.getElementsByClassName("asdf")[0];n.hasChildNodes()&&n.removeChild(n.childNodes[0]),n.appendChild(t)})).catch((function(e){alert(e)})):alert("Image data is empty for some reason")}}()}},"Complete my image!"))),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"asdf"})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.754b1d63.chunk.js.map