(this.webpackJsonpads_database=this.webpackJsonpads_database||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),s=(n(13),n(14),n(15),n(1)),i=n(2),l=n(4),h=n(3),u=n(5),d=(n(16),c.a.Component,n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={searchItems:{},searchString:""},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"searchOnString",value:function(){var e=this;fetch("/database/ajax/search.php",{method:"POST",body:"searchstring="+this.state.searchString}).then((function(e){return e.json()})).then((function(t){e.setState({searchItems:t})}),(function(e){console.log("error",e)}))}},{key:"searchBoxKeyDown",value:function(e){13===e.keyCode&&(console.log(e),this.state.searchString="Matt",this.searchOnString())}},{key:"render",value:function(){return c.a.createElement("div",{class:"sidebar"},c.a.createElement("input",{type:"text",value:this.searchString,name:"search-text",class:"search-text",placeholder:"Search",onKeyDown:this.seachBoxKeyDown}),c.a.createElement("div",{id:"results-content",class:"results-content"},this.state.searchItems.Drivers?this.state.searchItems.Drivers.map((function(e){return c.a.createElement("li",{key:e.name},e.name," ",e.price)})):""))}}]),t}(c.a.Component));var m=function(){return c.a.createElement("div",{class:"home"},c.a.createElement("div",{class:"header"},c.a.createElement("div",{class:"header-left header-block"},"MICHIGAN"),c.a.createElement("div",{class:"header-search-container header-block"})),c.a.createElement("div",{class:"body-container"},c.a.createElement(d,null),c.a.createElement("main",null,c.a.createElement("div",{class:"main-content",id:"main-content"}))),c.a.createElement("footer",null,"\xa0"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ab1bd558.chunk.js.map