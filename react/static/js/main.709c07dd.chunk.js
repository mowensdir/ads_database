(this.webpackJsonpads_database=this.webpackJsonpads_database||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),i=a.n(r),l=(a(28),a(6)),c=a(7),o=a(10),d=a(8),h=a(9),u=(a(29),a(30),a(31),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("p",null,"Testing")}}]),t}(n.Component)),m=a(13),v=(a(32),function(e){function t(e){var a;Object(l.a)(this,t),console.log("preprops",e),(a=Object(o.a)(this,Object(d.a)(t).call(this))).state={response:{}},console.log(Object(m.a)(a),e);var n={response:a.props.match.driverid};return fetch("/database/ajax/drivers.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){a.setState({response:e})}),(function(e){console.log("error",e)})),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("cdm",this)}},{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"render",value:function(){return this.state.response.Driver?s.a.createElement("div",{class:"file-details tab-container",id:"file-details"},s.a.createElement("h3",null,this.state.response.Driver.LastName,", ",this.state.response.Driver.FirstName," ",this.state.response.Driver.MiddleName),s.a.createElement("nav",null,s.a.createElement("ul",{class:"nav nav-tabs"},s.a.createElement("li",{class:"nav-item"},s.a.createElement("a",{"data-toggle":"tab",role:"tab",class:"nav-link active",href:"#info"},"Info")),s.a.createElement("li",{class:"nav-item"},s.a.createElement("a",{"data-toggle":"tab",role:"tab",class:"nav-link",href:"#files"},"Files")),s.a.createElement("li",{class:"nav-item"},s.a.createElement("a",{"data-toggle":"tab",role:"tab",class:"nav-link","data-did":"{did}",href:"#violations"},"Violations")))),s.a.createElement("div",{class:"tab-content tab-pane show active",role:"tabpanel",id:"info"},s.a.createElement("p",null,s.a.createElement("span",{class:"filedetail-label"},"Driver ID "),s.a.createElement("span",{class:"filedetail-value"},this.state.response.Driver.DriverId)),s.a.createElement("p",null,s.a.createElement("span",{class:"filedetail-label"},"DLN "),s.a.createElement("span",{class:"filedetail-value"},this.state.response.Driver.DriversLicenseNumber)),s.a.createElement("p",null,s.a.createElement("span",{class:"filedetail-label"},"DOB "),s.a.createElement("span",{class:"filedetail-value"},this.state.response.Driver.DateOfBirth))),s.a.createElement("div",{class:"file-content tab-content hidden tab-pane",id:"files",role:"tabpanel"},"(if(this.state.response.DriverFiles.length) ",s.a.createElement("div",null,s.a.createElement("div",{class:"files-sidebar"},this.state.response.DriverFiles.forEach((function(e){return s.a.createElement("p",null,s.a.createElement("a",{href:"#",class:"fname-link driver-file","data-targetid":"driver-files-content","data-fileid":e.FileID},e.FileName))}))),s.a.createElement("div",{class:"driver-files-content",id:"driver-files-content"}," "))," else ",s.a.createElement("p",{class:"file-nofiles"},"No files for this driver"),");"),s.a.createElement("div",{class:"tab-content tab-pane hidden",id:"violations",role:"tabpanel"},"Violations Report")):null}}]),t}(n.Component)),p=(a(33),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={searchItems:{},searchString:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.searchBoxKeyDown.bind(this))}},{key:"searchOnString",value:function(){var e=this,t={searchstring:this.state.searchString};fetch("/database/ajax/search.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.setState({searchItems:t})}),(function(e){console.log("error",e)}))}},{key:"searchBoxKeyDown",value:function(e){13===e.keyCode&&(console.log(e),this.state.searchString=e.target.value,this.searchOnString())}},{key:"resultsContent",value:function(e,t,a){return this.state.searchItems&&this.state.searchItems[e]&&this.state.searchItems[e].length?s.a.createElement("div",{id:"results-content",class:"results-content"},s.a.createElement("p",null,e.toUpperCase()),this.state.searchItems[e].map((function(e){return s.a.createElement("li",{key:e.idField},s.a.createElement("a",{href:"#",class:"driver-link action-link"},e[t]))}))):null}},{key:"render",value:function(){return s.a.createElement("div",{class:"sidebar"},s.a.createElement("input",{type:"text",value:this.searchString,name:"search-text",class:"search-text",placeholder:"Search",onKeyDown:this.seachBoxKeyDown}),this.resultsContent("Drivers","LastName","DriverId"),this.resultsContent("Services","ServiceID","ServiceID"),this.resultsContent("Files","FileName","FileID"))}}]),t}(s.a.Component)),f=a(16),b=a(4),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"home"},s.a.createElement("div",{class:"header"},s.a.createElement("div",{class:"header-left header-block"},"ADS Database"),s.a.createElement("div",{class:"header-search-container header-block"})),s.a.createElement("div",{class:"body-container"},s.a.createElement(p,null),s.a.createElement("main",null,s.a.createElement("div",{class:"main-content",id:"main-content"},s.a.createElement(f.a,{basename:"ads_database/ads_database/react/"},s.a.createElement(b.c,null,s.a.createElement(b.a,{path:"/dashboard",component:u}),s.a.createElement(b.a,{path:"/driver",component:v}),s.a.createElement(b.a,{path:"/driver/:driverid",component:v})))))),s.a.createElement("footer",null,"\xa0"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.709c07dd.chunk.js.map