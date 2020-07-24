(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,n,t){e.exports=t(81)},53:function(e,n,t){},77:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(16),c=t.n(o),l=(t(53),t(46)),i=t(5),u=t(13),s=t.n(u),m=t(17),f=t(19),h=t(83),v=t(40),E=t(86),p=t(90);function d(e){return r.a.createElement(E.a,{onSubmit:e.onSearch},r.a.createElement(E.a.Group,{controlId:"booktitle"},r.a.createElement(E.a.Label,null,"Book"),r.a.createElement(E.a.Control,{value:e.search,placeholder:"Book Title",onChange:function(n){return e.onSearchChange(n.target.value)}})),r.a.createElement(p.a,{variant:"primary",type:"submit"},"Search"))}var g=t(89),k=t(88),w=t(84);function b(e){var n=e.title,t=e.link,a=e.authors,o=e.image,c=e.description,l=e.onSave,i=e.onDelete;return r.a.createElement(k.a.Item,null,r.a.createElement(h.a,null,r.a.createElement(v.a,{xs:10},r.a.createElement("h2",null,n)),r.a.createElement(v.a,null,t&&r.a.createElement(p.a,{as:"a",href:t,target:"_blank "},"View"),l&&r.a.createElement(p.a,{onClick:function(){l({title:n,authors:a,description:c,image:o,link:t})}},"Save"),i&&r.a.createElement(p.a,{onClick:i,variant:"danger"},"Delete"))),r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement("p",null,a&&a.join(" ")))),r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,{src:o,alt:"book cover"}))),r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement("p",null," ",c))))}function S(e){var n=e.books,t=void 0===n?[]:n;return r.a.createElement(g.a,null,r.a.createElement(g.a.Title,null,"Results"),r.a.createElement(g.a.Body,null,r.a.createElement(k.a,null,t.map(function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))))}var j={searchBooks:function(){var e=Object(m.a)(s.a.mark(function e(n){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.googleapis.com/books/v1/volumes?q=".concat(n),e.next=3,fetch(t);case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),saveBook:function(){var e=Object(m.a)(s.a.mark(function e(n){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()};function O(){var e=Object(a.useState)(""),n=Object(f.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)([]),l=Object(f.a)(c,2),i=l[0],u=l[1],E=j.saveBook,p=function(){var e=Object(m.a)(s.a.mark(function e(n){var a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,j.searchBooks(t);case 3:a=e.sent,r=a.items.map(function(e){return{id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink,onSave:E}}),u(r);case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(d,{search:t,onSearchChange:o,onSearch:p}))),r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(S,{books:i}))))}var y=t(44),x=t.n(y);function B(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)(function(){x.a.get("/api/books").then(function(e){return o(e.data)}).catch(function(e){return console.log(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(S,{books:t}))))}var C=t(87);function I(){return r.a.createElement(C.a,{bg:"light",expand:"lg"},r.a.createElement(I,{className:"mr-auto"},r.a.createElement(I.Link,{href:"#Search"},"Search"),r.a.createElement(I.Link,{href:"#Saved"},"Saved")))}var L=t(85);t(76),t(77);var N=function(){return r.a.createElement(l.a,null,r.a.createElement(L.a,null,r.a.createElement(I,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/","/search"]},r.a.createElement(O,null)),r.a.createElement(i.a,{exact:!0,path:"/saved"},r.a.createElement(B,null)))))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");T?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):W(e)})}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.094389b6.chunk.js.map