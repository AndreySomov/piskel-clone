(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t){},135:function(e,t){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(73),i=a.n(o),c=(a(84),a(4)),l=a(5),s=a(7),u=a(6),m=a(2),v=a(8),p=a(74),h=function(e){console.log(e)},f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.GoogleLogin,{clientId:"508015143841-qqc5pr7u0majsitstuntcpuo45ocgfh1.apps.googleusercontent.com",buttonText:"Login",onSuccess:h,onFailure:h,cookiePolicy:"single_host_origin"})}}]),t}(r.a.Component),d=a(75),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(l.a)(t,[{key:"provider",value:function(){new d.OAuth.Provider({id:" google ",authorization_url:" https://google.com/auth "})}},{key:"render",value:function(){var e=this.props,t=e.isLandingPage,a=e.disActiveLandingPage,n=e.activeLandingPage;return r.a.createElement("div",{className:"app-header"},r.a.createElement("button",{className:"piskel-button",onClick:n,type:"button"},r.a.createElement("h1",null,"Piskel")),r.a.createElement("div",{className:"header-buttons-container"},t&&r.a.createElement("button",{className:"create-sprite-button",onClick:a,type:"button"},"Create sprite"),r.a.createElement(f,null)))}}]),t}(r.a.Component),y=a(50),b=a(1),E=a(10),k=a(3),C=a(12),O=a.n(C);var x=function(e){var t=e.changeCanvasSize;return r.a.createElement("div",{className:"settings-area"},r.a.createElement("button",{className:"canvas-size-button",onClick:function(){return t(32)},type:"button"},"32x32"),r.a.createElement("button",{className:"canvas-size-button",onClick:function(){return t(64)},type:"button"},"64x64"),r.a.createElement("button",{className:"canvas-size-button",onClick:function(){return t(128)},type:"button"},"128x128"))},j=a(33),S=a.n(j),N=a(76),F=a(77),L=a.n(F),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={fps:12,gifBackgroundColor:"#969696",gifSize:4,gifName:"piskel-clone"},a.fpsInput=r.a.createRef(),a.sizeInput=r.a.createRef(),a.colorInput=r.a.createRef(),a.nameInput=r.a.createRef(),a.changeFps=a.changeFps.bind(Object(m.a)(a)),a.changeGifSize=a.changeGifSize.bind(Object(m.a)(a)),a.changeGifBackgroundColor=a.changeGifBackgroundColor.bind(Object(m.a)(a)),a.changeGifName=a.changeGifName.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"changeFps",value:function(e){this.setState({fps:e})}},{key:"changeGifBackgroundColor",value:function(e){this.setState({gifBackgroundColor:e})}},{key:"changeGifSize",value:function(e){this.setState({gifSize:e})}},{key:"changeGifName",value:function(e){this.setState({gifName:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.exportGif,n=t.toggleExportMenu,o=this.state,i=o.gifBackgroundColor,c=o.fps,l=o.gifSize,s=o.gifName;return r.a.createElement("div",{className:"export-menu"},r.a.createElement("div",{className:"export-field"},"Gif name:",r.a.createElement("input",{className:"nameInput",type:"text",value:s,onChange:function(){return e.changeGifName(e.nameInput.current.value)},ref:this.nameInput})),r.a.createElement("div",{className:"export-field"},"Gif background color:",r.a.createElement("button",{className:"color-button",style:{backgroundColor:i},onClick:function(){return e.colorInput.current.click()},type:"button"},r.a.createElement("input",{className:"color-input",type:"color",onChange:function(){return e.changeGifBackgroundColor(e.colorInput.current.value)},ref:this.colorInput,value:i}))),r.a.createElement("div",{className:"export-field"},"FPS rate:"," ",c,r.a.createElement("input",{type:"range",className:"fps-input",onChange:function(){return e.changeFps(e.fpsInput.current.value)},value:c,min:"0",max:"24",ref:this.fpsInput})),r.a.createElement("div",{className:"export-field"},"Gif size:"," ",32*l," ","px",r.a.createElement("input",{type:"range",className:"size-input",onChange:function(){return e.changeGifSize(e.sizeInput.current.value)},value:l,min:"2",max:"24",ref:this.sizeInput})),r.a.createElement("button",{onClick:function(){a(i,c,32*l,s),n()},type:"button"},"Export"),r.a.createElement("button",{className:"export-exit-button",onClick:n,type:"button"},r.a.createElement(k.a,{icon:b.t})))}}]),t}(r.a.Component);var M=function(e,t,a){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=e.getContext("2d");n&&r.clearRect(0,0,e.width,e.height),t.forEach(function(e,t){e.forEach(function(e,n){e&&(r.fillStyle="rgb(".concat(e.join(),")"),r.fillRect(a*t,a*n,a,a))})})};var w=function(e,t){var a=e.out.getData(),n=btoa(String.fromCharCode.apply(null,a)),r="data:image/jpg;base64,".concat(n),o=document.createElement("a");return o.setAttribute("href",r),o.setAttribute("download","".concat(t,".gif")),o},P=function(e){return e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,a,n){return"#".concat(t).concat(t).concat(a).concat(a).concat(n).concat(n)}).substring(1).match(/.{2}/g).map(function(e){return parseInt(e,16)})},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isExportMenuActive:!1},a.exportGif=a.exportGif.bind(Object(m.a)(a)),a.toggleExportMenu=a.toggleExportMenu.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"exportGif",value:function(){var e=Object(N.a)(S.a.mark(function e(t,a,n,r){var o,i,c,l,s,u,m,v,p,h;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(o=P(t),i=this.props,c=i.layers,l=i.pixelSize,(s=document.createElement("canvas")).width=n,s.height=n,u=s.getContext("2d"),m=new L.a(n,n),v=n/768*l,m.setDelay(1e3/a),m.start(),p=0;p<c[0].length;p+=1){for(u.fillStyle="rgb(".concat(o.join(),")"),u.fillRect(0,0,n,n),h=0;h<c.length;h+=1)M(s,c[h][p],v,!1);m.addFrame(u),u.clearRect(0,0,n,n)}m.finish(),w(m,r).click();case 14:case"end":return e.stop()}},e,this)}));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"toggleExportMenu",value:function(){var e=this.state.isExportMenuActive;this.setState({isExportMenuActive:!e})}},{key:"render",value:function(){var e=this.state.isExportMenuActive;return r.a.createElement("div",{className:"settings-area"},r.a.createElement("button",{type:"button",onClick:this.toggleExportMenu},"gif"),r.a.createElement("button",{type:"button"},".piskel"),e&&r.a.createElement(z,{toggleExportMenu:this.toggleExportMenu,exportGif:this.exportGif}))}}]),t}(r.a.Component);var A=function(e){var t=e.icon,a=e.onClick,n=e.id,o=e.atciveSettingButton;return r.a.createElement("button",{className:"".concat(o===n?"active ":"","settings-button"),onClick:function(e){return a(n,e)},type:"button"},r.a.createElement(k.a,{icon:t}))},B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={atciveSettingButton:0},a.settings=r.a.createRef(),a.openMenu=a.openMenu.bind(Object(m.a)(a)),a.closeMenu=a.closeMenu.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"openMenu",value:function(e,t){t.stopPropagation(),this.settings.current.classList.add("activeMenu"),this.setState({atciveSettingButton:e})}},{key:"closeMenu",value:function(){this.settings.current.classList.remove("activeMenu")}},{key:"render",value:function(){var e=this,t=[b.g,E.d],a=this.state.atciveSettingButton,n=this.props,o=n.changeCanvasSize,i=n.layers,c=n.pixelSize,l=n.canvasSize;return r.a.createElement("div",{className:"settings",ref:this.settings},r.a.createElement("div",{className:"buttons-container"},t.map(function(t,n){return r.a.createElement(A,{icon:t,atciveSettingButton:a,id:n,key:O()(t),onClick:e.openMenu})})),0===a&&r.a.createElement(x,{changeCanvasSize:o}),1===a&&r.a.createElement(I,{layers:i,pixelSize:c,canvasSize:l}),r.a.createElement("button",{className:"exit-menu-button",onClick:this.closeMenu,type:"button"},r.a.createElement(k.a,{icon:b.t})))}}]),t}(r.a.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).animateFramesPreview=a.animateFramesPreview.bind(Object(m.a)(a)),a.canvas=r.a.createRef(),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){clearTimeout(this.timer),this.animateFramesPreview()}},{key:"animateFramesPreview",value:function(){var e=this.canvas.current,t=this.props,a=t.layers,n=t.fpsInputValue,r=t.pixelSize;if(0!==n){var o=0;this.timer=setInterval(function(){return function(){o>=a[0].length&&(o=0),M(e,a[0][o],r/2);for(var t=1;t<a.length;t+=1)M(e,a[t][o],r/2,!1);o+=1}()},1e3/n)}}},{key:"render",value:function(){return r.a.createElement("canvas",{className:"preview-canvas",width:384,height:384,ref:this.canvas})}}]),t}(r.a.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getInpuValue=a.getInpuValue.bind(Object(m.a)(a)),a.input=r.a.createRef(),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"getInpuValue",value:function(){(0,this.props.onInput)(this.input.current.value)}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.onClick;return r.a.createElement("div",{className:"preview-setings"},r.a.createElement("span",{className:"fps-count"},t," ","FPS"),r.a.createElement("input",{type:"range",className:"fps-input",value:t,onChange:this.getInpuValue,min:"0",max:"24",ref:this.input}),r.a.createElement("button",{onClick:a,className:"full-screen-button",type:"button"},r.a.createElement(k.a,{icon:b.h})))}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={fpsInputValue:10},a.previewArea=r.a.createRef(),a.toggleFullScreen=a.toggleFullScreen.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"handleInput",value:function(e){this.setState({fpsInputValue:+e})}},{key:"toggleFullScreen",value:function(){document.fullscreenElement?document.exitFullscreen():this.previewArea.current.requestFullscreen()}},{key:"render",value:function(){var e=this,t=this.props,a=t.layers,n=t.pixelSize,o=this.state.fpsInputValue;return r.a.createElement("div",{className:"frames-preview",ref:this.previewArea},r.a.createElement(T,{fpsInputValue:o,layers:a,pixelSize:n}),r.a.createElement(R,{value:o,onInput:function(t){return e.handleInput(t)},onClick:this.toggleFullScreen}))}}]),t}(r.a.Component);var D=function(e){var t=e.onClick;return r.a.createElement("button",{className:"frame-copy",onClick:t,type:"button"},r.a.createElement(k.a,{icon:b.i}))};var V=function(e){var t=e.onClick;return r.a.createElement("button",{className:"frame-delete",onClick:t,type:"button"},r.a.createElement(k.a,{icon:b.u}))},q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).canvas=r.a.createRef(),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.animateFrames()}},{key:"componentDidUpdate",value:function(){this.animateFrames()}},{key:"animateFrames",value:function(){var e=this.canvas.current,t=this.props,a=t.id,n=t.frames,r=t.pixelSize,o=n[a];M(e,o,r/4)}},{key:"render",value:function(){var e=this.props,t=e.active,a=e.onClick,n=e.id,o=e.deleteFrame,i=e.copyFrame,c=e.frames;return r.a.createElement("div",{className:"".concat(t?"active":null," frame"),onClick:function(){return a(n)},role:"presentation"},r.a.createElement("canvas",{width:"192",height:"192",id:n,ref:this.canvas}),r.a.createElement("div",{className:"frame-count"},n+1),c.length>1&&r.a.createElement(V,{onClick:function(e){return o(n,e)}}),r.a.createElement(D,{onClick:function(e){return i(n,e)}}))}}]),t}(r.a.Component);var K=function(e){var t=e.onClick;return r.a.createElement("button",{className:"add-frame-button",onClick:t,type:"button"},r.a.createElement(k.a,{icon:b.p}),"Add frame")};var U=function(e){var t=e.onClick,a=e.frames,n=e.currentFrame,o=e.copyFrame,i=e.deleteFrame,c=e.addFrame,l=e.pixelSize;return r.a.createElement("div",{className:"frames-controle"},a.map(function(e,c){return r.a.createElement(q,{onClick:t,frames:a,key:O()(e),id:c,active:n===c,copyFrame:o,deleteFrame:i,pixelSize:l})}),r.a.createElement(K,{onClick:c}))},X={toolButtonsNames:["pen","eraser","paintBucket","circle","rectangle","stroke","paintAllPixels","lighten","mirror","rotate90deg","move","dithering","colorPicker","randomBucket","negative","broom"]};var W=function(e){var t=e.id,a=e.activeToolId,n=e.icon,o=e.onClick;return r.a.createElement("button",{className:"".concat(t===a?"active":null," tool-button"),onClick:function(){return o(t)},type:"button"},r.a.createElement(k.a,{icon:n}))};var Y=function(e){var t=e.onClick,a=e.activeToolId,n=[b.o,b.k,b.m,E.a,E.e,b.s,b.q,b.r,b.n,b.v,E.b,b.f,b.l,b.j,b.e,b.d];return r.a.createElement("div",{className:"tools-controle"},n.map(function(e,n){return r.a.createElement(W,{key:O()(e),icon:e,onClick:t,id:X.toolButtonsNames[n],activeToolId:a})}))};var J=function(e){var t=e.mousePosX,a=e.mousePosY,n=e.canvasSize,o=e.framesLength,i=e.currentFrame,c=e.isNeedCoords;return r.a.createElement("div",{className:"frame-info"},r.a.createElement("span",null,i+1,"/",o),r.a.createElement("span",null,"[",n,"x",n,"]"),c&&r.a.createElement("span",null,t,"x",a))};var _=function(e){return e.map(function(e){return e.map(function(e){return e})})};var $=function(e,t){var a=e.nativeEvent?e.nativeEvent:e;return{x:Math.floor(a.offsetX/t),y:Math.floor(a.offsetY/t)}};var H=function(e,t,a,n,r,o){for(var i=_(e),c=$(t,a),l=r-c.x,s=o-c.y,u=Math.min(o,c.y),m=Math.min(r,c.x),v=u;v<=u+Math.abs(s);v+=1)i[c.x+l][v]=n,i[c.x][v]=n;for(var p=m;p<=m+Math.abs(l);p+=1)i[p][c.y]=n,i[p][c.y+s]=n;return i};var Q=function(e,t,a,n,r,o){for(var i=$(t,a),c=Math.max(Math.abs(i.x-r),Math.abs(i.y-o)),l=_(e),s=l.length,u=0,m=c,v=1-2*c;m>=0;){var p=r-u,h=r+u,f=o-m,d=o+m,g=p<0,y=h>=s,b=f<0,E=d>=s,k=2*(v+m)-1,C=2*(v-u)-1;y||E||(l[h][d]=n),y||b||(l[h][f]=n),g||E||(l[p][d]=n),g||b||(l[p][f]=n),v<0&&k<=0?(v+=2*(u+1)+1,u+=1):v>0&&C>0?(v+=1-2*(m-1),m-=1):(v+=2*((u+=1)-m),m-=1)}return l};var Z=function(){return[Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random())]};var ee=function(e,t,a,n,r){var o=_(e),i=Math.floor(n.offsetX/a),c=Math.floor(n.offsetY/a),l=o.length,s=o[i][c]?o[i][c].join():void 0;if(s!==t.join())for(var u=[[i,c]];u.length;){var m=u.pop(),v=m[0],p=m[1];v>=0&&v<l&&p>=0&&p<l&&s===(o[v][p]?o[v][p].join():void 0)&&(o[v][p]=r?Z():t,u.push([v-1,p],[v+1,p],[v,p-1],[v,p+1]))}return o};var te=function(e,t,a,n,r,o){var i=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=_(e),l=Math.abs(a-r),s=Math.abs(n-o),u=r<a?1:-1,m=o<n?1:-1,v=r,p=o,h=l-s,f=e.length/2;do{var d=2*h;c[a][n]=t,c[v][p]=t,i&&(c[f+-(v-f+1)][p]=t),2*h>-s&&(h-=s,v+=u),d<l&&(h+=l,p+=m)}while(v!==a||p!==n);return c};var ae=function(e){var t;return e&&(t=e.map(function(e){return Math.min(250,e+25)})),t};var ne=function(e,t,a,n){var r=_(e),o=Math.floor(n.offsetX/a),i=Math.floor(n.offsetY/a),c=r[o][i]?r[o][i].join():void 0;return r.forEach(function(e,a){e.forEach(function(e,n){e&&(r[a][n]?r[a][n].join():void 0)===c&&(r[a][n]=t)})}),r};var re=function(e){for(var t=e.length,a=_(e),n=0;n<t/2;n+=1)for(var r=n;r<t-n-1;r+=1){var o=a[n][r];a[n][r]=a[t-r-1][n],a[t-r-1][n]=a[t-n-1][t-r-1],a[t-n-1][t-r-1]=a[r][t-n-1],a[r][t-n-1]=o}return a};var oe=function(e,t,a,n,r){var o=n-t,i=a-r,c=_(e),l=c.length;o>0&&(c=Array.from(Array(o),function(){return new Array(l).fill(0)}).concat(c.slice(0,-o))),o<0&&(c=c.slice(-o).concat(Array.from(Array(-o),function(){return new Array(l).fill(0)})));for(var s=0;s<l;s+=1)i<0&&(c[s]=Array(-i).fill(void 0).concat(c[s].slice(0,i))),i>0&&(c[s]=c[s].slice(i).concat(Array(i).fill(void 0)));return c};var ie=function(e,t,a,n){var r=_(e);return r[a][n]=(a+n)%2===0?t:void 0,r};var ce=function(e){var t=_(e);return t.forEach(function(e,a){e.forEach(function(e,n){if(e){var r=e[0],o=e[1],i=e[2];t[a][n]=[255-r,255-o,255-i]}})}),t};var le=function(e){var t=_(e);return t.forEach(function(e,a){e.forEach(function(e,n){e&&(t[a][n]=void 0)})}),t},se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).penOrEraserOrMirror=a.penOrEraserOrMirror.bind(Object(m.a)(a)),a.canvas=r.a.createRef(),a.chooseToolFunction=a.chooseToolFunction.bind(Object(m.a)(a)),a.rectangleAndCircle=a.rectangleAndCircle.bind(Object(m.a)(a)),a.stroke=a.stroke.bind(Object(m.a)(a)),a.lighten=a.lighten.bind(Object(m.a)(a)),a.rotateFrame=a.rotateFrame.bind(Object(m.a)(a)),a.moveFrame=a.moveFrame.bind(Object(m.a)(a)),a.ditheringFrame=a.ditheringFrame.bind(Object(m.a)(a)),a.bucketOrRandomBucket=a.bucketOrRandomBucket.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.frame,a=e.pixelSize,n=this.canvas.current;M(n,t,a)}},{key:"chooseToolFunction",value:function(e){var t=this.props.activeToolId;switch(t){case"pen":case"eraser":case"mirror":this.penOrEraserOrMirror(e);break;case"paintBucket":case"randomBucket":this.bucketOrRandomBucket(e);break;case"circle":case"rectangle":this.rectangleAndCircle(t,e);break;case"stroke":this.stroke(e);break;case"paintAllPixels":this.colorSamePixels(e);break;case"lighten":this.lighten(e);break;case"rotate90deg":this.rotateFrame();break;case"move":this.moveFrame(e);break;case"dithering":this.ditheringFrame(e);break;case"colorPicker":this.colorPicker(e);break;case"shapeSlection":this.shapeSlection(e);break;case"negative":case"broom":this.negativeOrBroom()}}},{key:"negativeOrBroom",value:function(){this.canvas.current.onmouseup=null;var e=this.props,t=e.frame;(0,e.changeFrame)(("negative"===e.activeToolId?ce:le)(t))}},{key:"colorPicker",value:function(e){var t=this.props,a=t.frame,n=t.changeColor,r=t.pixelSize,o=$(e,r),i=a[o.x][o.y];i&&n(i,e.nativeEvent.which)}},{key:"ditheringFrame",value:function(e){var t=this.canvas.current;t.onmouseup=null;var a=this.props,n=a.frame,r=a.mainColor,o=a.secondaryColor,i=a.pixelSize,c=a.changeFrame,l=$(e,i),s=3===e.nativeEvent.which?o:r,u=ie(n,s,l.x,l.y);M(t,u,i),t.onmousemove=function(e){var a=$(e,i);u=ie(u,s,a.x,a.y),M(t,u,i)},t.onmouseup=function(){t.onmousemove=null,c(u)}}},{key:"moveFrame",value:function(e){var t=this.props,a=t.frame,n=t.pixelSize,r=t.changeFrame,o=this.canvas.current,i=$(e,n),c=_(a);o.onmouseup=null,o.onmousemove=function(e){var t=_(a),r=$(e,n);c=oe(t,i.x,i.y,r.x,r.y),M(o,c,n)},o.onmouseup=function(){o.onmousemove=null,r(c)}}},{key:"rotateFrame",value:function(){this.canvas.current.onmouseup=null;var e=this.props,t=e.frame;(0,e.changeFrame)(re(t))}},{key:"colorSamePixels",value:function(e){this.canvas.current.onmouseup=null;var t=this.props,a=t.frame,n=t.mainColor,r=t.secondaryColor,o=t.pixelSize,i=t.changeFrame,c=3===e.nativeEvent.which?r:n;i(ne(a,c,o,e.nativeEvent))}},{key:"stroke",value:function(e){var t=this.props,a=t.frame,n=t.mainColor,r=t.secondaryColor,o=t.pixelSize,i=t.changeFrame,c=this.canvas.current;c.onmouseup=null;var l=3===e.nativeEvent.which?r:n,s=$(e,o),u=_(a);te(u,l,s.x,s.y,s.x,s.y),M(c,a,o),c.onmousemove=function(e){var t=_(a),n=$(e,o);u=te(t,l,s.x,s.y,n.x,n.y),M(c,u,o)},c.onmouseup=function(){c.onmousemove=null,i(u)}}},{key:"rectangleAndCircle",value:function(e,t){var a=this.props,n=a.frame,r=a.mainColor,o=a.secondaryColor,i=a.pixelSize,c=a.changeFrame,l=this.canvas.current;l.onmouseup=null;var s=3===t.nativeEvent.which?o:r,u=$(t,i),m="rectangle"===e?H:Q,v=_(n);v=te(v,s,u.x,u.y,u.x,u.y),M(l,v,i),l.onmousemove=function(e){v=m(n,e,i,s,u.x,u.y),M(l,v,i)},l.onmouseup=function(){l.onmousemove=null,c(v)}}},{key:"bucketOrRandomBucket",value:function(e){this.canvas.current.onmouseup=null;var t=this.props,a=t.frame,n=t.mainColor,r=t.secondaryColor,o=t.pixelSize,i=t.changeFrame,c=t.activeToolId,l=3===e.nativeEvent.which?r:n,s="randomBucket"===c;i(ee(a,l,o,e.nativeEvent,s))}},{key:"penOrEraserOrMirror",value:function(e){var t=this.canvas.current;t.onmouseup=null;var a=this.props,n=a.frame,r=a.mainColor,o=a.secondaryColor,i=a.pixelSize,c=a.changeFrame,l=a.activeToolId,s=$(e,i),u="mirror"===l,m=[s.x,s.y],v=3===e.nativeEvent.which?o:r;"eraser"===l&&(v=void 0);var p=te(n,v,s.x,s.y,s.x,s.y,u);M(t,p,i),t.onmousemove=function(e){var a=$(e,i);m.push(a.x,a.y),m.length>4&&m.splice(0,2),p=te.apply(void 0,[p,v].concat(m,[u])),M(t,p,i)},t.onmouseup=function(){t.onmousemove=null,c(p)}}},{key:"lighten",value:function(e){var t=this.canvas.current;t.onmouseup=null;var a=this.props,n=a.frame,r=a.pixelSize,o=a.changeFrame,i=$(e,r),c=ae(n[i.x][i.y]),l=te(n,c,i.x,i.y,i.x,i.y);M(t,l,r),t.onmousemove=function(e){var a=$(e,r);c=ae(l[a.x][a.y]),l=te(l,c,a.x,a.y,a.x,a.y),M(t,l,r)},t.onmouseup=function(){t.onmousemove=null,o(l)}}},{key:"render",value:function(){return r.a.createElement("canvas",{onMouseDown:this.chooseToolFunction,onContextMenu:function(e){return e.preventDefault()},className:"main-canvas",width:"768",height:"768",ref:this.canvas})}}]),t}(r.a.PureComponent),ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={x:0,y:0,isNeedCoords:!1},a.changeMousePosition=a.changeMousePosition.bind(Object(m.a)(a)),a.deleteCoords=a.deleteCoords.bind(Object(m.a)(a)),a.canvasContainer=r.a.createRef(),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"deleteCoords",value:function(){this.setState({isNeedCoords:!1})}},{key:"changeMousePosition",value:function(e){var t=this.props.pixelSize,a=Math.floor(e.nativeEvent.offsetX/t),n=Math.floor(e.nativeEvent.offsetY/t);this.setState({x:a,y:n,isNeedCoords:!0})}},{key:"render",value:function(){var e=this.props,t=e.activeToolId,a=e.changeFrame,n=e.frame,o=e.mainColor,i=e.secondaryColor,c=e.pixelSize,l=e.canvasSize,s=e.currentFrame,u=e.framesLength,m=e.changeColor,v=this.state,p=v.x,h=v.y,f=v.isNeedCoords;return r.a.createElement("div",{className:"main-canvas"},r.a.createElement("div",{className:"main-canvas-container",onMouseMove:this.changeMousePosition,onMouseLeave:this.deleteCoords,ref:this.canvasContainer},r.a.createElement(se,{activeToolId:t,changeFrame:a,frame:n,mainColor:o,secondaryColor:i,pixelSize:c,canvasSize:l,currentFrame:s,framesLength:u,changeColor:m})),r.a.createElement("div",{className:"main-canvas-info"},r.a.createElement(J,{canvasSize:l,framesLength:u,currentFrame:s,mousePosX:p,mousePosY:h,isNeedCoords:f})))}}]),t}(r.a.Component);var me=function(e){var t=e.id,a=e.deleteLayer,n=e.changeCurrentLayer,o=e.currentLayer,i=e.layers,c=e.upLayer,l=e.downLayer;return r.a.createElement("div",{id:t,onClick:function(e){return n(t,e)},className:"".concat(o===t?"active ":"","layer-view"),role:"presentation"},"Layer",t+1,r.a.createElement("div",{className:"layers-button-container"},i.length>1&&t!==i.length-1&&r.a.createElement("button",{className:"position layer-button",onClick:function(e){return l(t,e)},type:"button"},r.a.createElement(k.a,{icon:b.a})),i.length>1&&r.a.createElement("button",{className:"delete layer-button",onClick:function(e){return a(t,e)},type:"button"},r.a.createElement(k.a,{icon:b.u})),i.length>1&&0!==t&&r.a.createElement("button",{className:"position layer-button",onClick:function(e){return c(t,e)},type:"button"},r.a.createElement(k.a,{icon:b.b}))))};var ve=function(e){var t=e.layers,a=e.addLayer,n=e.deleteLayer,o=e.changeCurrentLayer,i=e.currentLayer,c=e.upLayer,l=e.downLayer;return r.a.createElement("div",{className:"layer-settings"},r.a.createElement("div",{className:"layer-settings-header"},r.a.createElement("button",{className:"add-layer-button",onClick:a,type:"button"},r.a.createElement(k.a,{icon:b.p}),"Add layer")),r.a.createElement("div",{className:"layer-settings-container"},t.map(function(e,a){return r.a.createElement(me,{id:a,key:O()(e),deleteLayer:n,changeCurrentLayer:o,currentLayer:i,layers:t,upLayer:c,downLayer:l})})))};var pe=function(e){return Array.from(Array(e),function(){return new Array(e)})},he=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).input=r.a.createRef(),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.buttonClass,n=t.onClick,o=t.id,i=t.color,c=t.value;return r.a.createElement("button",{className:a,style:{backgroundColor:"rgba(".concat(i.join(),")")},onClick:function(){return e.input.current.click()},type:"button"},r.a.createElement("input",{type:"color",onChange:function(){return n(o,e.input.current.value)},ref:this.input,value:c}))}}]),t}(r.a.Component);var fe=function(e){var t=e.onClick,a=e.mainColor,n=e.secondaryColor,o=e.swapColor;return r.a.createElement("div",{className:"color-picker"},r.a.createElement(he,{buttonClass:"main color-button",color:a,id:0,value:"#5e5e5e",onClick:t}),r.a.createElement(he,{buttonClass:"secondary color-button",color:n,id:1,value:"#7423a0",onClick:t}),r.a.createElement("button",{onClick:o,className:"swap-color-button",type:"button"},r.a.createElement(k.a,{icon:b.c})))};function de(e){var t=e.id,a=e.code,n=e.handleClick,o=e.icon,i=e.activeKeyButton;return r.a.createElement("div",{className:"keyboard-settings-button"},r.a.createElement(k.a,{icon:o}),r.a.createElement("button",{className:"".concat(i===t?"active ":"","key-button"),onClick:function(e){return n(t,e)},type:"button"},a))}de.defaultProps={code:""};var ge=de,ye=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={activeKeyButton:""},a.toggleMenuStatus=a.toggleMenuStatus.bind(Object(m.a)(a)),a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.keyboardSettingsWindow=r.a.createRef(),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.changeToolId,a=e.buttonsConfiguration;document.body.onkeydown=function(e){var n=e.code.slice(3,5).toUpperCase(),r=a.indexOf(n);if(r+1){var o=X.toolButtonsNames[r];t(o)}}}},{key:"handleClick",value:function(e,t){var a=this;t.stopPropagation();var n=this.props,r=n.buttonsConfiguration,o=n.changeButtonConfig,i=this.keyboardSettingsWindow.current;i.onkeydown=function(t){t.stopPropagation();var n=t.code.slice(3,5).toUpperCase(),c=X.toolButtonsNames.indexOf(e),l=r.indexOf(n);l+1&&(r[l]=null),o(r),r[c]=n,a.setState({activeKeyButton:""}),i.onkeydown=null},this.setState({activeKeyButton:e})}},{key:"toggleMenuStatus",value:function(e){e.stopPropagation(),this.setState({activeKeyButton:""}),this.keyboardSettingsWindow.current.classList.toggle("active")}},{key:"render",value:function(){var e=this,t=this.state.activeKeyButton,a=this.props.buttonsConfiguration,n=[b.o,b.k,b.m,E.a,E.e,b.s,b.q,b.r,b.n,b.v,E.b,b.f,b.l,b.j,b.e,b.d];return r.a.createElement("div",{className:"keyboard-settings"},r.a.createElement("button",{className:"keyboard-settings-menu",onClick:this.toggleMenuStatus,type:"button"},r.a.createElement(k.a,{icon:E.c})),r.a.createElement("div",{className:"keyboard-settings-window",ref:this.keyboardSettingsWindow},n.map(function(n,o){return r.a.createElement(ge,{code:a[o],handleClick:e.handleClick,icon:n,key:O()(n),id:X.toolButtonsNames[o],activeKeyButton:t})}),r.a.createElement("button",{className:"exit-button",onClick:this.toggleMenuStatus,type:"button"},r.a.createElement(k.a,{icon:b.t}))))}}]),t}(r.a.Component),be=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={activeToolId:"pen",pixelSize:24,canvasSize:32,layers:[[pe(32)]],currentFrame:0,currentLayer:0,mainColor:[0,0,0],secondaryColor:[116,35,160],buttonsConfiguration:["P","E","B","C","R","L","A","I","M","T","M","D","O","X","N","W"]},a.changeToolId=a.changeToolId.bind(Object(m.a)(a)),a.handleFrameClick=a.handleFrameClick.bind(Object(m.a)(a)),a.changeFrame=a.changeFrame.bind(Object(m.a)(a)),a.addFrame=a.addFrame.bind(Object(m.a)(a)),a.deleteFrame=a.deleteFrame.bind(Object(m.a)(a)),a.copyFrame=a.copyFrame.bind(Object(m.a)(a)),a.handleColorPickerClick=a.handleColorPickerClick.bind(Object(m.a)(a)),a.swapColor=a.swapColor.bind(Object(m.a)(a)),a.changeCanvasSize=a.changeCanvasSize.bind(Object(m.a)(a)),a.addLayer=a.addLayer.bind(Object(m.a)(a)),a.deleteLayer=a.deleteLayer.bind(Object(m.a)(a)),a.changeCurrentLayer=a.changeCurrentLayer.bind(Object(m.a)(a)),a.upLayer=a.upLayer.bind(Object(m.a)(a)),a.downLayer=a.downLayer.bind(Object(m.a)(a)),a.changeColor=a.changeColor.bind(Object(m.a)(a)),a.changeButtonConfig=a.changeButtonConfig.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("state"));t&&this.setState({activeToolId:t.activeToolId,pixelSize:t.pixelSize,canvasSize:t.canvasSize,layers:t.layers,currentFrame:t.currentFrame,currentLayer:t.currentLayer,mainColor:t.mainColor,secondaryColor:t.secondaryColor,buttonsConfiguration:t.buttonsConfiguration}),window.onunload=function(){var t=JSON.stringify(e.state);localStorage.setItem("state",t)}}},{key:"componentWillUnmount",value:function(){var e=JSON.stringify(this.state);localStorage.setItem("state",e)}},{key:"changeFrame",value:function(e){var t=this.state,a=t.layers,n=t.currentFrame;a[t.currentLayer][n]=e,this.setState({layers:a})}},{key:"changeToolId",value:function(e){this.setState({activeToolId:e})}},{key:"handleColorPickerClick",value:function(e,t){0===e&&this.setState({mainColor:P(t)}),1===e&&this.setState({secondaryColor:P(t)})}},{key:"swapColor",value:function(){var e=this.state,t=e.secondaryColor,a=e.mainColor;this.setState({mainColor:t,secondaryColor:a})}},{key:"changeColor",value:function(e,t){1===t&&this.setState({mainColor:e}),3===t&&this.setState({secondaryColor:e})}},{key:"handleFrameClick",value:function(e){this.setState({currentFrame:e})}},{key:"addFrame",value:function(){var e=this.state,t=e.layers,a=e.canvasSize;t.forEach(function(e){return e.push(pe(a))}),this.setState({layers:t})}},{key:"copyFrame",value:function(e,t){t.stopPropagation();var a=this.state.layers;a.forEach(function(t){var a=_(t[e]);t.splice(e,0,a)}),this.setState({layers:a})}},{key:"deleteFrame",value:function(e,t){t.stopPropagation();var a=this.state,n=a.layers,r=a.currentLayer;n.forEach(function(t){t.splice(e,1)}),this.setState({currentFrame:n[r].length===e?e-1:e,layers:n})}},{key:"changeCanvasSize",value:function(e){var t=this.state,a=t.canvasSize,n=t.layers,r=t.currentLayer,o=t.pixelSize;if(e!==a){var i=Math.abs(e-a)/2,c=a/e,l=n[r].length;document.querySelector(".main-canvas-container").style.backgroundSize="".concat(o*c,"px ").concat(o*c,"px");for(var s=0;s<n.length;s+=1){if(e>a)for(var u=0;u<l;u+=1){for(var m=n[s][u],v=0;v<a;v+=1)m[v]=Array(i).concat(m[v]),m[v]=m[v].concat(Array(i));for(var p=0;p<i;p+=1)m.unshift(Array(2*i)),m.push(Array(2*i))}if(e<a)for(var h=0;h<l;h+=1){var f=n[s][h];f.splice(0,i),f.splice(e,i);for(var d=0;d<e;d+=1)f[d].splice(0,i),f[d].splice(e,i)}}this.setState({pixelSize:o*c,canvasSize:e,layers:n})}}},{key:"addLayer",value:function(){for(var e=this.state,t=e.layers,a=e.canvasSize,n=t[0].length,r=[],o=0;o<n;o+=1)r.push(pe(a));t.push(r),this.setState({layers:t})}},{key:"deleteLayer",value:function(e,t){t.stopPropagation();var a=this.state.layers;a.splice(e,1),this.setState({currentLayer:a.length===e?e-1:e,layers:a})}},{key:"changeCurrentLayer",value:function(e,t){t.stopPropagation(),this.setState({currentLayer:e,currentFrame:0})}},{key:"upLayer",value:function(e,t){var a=this.state.layers,n=a.splice(e,1);a.splice.apply(a,[e-1,0].concat(Object(y.a)(n))),this.setState({layers:a,currentLayer:e-1}),t.stopPropagation()}},{key:"downLayer",value:function(e,t){var a=this.state.layers,n=a.splice(e+1,1);a.splice.apply(a,[e,0].concat(Object(y.a)(n))),this.setState({layers:a,currentLayer:e+1}),t.stopPropagation()}},{key:"changeButtonConfig",value:function(e){this.setState({buttonsConfiguration:e})}},{key:"render",value:function(){var e=this.state,t=e.activeToolId,a=e.pixelSize,n=e.layers,o=e.currentFrame,i=e.mainColor,c=e.secondaryColor,l=e.canvasSize,s=e.currentLayer,u=e.buttonsConfiguration;return r.a.createElement("div",{className:"app-main"},r.a.createElement("div",{className:"tools"},r.a.createElement(Y,{onClick:this.changeToolId,activeToolId:t}),r.a.createElement(fe,{onClick:this.handleColorPickerClick,mainColor:i,secondaryColor:c,swapColor:this.swapColor}),r.a.createElement(ye,{buttonsConfiguration:u,changeButtonConfig:this.changeButtonConfig,changeToolId:this.changeToolId})),r.a.createElement(U,{frames:n[s],pixelSize:a,onClick:this.handleFrameClick,addFrame:this.addFrame,currentFrame:o,copyFrame:this.copyFrame,deleteFrame:this.deleteFrame}),r.a.createElement(ue,{activeToolId:t,changeFrame:this.changeFrame,frame:_(n[s][o]),mainColor:i,secondaryColor:c,pixelSize:a,changeMousePosition:this.changeMousePosition,canvasSize:l,currentFrame:o,framesLength:n[s].length,changeColor:this.changeColor}),r.a.createElement("div",{className:"preview-tools"},r.a.createElement(G,{layers:n,pixelSize:a}),r.a.createElement(ve,{currentLayer:s,layers:n,addLayer:this.addLayer,deleteLayer:this.deleteLayer,changeCurrentLayer:this.changeCurrentLayer,downLayer:this.downLayer,upLayer:this.upLayer})),r.a.createElement(B,{changeCanvasSize:this.changeCanvasSize,layers:n,pixelSize:a}))}}]),t}(r.a.Component),Ee=a(78),ke=a.n(Ee);var Ce=function(e){var t=e.disActiveLandingPage;return r.a.createElement("div",{className:"landing-page"},r.a.createElement("div",{className:"screenshot-container"},r.a.createElement("div",{className:"information-container"},r.a.createElement("h2",null,"Piskel is a free online editor for animated sprites & pixel art"),r.a.createElement("p",null,"Create animations in your browser. Try an example, use Google sign in to access your gallery or simply create a new sprite."),r.a.createElement("div",{className:"information-button-container"},r.a.createElement("button",{className:"information-container-button",onClick:t,type:"button"},"Create sprite"),r.a.createElement("button",{className:"information-container-button",type:"button"},"Sing in"))),r.a.createElement("div",{className:"main-screen-shoot"},r.a.createElement("img",{className:"main-gif",src:ke.a,alt:"fox"}))),r.a.createElement("div",{className:"tools-explanation-container"},r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.o}),r.a.createElement("span",null,"Regular pen")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.k}),r.a.createElement("span",null,"Eraser")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.m}),r.a.createElement("span",null,"Paint bucket")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:E.a}),r.a.createElement("span",null,"Circle")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:E.e}),r.a.createElement("span",null,"Rectangle")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.s}),r.a.createElement("span",null,"Stroke line")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.q}),r.a.createElement("span",null,"Paint all same pixels in color")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.n}),r.a.createElement("span",null,"Mirror line")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.v}),r.a.createElement("span",null,"Rotate 90 deg")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:E.b}),r.a.createElement("span",null,"Move image")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.f}),r.a.createElement("span",null,"Dithering")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.r}),r.a.createElement("span",null,"Lighten color")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.l}),r.a.createElement("span",null,"Color picker")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.j}),r.a.createElement("span",null,"Paint bucket with random colors")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.e}),r.a.createElement("span",null,"Change colors on opposite")),r.a.createElement("div",{className:"tool-explonation"},r.a.createElement(k.a,{icon:b.d}),r.a.createElement("span",null,"Clear current frame"))))},Oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLandingPage:!0},a.activeLandingPage=a.activeLandingPage.bind(Object(m.a)(a)),a.disActiveLandingPage=a.disActiveLandingPage.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"activeLandingPage",value:function(){this.setState({isLandingPage:!0})}},{key:"disActiveLandingPage",value:function(){this.setState({isLandingPage:!1})}},{key:"render",value:function(){var e=this.state.isLandingPage;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{disActiveLandingPage:this.disActiveLandingPage,activeLandingPage:this.activeLandingPage,isLandingPage:e}),e&&r.a.createElement(Ce,{disActiveLandingPage:this.disActiveLandingPage}),!e&&r.a.createElement(be,null))}}]),t}(r.a.Component);i.a.render(r.a.createElement(Oe,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a.p+"static/media/fox.729c4adb.gif"},79:function(e,t,a){e.exports=a(149)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.ded0b1b9.chunk.js.map