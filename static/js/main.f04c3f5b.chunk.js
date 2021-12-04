(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),l=(a(14),a(15),a(5)),c=a.n(l),o=a(8),m=a(1),h=a(2),u=a(4),g=a(3),d=(a(17),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleTermChange=function(e){n.setState({keyWord:e.target.value})},n.changeFullKey=function(){n.setState({fullKeyWord:n.state.keyWord})},n.submitHandler=function(e){e.preventDefault(),console.log("submission taking place"),console.log(n.state.keyWord),n.updateLink(),n.changeFullKey()},n.state={users:[],isLoading:!0,error:null,keyWord:"",fullKeyWord:""},n}return Object(h.a)(a,[{key:"updateLink",value:function(){var e=this,t="https://pixabay.com/api/?key=18573804-7ea25786f4b555ca00fe625c2&q=".concat(this.state.keyWord,"&image_type=photo");fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({users:t.hits,isLoading:!1})})).catch((function(t){e.setState({error:t})}))}},{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://pixabay.com/api/?key=18573804-7ea25786f4b555ca00fe625c2&q="+this.state.keyWord+"&image_type=photo",console.log(t),e.next=4,fetch(t).then((function(e){return e.json()})).then((function(e){return a.setState({users:e.hits,isLoading:!1})})).catch((function(e){a.setState({error:e})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement("div",{id:"Front"},r.a.createElement("h1",null,"Welcome to the Prime Gallery Builder"),r.a.createElement("h2",null,"Search for your favourite item to view a gallery of it's best 10 images."),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("input",{className:"mainInput",type:"text",value:this.state.keyWord,onChange:this.handleTermChange,placeholder:"Your Favourite Item"}),r.a.createElement("button",{className:"mainButton",type:"submit"},"Search")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h1",null,"Images of your favourite item: ",this.state.fullKeyWord),r.a.createElement("div",{id:"mainGrid"},r.a.createElement("div",{className:"gallery-img img1"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[1].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"gallery-img img2"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[2].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img3 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[3].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img4 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[4].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img5 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[5].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img6 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[6].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img7 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[7].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img8 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[8].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img9 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[9].largeImageURL,width:"100%",height:"100%"})),r.a.createElement("div",{className:"img10 gallery-img"},this.state.isLoading?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("img",{src:this.state.users[10].largeImageURL,width:"100%",height:"100%"}))),r.a.createElement("footer",null,"This site utilizes the ",r.a.createElement("a",{href:"https://pixabay.com/api/docs/"},"Pixabay API")," to retrieve images. Find out more about Pixabay ",r.a.createElement("a",{href:"https://pixabay.com"},"here")))}}]),a}(r.a.Component)),E=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={hasError:!1},e}return Object(h.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,r.a.createElement("h1",null,"Something ran amok")):this.props.children}}]),a}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null,r.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.f04c3f5b.chunk.js.map