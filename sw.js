if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-464e6d59"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CS-TM8q_.js",revision:null},{url:"assets/index-DACjr3Xe.css",revision:null},{url:"index.html",revision:"bac4841f1592b9f65a17bcbdaa4e60bc"},{url:"registerSW.js",revision:"7187b9457e8c77bfa5e809a7321122fc"},{url:"manifest.webmanifest",revision:"b9818414cec313acc97d2c0e1522779f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
