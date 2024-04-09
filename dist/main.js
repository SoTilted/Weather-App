(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>w});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(971),t.b),l=new URL(t(572),t.b),p=new URL(t(609),t.b),u=new URL(t(127),t.b),f=new URL(t(699),t.b),m=i()(o()),h=s()(d),x=s()(l),g=s()(p),b=s()(u),y=s()(f);m.push([n.id,`\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: MyFont;\n}\n\n@keyframes rotate {\n    from {\n        transform: rotate(0deg);\n    }\n    to { \n        transform: rotate(360deg);\n    }\n}\n \n\n @-webkit-keyframes rotate {\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to { \n        -webkit-transform: rotate(360deg);\n    }\n}\n\n.load {\n\twidth: 100px;\n\theight: 100px;\n\tmargin: 110px auto 0;\n\tborder:solid 10px #000000;\n\tborder-radius: 50%;\n\tborder-right-color: transparent;\n\tborder-bottom-color: transparent;\n\t-webkit-transition: all 0.5s ease-in;\n    -webkit-animation-name:             rotate; \n    -webkit-animation-duration:         1.0s; \n    -webkit-animation-iteration-count:  infinite;\n    -webkit-animation-timing-function: linear;\n    transition: all 0.5s ease-in;\n    animation-name:             rotate; \n    animation-duration:         1.0s; \n    animation-iteration-count:  infinite;\n    animation-timing-function: linear; \n}\n\n.error {\n    background-image: url(${h});\n}\n\nbody {\n    color: white;\n    height: 100dvh;\n    width: 100dvw;\n    background-color: #457881;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    box-shadow: 0px 2px 5px rgb(0, 0, 0,0.6);\n    padding: 10px;\n    background-color: rgb(255, 255, 255,0.3);\n}\n\n.content {\n    width: 100%;\n    flex: 1;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100% 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n.footer {\n    padding: 20px 10px 20px 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: rgb(255, 255, 255,0.3);\n    box-shadow: 0px -2px 5px rgb(0, 0, 0,0.6);   \n}\n\n#search {\n    background-image: url(${x});\n    height: 40px;\n    width: 40px;\n    background-color: transparent;\n    border: none;\n}\n\n#search:hover {\n    cursor: pointer;\n    border-radius: 4px;\n    box-shadow: 10px 5px 5px rgb(0, 0, 0,0.6);\n    transition: all 0.55s ease;\n    transform: scale(1.05);\n}\n\nform {\n    width: 100%;\n    padding: 3px 10px 3px 10px;\n}\n\nform div {\n    padding: 10px;\n    font-size: 1.3rem;\n    font-weight: 500;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\nspan {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ninput {\n    background-color: transparent;\n    border: 1px solid teal;\n    border-radius: 8px;\n    box-shadow: 5px 2px 2px rgb(0, 0, 0,0.6);\n    font-size: 1.3rem;\n    padding: 5px;\n    margin-right: 10px;\n    color: white;\n}\n\ninput::placeholder {\n    color: white;\n    opacity: 0.8;\n}\n\ninput::-webkit-input-placeholder, input:-ms-input-placeholder {\n    color: white;\n    background-color: white;\n}\n\n.weather-now {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(255, 255, 255,0.3);\n    border-radius: 16px;\n    padding: 16px;\n    margin: 10px 25px 10px 25px;\n    box-shadow: 10px 5px 5px rgb(0, 0, 0,0.6); \n}\n\n.weather-24-hours {\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 255, 255,0.3);\n    border-radius: 16px;\n    padding: 16px;\n    margin: 10px 25px 10px 25px;\n    box-shadow: 10px 5px 5px rgb(0, 0, 0,0.6);\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n    font-size:  2rem;\n    max-height: 70dvh;\n    overflow: scroll;\n}\n.weather-24-hours ul li {\n    border: 1px solid teal;\n    border-radius: 16px;\n    box-shadow: 5px 2px 2px rgb(0, 0, 0,0.6);\n    margin-top: 15px;\n}\n\n.weather-24-hours img {\n    height: 60px;\n    width: 60px;\n}\n\n.weather-24-hours ul {\n    list-style: none;\n}\n.weather-24-hours::-webkit-scrollbar {\n    display: none;\n  }\n\n.top-element {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n#go-back {\n    background-image: url(${g});\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    border: none;\n}\n\n#go-back:hover {\n    cursor: pointer;\n    border-radius: 8px;\n    box-shadow: 10px 5px 5px rgb(0, 0, 0,0.6);\n    transition: all 0.55s ease;\n    transform: scale(1.05);\n}\n\n.weather-next-24-hours {\n    padding: 10px 25px 10px 25px;\n}\n\n.weather-next-24-hours ul {\n    font-size: 1.5rem;\n    overflow-x: scroll;\n    display: flex;\n    list-style: none;\n    gap: 15px;\n    background-color: rgb(255, 255, 255, 0.3);\n    border-radius: 16px;\n    padding: 14px 26px 14px 26px;\n    box-shadow: 10px 5px 5px rgb(0, 0, 0,0.6);\n}\n\n /* Hide scrollbar for Chrome, Safari and Opera */\nul::-webkit-scrollbar {\n    display: none;\n}\n  \n  /* Hide scrollbar for IE, Edge and Firefox */\nul {\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n} \n\nli {\n    padding: 10px;\n}\n\nimg {\n    width: 30px;\n    height: 30px;  \n}\n\nli div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-forecast {\n    font-size: 1.4rem;\n    flex-direction: column;\n    display: flex;\n    background-color: rgb(255, 255, 255,0.3);\n    margin: 10px 25px 10px 25px;\n    padding: 16px;\n    border-radius: 16px;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    box-shadow: 10px 5px 5px rgb(0, 0, 0,0.6);\n}\n\n.weather-forecast > div {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    padding: 4px;\n    justify-content: space-evenly;\n    transition: all 0.55s ease;\n    align-items: center; \n}\n\n.weather-forecast > div > p:first-child{\n    flex: 1;\n}\n\n.wrapper {\n    display: flex;\n    justify-content: center;\n    flex: 0.4;\n}\n\n.weather-forecast > div:hover {\n    cursor: pointer;\n    border: 1px solid rgb(0, 0, 0,0.6);\n    border-radius: 8px;\n    box-shadow: 10px 5px 5px rgb(0, 0, 0,0.6);\n    transition: all 0.55s ease;\n    transform: scale(1.05);\n}\n\na,a:visited {\n    text-decoration: none;\n    color:white ;\n  }\n  \n  a:hover {\n    color: rgb(0, 0, 0,0.6);\n  }\n\n  .logo {\n    background-image: url(${b});\n    width: 45px;\n    height: 45px;\n  }\n\n@font-face {\n    font-family: 'MyFont';\n    src: url(${y}) format('truetype');\n    font-style: normal;\n}\n\n@media all and (min-width:500px) {\n    \n    input {\n        width: 50%;\n    }\n\n    .weather-forecast > div:hover {\n        transform: scale(1.005);\n    }\n\n    .content {\n        align-items: center;\n    }\n\n    .header,.footer {\n        height: 7%;\n    }\n\n    .weather-now, .weather-forecast {\n        width: 75%;\n\n    }\n    .weather-next-24-hours {\n        max-width: 77%;\n    }\n\n    .weather-24-hours {\n        width: 75%;\n    }\n\n    * {\n        font-size: 1.3rem;\n    }\n\n    .header h1 {\n        font-size: 1.6rem;\n    }\n    \n    img {\n        width: 80px;\n        height: 80px;\n    }\n}`,""]);const w=m},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},699:(n,e,t)=>{n.exports=t.p+"831aaad03890ba2d7417.ttf"},609:(n,e,t)=>{n.exports=t.p+"360268755a4f4a32e93a.svg"},572:(n,e,t)=>{n.exports=t.p+"f301faf6211037c239a8.svg"},971:(n,e,t)=>{n.exports=t.p+"235dbf7f3fdec8df82ae.gif"},127:(n,e,t)=>{n.exports=t.p+"d6a3e9bb2d449a4e8a23.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),l=t.n(d),p=t(113),u=t.n(p),f=t(208),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h=document.querySelector(".content");function x(n){const e=document.createElement("ul");for(let t=0;t<n.length;t++){let r=document.createElement("li"),o=document.createElement("div");o.setAttribute("class","hourly-weather");let a=document.createElement("p"),i=document.createElement("img");i.setAttribute("src",""),i.setAttribute("alt","");let c=document.createElement("p");r.appendChild(o),o.append(a,i,c),a.textContent=n[t].time,i.src="https:"+n[t].condition,c.innerHTML=n[t].temperature+"&#176;",e.appendChild(r)}return e}function g(n){!function(n){const e=document.createElement("div");e.setAttribute("class","weather-now");const t=document.createElement("h3"),r=document.createElement("h1"),o=document.createElement("h3");h.appendChild(e),e.append(t,r,o),t.textContent=n.location.name,r.innerHTML=n.weather.temperature+"&#176;",o.textContent=n.weather.condition}(n),function(n){const e=document.createElement("div");e.setAttribute("class","weather-next-24-hours");const t=x(n.weather.hourlyWeatherNext24Hours);e.appendChild(t),h.appendChild(e)}(n),function(n){const e=document.createElement("div");e.setAttribute("class","weather-forecast"),h.appendChild(e);for(let r=0;r<3;r++){let o=document.createElement("div");o.setAttribute("id",`day${r+1}`);let a=document.createElement("p"),i=document.createElement("p"),c=document.createElement("img");c.setAttribute("src",""),c.setAttribute("alt","");let s=document.createElement("div");s.setAttribute("class","wrapper"),s.appendChild(c);let d=document.createElement("p");o.append(a,i,s,d),a.textContent=n.forecast[`day${r+1}`].day,i.innerHTML=n.forecast[`day${r+1}`].min_temp+"&#176;",c.src="https:"+n.forecast[`day${r+1}`].condition,d.innerHTML=n.forecast[`day${r+1}`].max_temp+"&#176;",e.appendChild(o),o.addEventListener("click",t)}function t(){const e=document.createElement("div");e.setAttribute("class","top-element");const t=document.createElement("button");t.setAttribute("id","go-back");const r=document.createElement("h1");e.append(t,r),r.textContent=n.forecast[this.id].day;const o=x(n.forecast[this.id].hourlyWeather),a=document.createElement("div");a.setAttribute("class","weather-24-hours"),a.appendChild(o),h.innerHTML="",h.append(e,a),t.addEventListener("click",(()=>{h.innerHTML="",g(n)}))}}(n)}let b;const y=document.querySelector("#search"),w=document.querySelector(".content"),v=document.createElement("div");v.setAttribute("class","load"),y.addEventListener("click",(async function(n){n.preventDefault(),w.innerHTML="",w.appendChild(v);const e=document.querySelector("input").value;document.querySelector("input").value="";try{const n=await fetch(`//api.weatherapi.com/v1/forecast.json?key=809b75e4736549f1bb7181217240504&q=${e}&days=3`,{credentials:"omit"},{mode:"cors"});if(200!==n.status)throw new Error(n.status);{const e=await n.json();b=function(n){const e=[1,5,11,19,29,39,49,61,74,88,102,117,134],t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let r=0;for(let t=0;t<e.length;t++){if(n.current.wind_kph<=e[t]){r=t;break}r=13}let o={0:[],1:[],2:[]},a=[],i=+n.location.localtime.slice(-5,-3);for(let e=0;e<3;e++)for(let t=0;t<24;t++)(i<=t&&0===e||i>=t&&1===e&&a.length<24)&&a.push({time:n.forecast.forecastday[0].hour[t].time.slice(-5),condition:n.forecast.forecastday[0].hour[t].condition.icon,temperature:n.forecast.forecastday[0].hour[t].temp_c}),o[e].push({time:n.forecast.forecastday[0].hour[t].time.slice(-5),condition:n.forecast.forecastday[0].hour[t].condition.icon,temperature:n.forecast.forecastday[0].hour[t].temp_c});return{location:{name:n.location.name,region:n.location.region,country:n.location.country,timezone:n.location.tz_id,localtime:n.location.localtime},weather:{temperature:n.current.temp_c,condition:n.current.condition.text,wind_direction:n.current.wind_dir,wind_beaufort:r,hourlyWeatherNext24Hours:a},forecast:{day1:{day:"Today",min_temp:n.forecast.forecastday[0].day.mintemp_c,max_temp:n.forecast.forecastday[0].day.maxtemp_c,condition:n.forecast.forecastday[0].day.condition.icon,hourlyWeather:o[0]},day2:{day:t[new Date(n.forecast.forecastday[1].date).getUTCDay()],min_temp:n.forecast.forecastday[1].day.mintemp_c,max_temp:n.forecast.forecastday[1].day.maxtemp_c,condition:n.forecast.forecastday[1].day.condition.icon,hourlyWeather:o[1]},day3:{day:t[new Date(n.forecast.forecastday[2].date).getUTCDay()],min_temp:n.forecast.forecastday[2].day.mintemp_c,max_temp:n.forecast.forecastday[2].day.maxtemp_c,condition:n.forecast.forecastday[2].day.condition.icon,hourlyWeather:o[2]}}}}(e),w.innerHTML="",w.classList.remove("error"),g(b)}}catch(n){w.innerHTML="",w.classList.add("error"),console.log(n)}}))})()})();