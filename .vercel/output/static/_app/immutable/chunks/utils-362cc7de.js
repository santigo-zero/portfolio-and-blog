var c=Object.defineProperty;var m=(n,t,e)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var a=(n,t,e)=>(m(n,typeof t!="symbol"?t+"":t,e),e);class d{constructor(t,e,s,o,r,l){a(this,"title");a(this,"description");a(this,"date");a(this,"href");a(this,"extension");a(this,"metadata");this.href=t,this.title=e,this.description=s,this.date=o,this.extension=r,this.metadata=l}}const h=(n,t)=>{const e=n.getTime()-t.getTime(),s=new Intl.RelativeTimeFormat("en",{style:"long"});let o,r;return e<1e3?"just now":(e<6e4?(o=Math.floor(e/1e3),r="second"):e<36e5?(o=Math.floor(e/6e4),r="minute"):e<864e5?(o=Math.floor(e/36e5),r="hour"):(o=Math.floor(e/864e5),r="day"),s.format(-o,r))},g=n=>{const t=new Date(n);return new Intl.DateTimeFormat("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(t)};let i=0;function u(){if(i||typeof document>"u"||!document.documentElement)return i;const n=document.documentElement;return i=parseFloat(getComputedStyle(n).fontSize),i}function p(n){const t=n.replace(/[^0-9]/g,""),e=parseInt(t,10);return parseInt(`${e*u()}`)}export{d as P,h as a,p as i,g as r};