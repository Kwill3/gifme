(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),s=(n(16),n(6)),o=n.n(s),u=n(7),l=n(1),h=n(2),p=n(4),m=n(3),d=n(5),f=(n(19),n(20),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:this.props.handleSubmit},r.a.createElement("input",{type:"text",name:"query",placeholder:"Search GIFs",id:"search-field"}),r.a.createElement("button",{id:"search-btn"},"Find")))}}]),t}(a.Component)),g=(n(21),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"generate"},r.a.createElement("button",{className:"gen-btn",onClick:this.props.handleRandom},"Generate a random GIF"),r.a.createElement("button",{className:"gen-btn",onClick:this.props.handleTrending},"Generate Trending GIFs"))}}]),t}(a.Component)),b=(n(22),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.handleDisplay.map(function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e,alt:"Giphy"}))});return r.a.createElement("div",{className:"display",ref:"display"},e)}}]),t}(a.Component)),v="dV4458Zz6uvL4aZybeNPkgaS0lJhpwiZ",j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).getSearch=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,r,c,i,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.query.value,e.next=4,fetch("http://api.giphy.com/v1/gifs/search?q=".concat(a,"&api_key=").concat(v));case 4:return r=e.sent,e.next=7,r.json();case 7:for(c=e.sent,console.log(c),i=[],s=0;s<c.data.length;s++)i.push(c.data[s].images.original.url);n.setState({items:i});case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.getTrending=Object(u.a)(o.a.mark(function e(){var t,a,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.giphy.com/v1/gifs/trending?api_key=".concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:for(a=e.sent,console.log(a),r=[],c=0;c<a.data.length;c++)r.push(a.data[c].images.original.url);n.setState({items:r});case 10:case"end":return e.stop()}},e)})),n.getRandom=Object(u.a)(o.a.mark(function e(){var t,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.giphy.com/v1/gifs/random?api_key=".concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),(r=[]).push(a.data.images.original.url),n.setState({items:r});case 10:case"end":return e.stop()}},e)})),n.state={query:"",items:[]},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"GIPHY API presents.... GIFME!"),r.a.createElement("p",{id:"instructions"},"Click one of the buttons below to start generating GIFs"),r.a.createElement(f,{className:"search",handleSubmit:this.getSearch}),r.a.createElement(g,{className:"generate",handleTrending:this.getTrending,handleRandom:this.getRandom}),r.a.createElement(b,{handleDisplay:this.state.items}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.233af7af.chunk.js.map