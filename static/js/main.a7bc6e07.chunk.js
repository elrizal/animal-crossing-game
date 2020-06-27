(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,a,t){},241:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(90),r=t.n(i),c=(t(103),t(91)),s=t.n(c),l=t(92),d=t.n(l),m=t(93),u=t(94),g=t.n(u);class h extends n.Component{constructor(...e){super(...e),this.state={cardData:[...m],currentScore:0,topScore:0},this.handleCardClick=e=>{let a=!1;const t=[...this.state.cardData];t.forEach(t=>{t.id===e&&(t.clicked||(a=!0,t.clicked=!0))}),a?this.handleCorrect(t):this.handleIncorrect(t)},this.handleCorrect=e=>{const a=e.sort(()=>.5-Math.random()),t=this.state.currentScore+1;let n=this.state.topScore;t>n&&(n=t),this.setState({cardData:a,currentScore:t,topScore:n})},this.handleIncorrect=e=>{const a=e.sort(()=>.5-Math.random());a.forEach(e=>e.clicked=!1),this.setState({cardData:a,currentScore:0})}}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"         Current Score: ",this.state.currentScore," || Top Score: ",this.state.topScore),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(d.a,null,this.state.cardData.map(e=>o.a.createElement("div",{className:"col-12 col-sm-3 col-md-3",key:e.id},o.a.createElement(g.a,{className:"img-container animated fadeIn"},o.a.createElement("img",{src:e.image,alt:e.name,onClick:()=>this.handleCardClick(e.id)})),o.a.createElement("br",null))))))}}var p=h;class v extends n.Component{render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("i",{class:"fas fa-leaf"})," ",o.a.createElement("h1",null,"Remember Your New Neighbors!"),o.a.createElement("div",{class:"wordbubble"},o.a.createElement("h5",null," Okay, maybe you're \"not good with names\" but the least you could do is remember our faces! Test your memory below by clicking on animals you haven't clicked on before!")))),o.a.createElement(s.a,null,o.a.createElement(p,null)))}}var f=v;const b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/animal-crossing-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/animal-crossing-game","/service-worker.js");b?(!function(e){fetch(e).then(a=>{404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):k(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()},93:function(e){e.exports=JSON.parse('[{"id":2,"name":"Beau","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Beau.jpg"},{"id":3,"name":"Bianca","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Bianca.jpg"},{"id":4,"name":"Bonbon","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Bonbon.jpg"},{"id":5,"name":"Bones","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Bones.jpg"},{"id":6,"name":"Butch","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Butch.jpg"},{"id":7,"name":"Cheri","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Cheri_.jpg"},{"id":8,"name":"Freya","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Freya.jpg"},{"id":9,"name":"Mitzi","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Mitzi.jpg"},{"id":10,"name":"Pecan","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Pecan.jpg"},{"id":11,"name":"Punchy","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Punchy.jpg"},{"id":12,"name":"Merengue","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Merengue.jpg"},{"id":13,"name":"Bigtop","clickstate":false,"image":"https://res.cloudinary.com/diuubtvqd/image/upload/v1551983983/Bigtop.jpg"}]')},96:function(e,a,t){e.exports=t(241)}},[[96,1,2]]]);
//# sourceMappingURL=main.a7bc6e07.chunk.js.map