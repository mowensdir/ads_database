(this.webpackJsonpads_database=this.webpackJsonpads_database||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(7),c=n.n(r),o=(n(13),n(14),n(15),n(1)),i=n(2),l=n(4),h=n(3),u=n(5),d=(n(16),s.a.Component,n(17),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={searchItems:{},searchString:""},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"searchOnString",value:function(){var e=this,t={searchstring:this.state.searchString};fetch("/database/ajax/search.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.setState({searchItems:t})}),(function(e){console.log("error",e)}))}},{key:"searchBoxKeyDown",value:function(e){13===e.keyCode&&(console.log(e),this.state.searchString="Matt",this.searchOnString())}},{key:"resultsContent",value:function(e,t,n){return this.state.searchItems&&this.state.searchItems[e]?s.a.createElement("div",{id:"results-content",class:"results-content"},s.a.createElement("p",null,e.toUpperCase()),this.state.searchItems[e].map((function(e){return s.a.createElement("li",{key:e.idField},s.a.createElement("a",{href:"#",class:"driver-link action-link"},e[t]))}))):null}},{key:"render",value:function(){return s.a.createElement("div",{class:"sidebar"},s.a.createElement("input",{type:"text",value:this.searchString,name:"search-text",class:"search-text",placeholder:"Search",onKeyDown:this.seachBoxKeyDown}),this.resultsContent("Drivers","LastName","DriverId"),this.resultsContent("Services","ServiceID","ServiceID"),this.resultsContent("Files","FileName","FileID"))}}]),t}(s.a.Component));var m=function(){return s.a.createElement("div",{class:"home"},s.a.createElement("div",{class:"header"},s.a.createElement("div",{class:"header-left header-block"},"ADS Database"),s.a.createElement("div",{class:"header-search-container header-block"})),s.a.createElement("div",{class:"body-container"},s.a.createElement(d,null),s.a.createElement("main",null,s.a.createElement("div",{class:"main-content",id:"main-content"}))),s.a.createElement("footer",null,"\xa0"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1450e769.chunk.js.map