!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire8b0e;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire8b0e=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return a.default(e)||i.default(e,t)||c.default(e,t)||l.default()};var a=d(o("8slrw")),i=d(o("7AJDX")),l=d(o("ifqQW")),c=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var s=o("iU1Pc"),f={};function p(e,t){return new Promise((function(r,n){setTimeout((function(){Math.random()>.3?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}function y(e){var t=e.position,r=e.delay;return b("success","Fulfilled promise ".concat(t," in ").concat(r,"ms"))}function m(e){var t=e.position,r=e.delay;return b("failure","Rejected promise ".concat(t," in ").concat(r,"ms"))}function b(t,r){return e(s).Notify[t](r,{distance:"20px",position:"center-top"})}f.body=document.querySelector("body"),f.btnStart=document.querySelector("[data-start]"),f.btnStop=document.querySelector("[data-stop]"),f.timerInput=document.querySelector("#datetime-picker"),f.dataStartBtn=document.querySelector("[data-start-btn]"),f.dataStopBtn=document.querySelector("[data-stop-btn]"),f.timerContainer=document.querySelector(".timer"),f.daysData=document.querySelector("[data-days]"),f.hoursData=document.querySelector("[data-hours]"),f.minutesData=document.querySelector("[data-minutes]"),f.secondsData=document.querySelector("[data-seconds]"),f.form=document.querySelector(".form"),f.form.addEventListener("submit",(function(t){t.preventDefault();for(var r=function(t){var r=new FormData(t),n={},o=!0,a=!1,i=void 0;try{for(var l,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var d=e(u)(l.value,2),s=d[0],f=d[1];n[s]=+f}}catch(e){a=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}return n}(t.target),n=r.delay,o=r.step,a=r.amount,i=n,l=1;l<=a;l++)p(l,i).then(y).catch(m),i+=o;t.target.reset()}))}();
//# sourceMappingURL=03-promises.c819d7a0.js.map