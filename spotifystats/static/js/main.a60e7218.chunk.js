(window.webpackJsonpspotifystats=window.webpackJsonpspotifystats||[]).push([[0],{158:function(e,t,n){e.exports=n(273)},163:function(e,t,n){},164:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(77),o=n.n(c),i=(n(163),n(164),n(80)),s=n(48),l=n(34),u=n(35),p=n(38),f=n(36),m=n(39),h=function(e){return e.map(function(e){return encodeURIComponent(e.key)+"="+encodeURIComponent(e.value)}).join("&")},v="http://runelit.net/spotifystats/",d="68ed51fb5e8b40f8ababf3ccb6563529",y=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).spotifyUrl=void 0,n.onButtonClick=function(e){e.preventDefault(),window.location.href=n.spotifyUrl};var a=h([{key:"client_id",value:d},{key:"response_type",value:"token"},{key:"redirect_uri",value:v+"#/oauth"},{key:"scope",value:"playlist-read-private "}]);return n.spotifyUrl="https://accounts.spotify.com/authorize?"+a,n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Login to spotify first"),r.a.createElement("button",{onClick:this.onButtonClick},"Login homie"))}}]),t}(r.a.Component),b=n(26),g=n.n(b),O=n(110),E=n(45),j=n(64);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var k=function(e,t,n){return P(e,"https://api.spotify.com/v1/"+t,n)},P=function(e,t,n){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{headers:new Headers({Authorization:"Bearer "+e})});return fetch(t,a)},x=n(286),_=Object(x.a)("AUTH_TOKEN_RECEIVED",function(e){return e}),D=n(37),T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).getUserDetails=Object(E.a)(g.a.mark(function e(){var t,a,r,c,o,i,s,l;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.hash.split("&"),a=Object(O.a)(t,3),r=a[0],c=r.split("="),o=Object(O.a)(c,2),i=o[1],e.next=4,k(i,"me");case 4:return s=e.sent,e.next=7,s.json();case 7:l=e.sent,console.log("hi",l.display_name),console.log(l),n.props.saveAuthToken(i);case 11:case"end":return e.stop()}},e)})),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getUserDetails()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Grats you logged"),r.a.createElement(i.b,{to:"/playlists"},"See playlists"))}}]),t}(r.a.Component),C=Object(D.b)(void 0,function(e){return{saveAuthToken:function(t){return e(_(t))}}})(T),S=n(66),N=n(280);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var A=Object(N.a)(Object(j.a)({},"AUTH_TOKEN_RECEIVED",function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{accessToken:t.payload})}),{accessToken:"",expiry:0});var U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).fetchNewResult=function(){var e=Object(E.a)(g.a.mark(function e(t){var a,r,c,o,i,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props,r=a.accessToken,c=a.paging,o=a.onNewResult,c){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,P(r,t);case 5:return i=e.sent,e.next=8,i.json();case 8:s=e.sent,o(s);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.previousPage=function(e){e.preventDefault(),n.props.paging&&n.fetchNewResult(n.props.paging.previous)},n.nextPage=function(e){e.preventDefault(),n.props.paging&&n.fetchNewResult(n.props.paging.next)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.paging;if(!e)return r.a.createElement(r.a.Fragment,null);var t=r.a.createElement("button",{onClick:this.previousPage},"Previous page"),n=r.a.createElement("button",{onClick:this.nextPage},"Next page"),a=0===e.offset,c=e.offset+e.limit<e.total;return r.a.createElement(r.a.Fragment,null,!a&&t,c&&n)}}]),t}(r.a.Component),F=Object(D.b)(function(e){return{accessToken:e.app.accessToken}})(U),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={paging:void 0},n.onPageChange=function(e){var t=e;n.setState({paging:t})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.props.accessToken,"me/playlists?limit=10");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({paging:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.paging,n=this.props.selectedPlaylist;return r.a.createElement(r.a.Fragment,null,t&&t.items.map(function(t){return r.a.createElement("div",{className:"playlist"+(n&&n.id===t.id?" active":""),key:t.id,onClick:function(){return e.props.onPlaylistSelected(t)}},r.a.createElement("b",null,t.name),r.a.createElement("br",null),"Created by: ",t.owner.display_name)}),r.a.createElement(F,{paging:t,onNewResult:this.onPageChange}))}}]),t}(r.a.Component),L=Object(D.b)(function(e){return{accessToken:e.app.accessToken}})(I),B=n(281),V=n(282),W=function(e){var t=["danceability","acousticness","energy","liveness","speechiness","valence"].map(function(t){return function(e,t){return{x:e,y:t.map(function(t){return t[e]})}}(t,e.audioFeatures)});return r.a.createElement(B.a,{domainPadding:10,width:800,height:300},r.a.createElement(V.a,{boxWidth:10,whiskerWidth:5,data:t}))},X=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={audioFeatures:[],selectedPlaylist:void 0},n.onPlaylistSelected=function(){var e=Object(E.a)(g.a.mark(function e(t){var a,r,c,o,i,s,l;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.accessToken,e.next=3,k(a,"playlists/".concat(t.id,"/tracks?limit=100"));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,o=c.items.map(function(e){return e.track.id}).join(","),i="audio-features?ids="+o,e.next=11,k(a,i);case 11:return s=e.sent,e.next=14,s.json();case 14:l=e.sent,n.setState({audioFeatures:l.audio_features,selectedPlaylist:t});case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.average=function(e,t){return t.reduce(function(t,n){return t+n[e]},0)/t.length},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.audioFeatures,n=e.selectedPlaylist;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Playlists"),r.a.createElement("div",{id:"playlistResult"},r.a.createElement("div",{id:"playlists"},r.a.createElement(L,{onPlaylistSelected:this.onPlaylistSelected,selectedPlaylist:n})),r.a.createElement("div",{id:"analysis"},n&&r.a.createElement("div",null,r.a.createElement("p",null,"Selected playlist: ",r.a.createElement("b",null,n.name)),r.a.createElement("p",null,"Averages for the first 100 songs"),r.a.createElement("p",null,"Danceability: ",this.average("danceability",t)),r.a.createElement("p",null,"Tempo: ",this.average("tempo",t)),r.a.createElement("p",null,"Acousticness: ",this.average("acousticness",t)),r.a.createElement("p",null,"Duration in ms: ",this.average("duration_ms",t)),r.a.createElement("p",null,"Energy: ",this.average("energy",t)),r.a.createElement("p",null,"Key: ",this.average("key",t)),r.a.createElement("p",null,"Liveness: ",this.average("liveness",t)),r.a.createElement("p",null,"Loudness: ",this.average("loudness",t)),r.a.createElement("p",null,"Mode: ",this.average("mode",t)),r.a.createElement("p",null,"Speechiness: ",this.average("speechiness",t)),r.a.createElement("p",null,"Time signature: ",this.average("time_signature",t)),r.a.createElement("p",null,"Valence: ",this.average("valence",t))))),n&&r.a.createElement("div",null,r.a.createElement(W,{audioFeatures:t})))}}]),t}(r.a.Component),H=Object(D.b)(function(e){return{accessToken:e.app.accessToken}})(X),K=function(){return r.a.createElement("div",{id:"app"},r.a.createElement(D.a,{store:Object(S.c)(Object(S.b)({app:A}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(s.a,{path:"/access_token:lol",component:C}),r.a.createElement(s.a,{exact:!0,path:"/playlists",component:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,1,2]]]);
//# sourceMappingURL=main.a60e7218.chunk.js.map