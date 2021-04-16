(this["webpackJsonpsnapchat-clone-personal-project"]=this["webpackJsonpsnapchat-clone-personal-project"]||[]).push([[0],{101:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(30),i=c.n(s),r=(c(85),c(86),c(54)),o=c.n(r),l=c(44),j=c.n(l),u=c(13),d=c(35),p=Object(d.b)({name:"camera",initialState:{cameraImage:null},reducers:{setCameraImage:function(e,t){e.cameraImage=t.payload},resetCameraImage:function(e){e.cameraImage=null}}}),h=p.actions,m=h.setCameraImage,b=h.resetCameraImage,f=function(e){return e.camera.cameraImage},O=p.reducer,g=c(7),x=(c(90),c(4)),v={width:250,height:400,facingMode:"user"};var _=function(){var e=Object(a.useRef)(null),t=Object(u.b)(),c=Object(g.f)(),n=Object(a.useCallback)((function(){var a=e.current.getScreenshot();t(m(a)),c.push("/preview")}),[e]);return Object(x.jsxs)("div",{className:"webcamCapture",children:[Object(x.jsx)(o.a,{audio:!1,height:v.height,ref:e,screenshotFormat:"image/jpeg",width:v.width,videoConstraints:v}),Object(x.jsx)(j.a,{className:"webcamCapture__button",onClick:n,fontSize:"large"})]})},w=c(77),N=(c(94),c(61)),I=c.n(N),C=c(62),k=c.n(C),S=c(63),y=c.n(S),P=c(64),U=c.n(P),A=c(65),B=c.n(A),J=c(66),z=c.n(J),R=c(67),T=c.n(R),D=c(68),E=c.n(D),F=c(69),V=c.n(F),W=c(124),L=c(33),M=L.a.initializeApp({apiKey:"AIzaSyAAhJJsfsf1Y_0tVJ48OKvmMSinNc-NIlk",authDomain:"snapchat-clone-personal-proj.firebaseapp.com",projectId:"snapchat-clone-personal-proj",storageBucket:"snapchat-clone-personal-proj.appspot.com",messagingSenderId:"262094176377",appId:"1:262094176377:web:9a397cf6157f2b697f94a8",measurementId:"G-STCBQJJR85"}).firestore(),G=L.a.auth(),K=L.a.storage(),Q=new L.a.auth.GoogleAuthProvider,Y=(c(97),Object(d.b)({name:"app",initialState:{user:null,selectedImage:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null},selectImage:function(e,t){e.selectedImage=t.payload},resetImage:function(e){e.selectedImage=null}}})),$=Y.actions,q=$.login,H=$.logout,X=$.selectImage,Z=($.resetImage,function(e){return e.app.user}),ee=function(e){return e.app.selectedImage},te=Y.reducer;var ce=function(){var e=Object(u.c)(f),t=Object(g.f)(),c=Object(u.b)(),n=Object(u.c)(Z);return Object(a.useEffect)((function(){e||t.replace("/")}),[e,t]),Object(x.jsxs)("div",{className:"preview",children:[Object(x.jsx)(I.a,{onClick:function(){c(b())},className:"preview__close"}),Object(x.jsxs)("div",{className:"preview__toolbarRight",children:[Object(x.jsx)(k.a,{}),Object(x.jsx)(y.a,{}),Object(x.jsx)(U.a,{}),Object(x.jsx)(B.a,{}),Object(x.jsx)(z.a,{}),Object(x.jsx)(T.a,{}),Object(x.jsx)(E.a,{})]}),Object(x.jsx)("img",{src:e,alt:""}),Object(x.jsxs)("div",{onClick:function(){var c=Object(W.a)();K.ref("posts/".concat(c)).putString(e,"data_url").on("state__changed",null,(function(e){console.log(e)}),(function(){K.ref("posts").child(c).getDownloadURL().then((function(e){M.collection("posts").add({imageUrl:e,username:n.username,read:!1,profilePic:n.profilePic,timestamp:L.a.firestore.FieldValue.serverTimestamp()}),t.replace("/chats")}))}))},className:"preview__footer",children:[Object(x.jsx)("h2",{children:"Send Now"}),Object(x.jsx)(V.a,{fontSize:"small",className:"preview__sendIcon"})]})]})},ae=c(78),ne=c(125),se=(c(99),c(74)),ie=c.n(se),re=c(75),oe=c.n(re),le=c(50),je=c.n(le),ue=c(70),de=(c(101),c(72)),pe=c.n(de),he=c(73),me=c.n(he),be=c(71),fe=c.n(be);var Oe=function(e){var t=e.profilePic,c=e.username,a=e.timestamp,n=e.imageUrl,s=e.read,i=e.id,r=Object(u.b)(),o=Object(g.f)(),l=[];function j(){return(j=Object(ue.a)(je.a.mark((function e(t){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=l.filter((function(e){return e.id!==i})),e.next=3,M.collection("posts").doc(i).delete().then((function(){t.preventDefault()})).catch((function(e){return alert(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)("div",{onClick:function(){s||(r(X(n)),M.collection("posts").doc(i).set({read:!0},{merge:!0}),o.push("/chats/view"))},className:"chat",children:[Object(x.jsx)(ne.a,{className:"chat__avatar",src:t}),Object(x.jsxs)("div",{className:"chat__info",children:[Object(x.jsx)("h4",{children:c}),Object(x.jsxs)("p",{children:[!s&&"Tap to view -"," ",Object(x.jsx)(fe.a,{date:new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString()})]})]}),!s&&Object(x.jsx)(pe.a,{className:"chat__readIcon"}),s&&Object(x.jsx)(me.a,{onClick:function(e){!function(e){j.apply(this,arguments)}(e)},className:"chat__deleteIcon"})]})};var ge=function(){var e=Object(a.useState)([]),t=Object(ae.a)(e,2),c=t[0],n=t[1],s=Object(u.c)(Z),i=Object(u.b)(),r=Object(g.f)();return Object(a.useEffect)((function(){M.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(x.jsxs)("div",{className:"chats",children:[Object(x.jsxs)("div",{className:"chats__header",children:[Object(x.jsx)(ne.a,{src:s.profilePic,onClick:function(){return G.signOut()},className:"chats__avatar"}),Object(x.jsxs)("div",{className:"chats__search",children:[Object(x.jsx)(ie.a,{className:"chats__searchIcon"}),Object(x.jsx)("input",{placeholder:"Friends",type:"text"})]}),Object(x.jsx)(oe.a,{className:"chats__chatIcon"})]}),Object(x.jsx)("div",{className:"chats__posts",children:c.map((function(e){var t=e.id,c=e.data,a=c.profilePic,n=c.username,s=c.timestamp,i=c.imageUrl,r=c.read;return Object(x.jsx)(Oe,{id:t,username:n,timestamp:s,imageUrl:i,read:r,profilePic:a},t)}))}),Object(x.jsx)(j.a,{className:"chats__takePicIcon",onClick:function(){i(b()),r.push("/")},fontSize:"large"})]})},xe=c(76);c(104);var ve=function(){var e=Object(u.c)(ee),t=Object(g.f)();Object(a.useEffect)((function(){e||c()}),[e]);var c=function(){t.replace("/chats")};return Object(x.jsxs)("div",{className:"chatView",children:[Object(x.jsx)("img",{src:e,onClick:c,alt:""}),Object(x.jsx)("div",{className:"chatView__timer",children:Object(x.jsx)(xe.CountdownCircleTimer,{isPlaying:!0,duration:10,strokeWidth:6,size:50,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],children:function(e){var t=e.remainingTime;return 0===t&&c(),t}})})]})},_e=c(123);c(105);var we=function(){var e=Object(u.b)();return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"login__container",children:[Object(x.jsx)("img",{src:"https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg",alt:""}),Object(x.jsx)(_e.a,{variant:"outline",onClick:function(){G.signInWithPopup(Q).then((function(t){e(q({username:t.user.displayName,profilePic:t.user.photoURL,id:t.user.uid}))})).catch((function(e){return alert(e.message)}))},children:"Sign in"})]})})};var Ne=function(){var e=Object(u.c)(Z),t=Object(u.b)();return Object(a.useEffect)((function(){G.onAuthStateChanged((function(e){t(e?q({username:e.displayName,profilePic:e.photoURL,id:e.uid}):H())}))}),[]),Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(w.a,{children:e?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{className:"app__logo",src:"https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg",alt:!0}),Object(x.jsx)("div",{className:"app__body",children:Object(x.jsx)("div",{className:"app__bodyBackground",children:Object(x.jsxs)(g.c,{children:[Object(x.jsx)(g.a,{path:"/chats/view",children:Object(x.jsx)(ve,{})}),Object(x.jsx)(g.a,{path:"/chats",children:Object(x.jsx)(ge,{})}),Object(x.jsx)(g.a,{path:"/preview",children:Object(x.jsx)(ce,{})}),Object(x.jsx)(g.a,{exact:!0,path:"/",children:Object(x.jsx)(_,{})})]})})})]}):Object(x.jsx)(we,{})})})},Ie=Object(d.a)({reducer:{app:te,camera:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(u.a,{store:Ie,children:Object(x.jsx)(Ne,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,c){},86:function(e,t,c){},90:function(e,t,c){},94:function(e,t,c){},99:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.ccb12407.chunk.js.map