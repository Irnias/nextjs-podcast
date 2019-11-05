module.exports=__NEXT_REGISTER_PAGE("/podcast",function(){return{page:webpackJsonp([1],{272:function(e,t,n){e.exports=n(273)},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return N});var a=n(23),r=n.n(a),o=n(12),i=n.n(o),l=n(0),s=n.n(l),c=n(83),u=(n.n(c),n(50)),d=n.n(u),E=n(51),p=n(39),f=n(85),T=n.n(f);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,o,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),n=t,a=[{key:"render",value:function(){var e=this.props,t=e.clip,n=e.statusCode;return 200!==n?s.a.createElement(T.a,{statusCode:n}):s.a.createElement(p.a,{title:t.title},s.a.createElement("div",{className:"jsx-3928628942 modal"},s.a.createElement("div",{className:"jsx-3928628942 clip"},s.a.createElement("nav",{className:"jsx-3928628942"},s.a.createElement(d.a,{route:"channel",params:{slug:Object(E.a)(t.channel.title),id:t.channel.id}},s.a.createElement("a",{className:"jsx-3928628942 close"},"< Volver"))),s.a.createElement("picture",{className:"jsx-3928628942"},s.a.createElement("div",{style:{backgroundImage:"url(".concat(t.urls.image||t.channel.urls.logo_image.original,")")},className:"jsx-3928628942"})),s.a.createElement("div",{className:"jsx-3928628942 player"},s.a.createElement("h3",{className:"jsx-3928628942"},t.title),s.a.createElement("h6",{className:"jsx-3928628942"},t.channel.title),s.a.createElement("audio",{controls:!0,autoPlay:!0,className:"jsx-3928628942"},s.a.createElement("source",{src:t.urls.high_mp3,type:"audio/mpeg",className:"jsx-3928628942"}))))),s.a.createElement(i.a,{styleId:"3928628942",css:["nav.jsx-3928628942{background:none;}","nav.jsx-3928628942 a.jsx-3928628942{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}",".clip.jsx-3928628942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}","picture.jsx-3928628942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}","picture.jsx-3928628942 div.jsx-3928628942{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}",".player.jsx-3928628942{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}","h3.jsx-3928628942{margin:0;}","h6.jsx-3928628942{margin:0;margin-top:1em;}","audio.jsx-3928628942{margin-top:2em;width:100%;}",".modal.jsx-3928628942{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}"]}))}}],o=[{key:"getInitialProps",value:(l=r.a.mark(function e(t){var n,a,o,i,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,a=t.res,o=n.id,e.prev=2,e.next=5,fetch("https://api.audioboom.com/audio_clips/".concat(o,".mp3"));case 5:if(!((i=e.sent).status>=400)){e.next=9;break}return a.statusCode=i.status,e.abrupt("return",{clip:null,statusCode:i.status});case 9:return e.next=11,i.json();case 11:return l=e.sent.body.audio_clip,e.abrupt("return",{clip:l,statusCode:200});case 15:return e.prev=15,e.t0=e.catch(2),e.abrupt("return",{clip:null,statusCode:503});case 18:case"end":return e.stop()}},e,this,[[2,15]])}),c=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=l.apply(e,t);function o(e,t){try{var o=r[e](t),l=o.value}catch(e){return void a(e)}o.done?n(l):Promise.resolve(l).then(i,s)}function i(e){o("next",e)}function s(e){o("throw",e)}i()})},function(e){return c.apply(this,arguments)})}],a&&_(n.prototype,a),o&&_(n,o),t}()},85:function(e,t,n){e.exports=n(86)},86:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(15)),o=a(n(6)),i=a(n(7)),l=a(n(16)),s=a(n(17)),c=a(n(0)),u=a(n(28)),d=a(n(87)),E=a(n(82)),p=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":d.default[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:f.error},c.default.createElement(E.default,null,c.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:f.h1},e):null,c.default.createElement("div",{style:f.desc},c.default.createElement("h2",{style:f.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}]),t}(c.default.Component);t.default=p,Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{statusCode:u.default.number}});var f={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},87:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}}},[272]).default}});