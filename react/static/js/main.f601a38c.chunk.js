(this.webpackJsonpads_database=this.webpackJsonpads_database||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},27:function(e,t,n){},28:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(14),c=n.n(r),i=(n(27),n(28),n(29),n(8)),o=n(9),l=n(11),h=n(10),u=n(12),d=(n(30),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("p",null,"Testing")}}]),t}(a.Component)),m=(n(31),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={searchItems:{},searchString:""},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"searchOnString",value:function(){var e=this,t={searchstring:this.state.searchString};fetch("/database/ajax/search.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.setState({searchItems:t})}),(function(e){console.log("error",e)}))}},{key:"searchBoxKeyDown",value:function(e){13===e.keyCode&&(console.log(e),this.state.searchString=e.target.value,this.searchOnString())}},{key:"resultsContent",value:function(e,t,n){return this.state.searchItems&&this.state.searchItems[e]&&this.state.searchItems[e].length?s.a.createElement("div",{id:"results-content",class:"results-content"},s.a.createElement("p",null,e.toUpperCase()),this.state.searchItems[e].map((function(e){return s.a.createElement("li",{key:e.idField},s.a.createElement("a",{href:"#",class:"driver-link action-link"},e[t]))}))):null}},{key:"render",value:function(){return s.a.createElement("div",{class:"sidebar"},s.a.createElement("input",{type:"text",value:this.searchString,name:"search-text",class:"search-text",placeholder:"Search",onKeyDown:this.seachBoxKeyDown}),this.resultsContent("Drivers","LastName","DriverId"),this.resultsContent("Services","ServiceID","ServiceID"),this.resultsContent("Files","FileName","FileID"))}}]),t}(s.a.Component)),v=n(19),f=n(5);var p=function(){return s.a.createElement("div",{class:"home"},s.a.createElement("div",{class:"header"},s.a.createElement("div",{class:"header-left header-block"},"ADS Database"),s.a.createElement("div",{class:"header-search-container header-block"})),s.a.createElement("div",{class:"body-container"},s.a.createElement(m,null),s.a.createElement("main",null,s.a.createElement("div",{class:"main-content",id:"main-content"},s.a.createElement(v.a,null,s.a.createElement(f.a,{path:"dashboard",component:d}))))),s.a.createElement("footer",null,"\xa0"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f601a38c.chunk.js.map