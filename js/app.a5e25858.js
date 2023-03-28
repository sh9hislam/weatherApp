(function(){"use strict";var t={7762:function(t,e,n){var a=n(9242),r=n(3396);const i={key:0,class:"container"},o={key:1,class:"loading"},c=(0,r._)("h1",null,"loading...",-1),s=[c];function l(t,e,n,a,c,l){const u=(0,r.up)("Navbar"),d=(0,r.up)("Main");return t.weather?((0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(u),(0,r.Wm)(d)])):((0,r.wg)(),(0,r.iD)("div",o,s))}var u=n.p+"img/logo.af34f1a1.svg",d=n.p+"img/kaplya.ee4f4542.svg";const m={class:"nav"},g=(0,r._)("a",{href:"#",class:"logo"},[(0,r._)("img",{src:u,alt:""}),(0,r._)("span",{class:"logo__span"},"vue-weather")],-1),p={class:"nav__search"};function _(t,e,n,i,o,c){return(0,r.wg)(),(0,r.iD)("nav",m,[g,(0,r._)("div",p,[(0,r._)("img",{src:d,alt:"",onClick:e[0]||(e[0]=(...t)=>c.darkMode&&c.darkMode(...t))}),(0,r.wy)((0,r._)("input",{type:"text",class:"nav__search-input",placeholder:"Выбрать город","onUpdate:modelValue":e[1]||(e[1]=t=>o.city=t),onKeydown:e[2]||(e[2]=(0,a.D2)((e=>(t.getWeather(o.city),o.city="")),["enter"]))},null,544),[[a.nr,o.city]])])])}var h=n(65),w={data(){return{city:""}},methods:{...(0,h.nv)(["getWeather"]),darkMode(){let t=document.body.style.getPropertyValue("--bg");"white"==t?(document.body.style.setProperty("--bg","rgb(27,27,27)"),document.body.style.setProperty("--text","white")):(document.body.style.setProperty("--bg","white"),document.body.style.setProperty("--text","black"))}},created(){document.body.style.setProperty("--bg","white"),document.body.style.setProperty("--text","black")}},f=n(89);const y=(0,f.Z)(w,[["render",_]]);var v=y;const b={class:"main"};function k(t,e,n,a,i,o){const c=(0,r.up)("MainContent"),s=(0,r.up)("MainWeek");return(0,r.wg)(),(0,r.iD)("main",b,[(0,r.Wm)(c),(0,r.Wm)(s)])}var D=n(7139),M=n.p+"img/headerBg.876cb9ef.svg",x=n.p+"img/temp.5012f3aa.svg",W=n.p+"img/davlenie.dec93a4d.svg",z=n.p+"img/osadki.47e1d1f6.svg",O=n.p+"img/wind.e3f8caaa.svg";const C={class:"main__content"},P={class:"main__content-left"},Z={class:"main__content-left-degree"},j=(0,r._)("p",{class:"main__content-left-today"},"Сегодня",-1),L={class:"main__content-left-time"},S={class:"main__content-left-city"},U={class:"main__content-left-img"},K=["src"],T={class:"main__content-right"},$=(0,r._)("img",{src:M,alt:"",class:"main__content-right-bg"},null,-1),I={class:"main__content-right-item"},R=(0,r._)("div",{class:"main__content-right-img"},[(0,r._)("img",{src:x,alt:""})],-1),N=(0,r._)("span",null,"Температура",-1),V={class:"main__content-right-item"},q=(0,r._)("div",{class:"main__content-right-img"},[(0,r._)("img",{src:W,alt:""})],-1),A=(0,r._)("span",null,"Давление ",-1),B={class:"main__content-right-item"},E=(0,r._)("div",{class:"main__content-right-img"},[(0,r._)("img",{src:z,alt:""})],-1),F=(0,r._)("span",null,"Осадки",-1),H={class:"main__content-right-item"},Y=(0,r._)("div",{class:"main__content-right-img"},[(0,r._)("img",{src:O,alt:""})],-1),G=(0,r._)("span",null,"Ветер",-1);function J(t,e,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",P,[(0,r._)("p",Z,(0,D.zw)(Math.round(t.weather.current.temp))+"°",1),j,(0,r._)("p",L,"Время: "+(0,D.zw)(o.getTime),1),(0,r._)("p",S,"Город: "+(0,D.zw)(t.weather.name.toUpperCase()),1),(0,r._)("div",U,[(0,r._)("img",{src:o.getImg,alt:""},null,8,K)])]),(0,r._)("div",T,[$,(0,r._)("div",I,[R,N,(0,r._)("p",null,(0,D.zw)(Math.round(t.weather.current.temp))+"° - ощущается как "+(0,D.zw)(Math.round(t.weather.current.feels_like))+"°",1)]),(0,r._)("div",V,[q,A,(0,r._)("p",null,(0,D.zw)(t.weather.current.pressure)+" мм ртутного столба - нормальное",1)]),(0,r._)("div",B,[E,F,(0,r._)("p",null,(0,D.zw)(t.weather.current.clouds)+"%",1)]),(0,r._)("div",H,[Y,G,(0,r._)("p",null,(0,D.zw)(t.weather.current.wind_speed)+" м/с юго-запад - легкий ветер",1)])])])}const Q={"дымка":n(2831),"ясно":n(5056),"небольшая облачность":n(5590),"пасмурно":n(5590),"облачно с прояснениями":n(8782),"небольшой дождь":n(7570),"дождь":n(7669),"переменная облачность":n(5590)};var X={computed:{...(0,h.rn)(["weather"]),description(){return this.weather.current.weather[0].description},getImg(){return Q[this.description]||Q["небольшой дождь"]},getTime(){return(new Date).toLocaleString("en-US",{timeZone:this.weather.timezone,timeStyle:"short",hourCycle:"h23"})}}};const tt=(0,f.Z)(X,[["render",J]]);var et=tt;const nt={class:"main__week"};function at(t,e,n,a,i,o){const c=(0,r.up)("Day");return(0,r.wg)(),(0,r.iD)("div",nt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.weather.daily,(e=>((0,r.wg)(),(0,r.j4)(c,{key:t.i,day:e},null,8,["day"])))),128))])}const rt={class:"main__week-item"},it={class:"main__week-item-title"},ot={class:"main__week-item-date"},ct={class:"main__week-item-img"},st=["src"],lt={class:"main__week-item-temp"},ut={class:"main__week-item-info"};function dt(t,e,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",rt,[(0,r._)("h2",it,(0,D.zw)(o.getWeekDay),1),(0,r._)("p",ot,(0,D.zw)(o.getDay)+" "+(0,D.zw)(o.getMonth),1),(0,r._)("div",ct,[(0,r._)("img",{src:o.getImg,alt:""},null,8,st)]),(0,r._)("p",lt,"+"+(0,D.zw)(Math.round(n.day.temp.max))+"°",1),(0,r._)("p",ut,(0,D.zw)(o.description),1)])}function mt(t,e){const n=1e3*t,a=new Date(n);let r="day"==e?a.toLocaleDateString("ru-RU",{day:"numeric"}):"month"==e?a.toLocaleDateString("ru-RU",{month:"long"}):"weekday"==e?a.toLocaleDateString("ru-RU",{weekday:"long"}):"";return r}var gt=mt,pt={props:{day:{typeof:Object}},computed:{description(){return this.day.weather[0].description},getImg(){return Q[this.description]||Q["небольшой дождь"]},getDay(){return gt(this.day.dt,"day")},getMonth(){return gt(this.day.dt,"month")},getWeekDay(){return gt(this.day.dt,"weekday")}}};const _t=(0,f.Z)(pt,[["render",dt]]);var ht=_t,wt={components:{Day:ht},computed:{...(0,h.rn)(["weather"])}};const ft=(0,f.Z)(wt,[["render",at]]);var yt=ft,vt={components:{MainContent:et,MainWeek:yt}};const bt=(0,f.Z)(vt,[["render",k]]);var kt=bt,Dt={components:{Navbar:v,Main:kt},computed:{...(0,h.rn)(["weather"])},methods:{...(0,h.nv)(["getWeather"])},created(){this.getWeather("Ташкент")}};const Mt=(0,f.Z)(Dt,[["render",l]]);var xt=Mt,Wt=n(4161),zt=(0,h.MT)({state:{apiKey:"c5a85d5c79d9078758b4a5a468177da6",weather:null},getters:{},mutations:{getWeather(t,e){t.weather=e}},actions:{async getWeather(t,e){try{let n=await Wt.Z.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&appid=${t.state.apiKey}`),{lat:a,lon:r,local_names:i}=n.data[0];if(i.ru.toLowerCase()==e.toLowerCase()){let n=await Wt.Z.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${a}&lon=${r}&exclude=minutely,hourly,alerts&appid=${t.state.apiKey}&units=metric&lang=ru`),i={...n.data,name:e};t.commit("getWeather",i)}}catch(n){console.error(n)}}}});(0,a.ri)(xt).use(zt).mount("#app")},5590:function(t,e,n){t.exports=n.p+"img/cloud.26d56e75.svg"},2831:function(t,e,n){t.exports=n.p+"img/minicloud.7c004874.svg"},7570:function(t,e,n){t.exports=n.p+"img/minirain.8f5c4cf8.svg"},7669:function(t,e,n){t.exports=n.p+"img/rain.433b1bf8.svg"},5056:function(t,e,n){t.exports=n.p+"img/sun.a17a0e02.svg"},8782:function(t,e,n){t.exports=n.p+"img/sunrain.d758b9b6.svg"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],i=t[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[s])}))?a.splice(s--,1):(c=!1,i<o&&(o=i));if(c){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/weatherApp/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],c=a[1],s=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var u=s(n)}for(e&&e(a);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunkweather"]=self["webpackChunkweather"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7762)}));a=n.O(a)})();
//# sourceMappingURL=app.a5e25858.js.map