function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire8b0e;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire8b0e=r);var a=r("eWCmQ");const u={};function d(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}function i({position:e,delay:t}){return s("success",`Fulfilled promise ${e} in ${t}ms`)}function c({position:e,delay:t}){return s("failure",`Rejected promise ${e} in ${t}ms`)}function s(t,o){return e(a).Notify[t](o,{distance:"20px",position:"center-top"})}u.body=document.querySelector("body"),u.btnStart=document.querySelector("[data-start]"),u.btnStop=document.querySelector("[data-stop]"),u.timerInput=document.querySelector("#datetime-picker"),u.dataStartBtn=document.querySelector("[data-start-btn]"),u.dataStopBtn=document.querySelector("[data-stop-btn]"),u.timerContainer=document.querySelector(".timer"),u.daysData=document.querySelector("[data-days]"),u.hoursData=document.querySelector("[data-hours]"),u.minutesData=document.querySelector("[data-minutes]"),u.secondsData=document.querySelector("[data-seconds]"),u.form=document.querySelector(".form"),u.form.addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=function(e){const t=new FormData(e),o={};for(let[e,n]of t)o[e]=+n;return o}(e.target);let r=t;for(let e=1;e<=n;e++)d(e,r).then(i).catch(c),r+=o;e.target.reset()}));
//# sourceMappingURL=03-promises.769415bd.js.map
