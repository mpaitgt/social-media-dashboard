(this["webpackJsonpsocial-media-dashboard"]=this["webpackJsonpsocial-media-dashboard"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/icon-up.95f916a5.svg"},11:function(e,t,n){e.exports=n.p+"static/media/icon-down.69a5c77f.svg"},16:function(e,t,n){e.exports=n.p+"static/media/icon-instagram.991487fe.svg"},17:function(e,t,n){e.exports=n.p+"static/media/icon-youtube.8499da12.svg"},18:function(e,t,n){e.exports=n.p+"static/media/icon-twitter.810ccee8.svg"},20:function(e,t,n){e.exports=n(38)},25:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),o=(n(25),n(2)),l=n(19),s=n(1);function u(){var e=Object(o.a)(["\n          width: 28px;\n          height: 28px;\n          margin-left: 2px;\n          margin-right: 2px;\n          background: var(--dark-theme-bg);\n          border-radius: 50px;\n          align-self: center;\n        "]);return u=function(){return e},e}function d(){var e=Object(o.a)(["\n        display: flex;\n        justify-content: ",";\n        width: 60px;\n        height: 32px;\n        background: ",";\n        border-radius: 50px;\n      "]);return d=function(){return e},e}function m(){var e=Object(o.a)(["\n        padding: 10px; \n        color: ",";\n      "]);return m=function(){return e},e}function f(){var e=Object(o.a)(["display: flex; flex-direction: row; align-items: center;"]);return f=function(){return e},e}var g=function(e){return r.a.createElement("div",{className:Object(s.a)(f())},r.a.createElement("span",{className:Object(s.a)(m(),e.darkMode?"var(--dark-theme-txt)":"var(--dark-theme-sec-txt)")},"Dark Mode"),r.a.createElement("div",{className:Object(s.a)(d(),e.darkMode?"flex-start":"flex-end",e.darkMode?"var(--dark-theme-btn)":"var(--light-theme-btn)"),onClick:e.toggleView},r.a.createElement("div",{className:Object(s.a)(u())})))},b=n(5),h=function(e){return e.toString().length>=5?Math.abs(e)>999?Math.sign(e)*(Math.abs(e)/1e3).toFixed(1)+"k":Math.sign(e)*Math.abs(e):e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},p=function(){return fetch("graph.facebook.com/769456320249941/insights")};function v(){var e=Object(o.a)(["\n          color: var(--dark-theme-sec-txt);\n        "]);return v=function(){return e},e}function j(){var e=Object(o.a)(["\n          color: ",";\n          font-weight: 900;\n          padding: 10px 0px;\n        "]);return j=function(){return e},e}function x(){var e=Object(o.a)(["\n      display: flex; \n      flex-direction: row; \n      align-items: center; \n      justify-content: space-between;\n      padding-top: 2rem;\n      padding-bottom: 1rem;\n    "]);return x=function(){return e},e}var O=function(e){var t=b.social_media;return r.a.createElement("div",{className:Object(s.a)(x())},r.a.createElement("div",null,r.a.createElement("h1",{className:Object(s.a)(j(),e.darkMode?"var(--dark-theme-txt)":"var(--light-theme-txt-darker)")},"Social Media Dashboard"),r.a.createElement("h4",{className:Object(s.a)(v())},"Total Followers: ",h(t.reduce((function(e,t){var n=t.followers,a=t.subscribers;return n&&(e+=n),a&&(e+=a),e}),0)))),r.a.createElement(g,{darkMode:e.darkMode,toggleView:e.toggleView}))},k=n(4),w=n(16),E=n.n(w),_=n(9),y=n.n(_),N=n(17),M=n.n(N),z=n(18),T=n.n(z);var S=function(e){return r.a.createElement("img",{src:function(){switch(e.data.channel){case"Facebook":return y.a;case"Twitter":return T.a;case"YouTube":return M.a;case"Instagram":return E.a;default:return y.a}}(),alt:"Social Icon",width:"30"})};function C(){var e=Object(o.a)(["margin-left: 10px;"]);return C=function(){return e},e}function F(){var e=Object(o.a)(["\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n    "]);return F=function(){return e},e}var V=function(e){return r.a.createElement("div",{className:Object(s.a)(F())},r.a.createElement(S,{data:e.data}),r.a.createElement("p",{className:Object(s.a)(C())},"@matt_blah"))};function I(){var e=Object(o.a)(["\n        text-transform: uppercase;\n        letter-spacing: 3px;\n        color: var(--dark-theme-sec-txt);\n      "]);return I=function(){return e},e}function J(){var e=Object(o.a)(["\n        font-size: 62px;\n        letter-spacing: -4px;\n        margin-bottom: 1rem;\n      "]);return J=function(){return e},e}function R(){var e=Object(o.a)(["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-top: 1rem;\n      margin-bottom: 2rem;\n    "]);return R=function(){return e},e}var D=function(e){return r.a.createElement("div",{className:Object(s.a)(R())},r.a.createElement("div",{className:Object(s.a)(J())},h(e.data.followers||e.data.subscribers)),r.a.createElement("div",{className:Object(s.a)(I())},e.data.followers?"Followers":"Subscribers"))},P=n(10),Y=n.n(P),B=n(11),L=n.n(B);function $(){var e=Object(o.a)(["\n      letter-spacing: 2px;\n      align-self: center;\n      font-weight: 700;\n      font-size: ",";\n      align-self: flex-end;\n    "]);return $=function(){return e},e}function q(){var e=Object(o.a)(["margin-right: 10px;"]);return q=function(){return e},e}function A(){var e=Object(o.a)(["color: var(--bright-red);"]);return A=function(){return e},e}function G(){var e=Object(o.a)(["margin-right: 10px;"]);return G=function(){return e},e}function H(){var e=Object(o.a)(["color: var(--lime-green);"]);return H=function(){return e},e}function K(){var e=Object(o.a)(["\n      letter-spacing: 2px;\n      align-self: center;\n      font-weight: 700;\n      font-size: ",";\n    "]);return K=function(){return e},e}function Q(){var e=Object(o.a)(["margin-right: 10px;"]);return Q=function(){return e},e}function U(){var e=Object(o.a)(["color: var(--bright-red);"]);return U=function(){return e},e}function W(){var e=Object(o.a)(["margin-right: 10px;"]);return W=function(){return e},e}function X(){var e=Object(o.a)(["color: var(--lime-green);"]);return X=function(){return e},e}function Z(e){return r.a.createElement("div",{className:Object(s.a)(K(),e.font_size)},e.data.followers_change>0||e.data.subscribers_change>0?r.a.createElement("div",{className:Object(s.a)(X())},r.a.createElement("img",{src:Y.a,alt:"up arrow",className:Object(s.a)(W()),width:"15"}),r.a.createElement("span",null,e.data.followers_change||e.data.subscribers_change," Today")):r.a.createElement("div",{className:Object(s.a)(U())},r.a.createElement("img",{src:L.a,alt:"down arrow",className:Object(s.a)(Q()),width:"15"}),r.a.createElement("span",null,Math.abs(e.data.followers_change||e.data.subscribers_change)," Today")))}function ee(e){return r.a.createElement("span",{className:Object(s.a)($(),e.font_size)},e.data.percentage_change>0?r.a.createElement("div",{className:Object(s.a)(H())},r.a.createElement("img",{src:Y.a,alt:"up arrow",className:Object(s.a)(G()),width:"15"}),r.a.createElement("span",null,e.data.percentage_change||e.data.percentage_change,"%")):r.a.createElement("div",{className:Object(s.a)(A())},r.a.createElement("img",{src:L.a,alt:"down arrow",className:Object(s.a)(q()),width:"15"}),r.a.createElement("span",null,Math.abs(e.data.percentage_change||e.data.percentage_change),"%")))}function te(){var e=Object(o.a)(["\n      background: ",";\n      // height: 120px;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n      border-radius: 5px;\n      padding: 22px 32px;\n      display: flex;\n      flex-direction: column;\n      align-item: center;\n      justify-content: space-around;\n      position: relative;\n      &:hover {\n        cursor: pointer;\n        background: ",";\n      }\n    "]);return te=function(){return e},e}var ne=function(e){return r.a.createElement("div",{className:Object(s.a)(te(),e.darkMode?"var(--dark-theme-card-bg)":"var(--light-theme-card-bg)",e.darkMode?"var(--dark-theme-card-bg-hover)":"var(--light-theme-card-bg-hover)")},e.children)};var ae=function(e){return r.a.createElement(ne,{data:e.data,darkMode:e.darkMode},r.a.createElement(V,{data:e.data}),r.a.createElement(D,{data:e.data}),r.a.createElement(Z,{data:e.data,font_size:"14px"}))};function re(){var e=Object(o.a)(["margin-top: 1rem;"]);return re=function(){return e},e}var ce=function(e){return r.a.createElement(k.Row,{className:Object(s.a)(re())},b.social_media.map((function(t){return r.a.createElement(k.Col,{lg:3,md:6,sm:6,xs:12,key:t.key},r.a.createElement(ae,{data:t,darkMode:e.darkMode}))})))};function ie(){var e=Object(o.a)(["\n      letter-spacing: 2px;\n      align-self: center;\n      font-weight: 700;\n      margin-top: 2rem;\n      color: var(--dark-theme-sec-txt);\n    "]);return ie=function(){return e},e}var oe=function(){return r.a.createElement("div",{className:Object(s.a)(ie())},r.a.createElement("h2",null,"Overview - Today"))};function le(){var e=Object(o.a)(["\n          display: flex; \n          flex-direction: column; \n          align-items: flex-end;  \n          justify-content: space-between;\n        "]);return le=function(){return e},e}function se(){var e=Object(o.a)(["\n            font-size: 38px; \n            letter-spacing: -2px;\n          "]);return se=function(){return e},e}function ue(){var e=Object(o.a)(["\n            color: var(--dark-theme-sec-txt);\n            padding-bottom: 20px;\n          "]);return ue=function(){return e},e}function de(){var e=Object(o.a)(["\n          display: flex; \n          flex-direction: column;\n          align-items: flex-start;\n          justify-content: space-between;\n        "]);return de=function(){return e},e}function me(){var e=Object(o.a)(["\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n      "]);return me=function(){return e},e}var fe=function(e){return r.a.createElement(ne,{darkMode:e.darkMode},r.a.createElement("div",{className:Object(s.a)(me())},r.a.createElement("div",{className:Object(s.a)(de())},r.a.createElement("h4",{className:Object(s.a)(ue())},e.data.type),r.a.createElement("span",{className:Object(s.a)(se())},h(e.data.value))),r.a.createElement("div",{className:Object(s.a)(le())},r.a.createElement(S,{data:e.data}),r.a.createElement(ee,{data:e.data,font_size:"14px"}))))};var ge=function(e){return r.a.createElement(k.Row,null,function(){var e=b.social_media,t=20*Math.random();return e.reduce((function(e,n,a,r){var c=n.channel,i=n.likes,o=n.page_views,l=n.retweets,s=n.likes_change,u=n.page_views_change,d=n.retweets_change;return l&&e.push({type:"Retweets",value:l,channel:c,percentage_change:d,key:t++}),i&&e.push({type:"Likes",value:i,channel:c,percentage_change:s,key:t++}),o&&e.push({type:"Page Views",value:o,channel:c,percentage_change:u,key:t++}),e}),[])}().map((function(t){return r.a.createElement(k.Col,{lg:3,md:6,sm:6,xs:12,key:t.key},r.a.createElement(fe,{data:t,darkMode:e.darkMode}))})))};function be(){var e=Object(o.a)(["color: hsl(228, 45%, 44%);"]);return be=function(){return e},e}function he(){var e=Object(o.a)(["color: hsl(228, 45%, 44%);"]);return he=function(){return e},e}function pe(){var e=Object(o.a)(["\n      font-size: 11px; \n      text-align: center;\n      margin: 4rem 0rem;\n    "]);return pe=function(){return e},e}var ve=function(){return r.a.createElement("div",{className:Object(s.a)(pe())},"Challenge by ",r.a.createElement("a",{className:Object(s.a)(he()),href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),". Coded by ",r.a.createElement("a",{className:Object(s.a)(be()),href:"http://www.mattpignatore.com"},"Matt Pignatore"),".")};function je(){var e=Object(o.a)(["\n      background: ",";\n      color: ",";\n    "]);return je=function(){return e},e}var xe=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1];return p().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),r.a.createElement("div",{className:Object(s.a)(je(),n?"var(--dark-theme-bg)":"var(--light-theme-bg)",n?"var(--dark-theme-txt)":"var(--light-theme-txt-darker)")},r.a.createElement(k.Container,null,r.a.createElement(O,{darkMode:n,toggleView:function(){c(!n)}}),r.a.createElement(ce,{darkMode:n}),r.a.createElement(oe,null),r.a.createElement(ge,{darkMode:n}),r.a.createElement(ve,null)))};i.a.render(r.a.createElement(xe,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"social_media":[{"channel":"Facebook","followers":1987,"likes":400,"page_views":52,"followers_change":24,"page_views_change":3,"likes_change":2,"key":1},{"channel":"Twitter","followers":1044,"likes":507,"retweets":117,"followers_change":96,"retweets_change":2,"likes_change":-6,"key":2},{"channel":"Instagram","followers":11000,"likes":107,"page_views":52000,"followers_change":214,"page_views_change":-7,"likes_change":14,"key":3},{"channel":"YouTube","subscribers":8239,"likes":97,"page_views":1407,"subscribers_change":-71,"page_views_change":-11,"likes_change":-2,"key":4}]}')},9:function(e,t,n){e.exports=n.p+"static/media/icon-facebook.a7383764.svg"}},[[20,1,2]]]);
//# sourceMappingURL=main.aa991553.chunk.js.map