(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(3),r=n.n(a),l=n(5),s=n(6),c=n(8),d=n(7),h=n(9),u=n(2),k=n(14),m=n.n(k),p=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,{channel:"youtube",isOpen:this.props.isOpen,videoId:this.props.videoId,onClose:this.props.onClose}))}}]),t}(o.Component),v=(n(41),function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{},modalState:!1,videoId:null},n.onClose=function(){return n.setState({modalState:!1})},n.onMarkerClick=function(e){return n.setState({modalState:!0,videoId:e.video})},n.onRightClick=function(e,t,n){return console.log("sdflj")},n.onMapClicked=function(e){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null,modalState:!1})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.Map,{google:this.props.google,zoom:8,onClick:this.onMapClicked,initialCenter:{lat:35.787743,lng:-78.64425}},i.a.createElement(u.Marker,{onClick:this.onMarkerClick,onMouseover:this.onRightClick,name:"Mountains FB 18",position:{lat:36.6212,lng:-81.4845},video:"Vk_-KmWtbBE"}),i.a.createElement(u.Marker,{onClick:this.onMarkerClick,onMouseover:this.onRightClick,name:"Okeechobee SB 18",position:{lat:27.2439,lng:-80.8298},video:"w_pREDw12uE"}),i.a.createElement(u.Marker,{onClick:this.onMarkerClick,onMouseover:this.onRightClick,name:"Singapore Summer 18",position:{lat:1.3521,lng:103.8198},video:"mn820dv6bv0"}),i.a.createElement(u.Marker,{onClick:this.onMarkerClick,onMouseover:this.onRightClick,name:"Singapore Summer 18",position:{lat:35.7688,lng:-78.6619},video:"sejVTQPwHnM"}),i.a.createElement(u.Marker,{onClick:this.onMarkerClick,onMouseover:this.onRightClick,name:"NYC Dec 17",position:{lat:40.7128,lng:-74.006},video:"URCZsdvXF2s"}),i.a.createElement(u.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},i.a.createElement("div",null,i.a.createElement("h1",null,this.state.selectedPlace.name)))),i.a.createElement(p,{videoId:this.state.videoId,onClose:this.onClose,isOpen:this.state.modalState}))}}]),t}(o.Component)),C=Object(u.GoogleApiWrapper)({apiKey:"AIzaSyCnY73kvyiQLtQwpli9k2GgD-G0dlAe8N0"})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.6460b318.chunk.js.map