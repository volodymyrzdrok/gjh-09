const t={};t.body=document.querySelector("body"),t.btnStart=document.querySelector("[data-start]"),t.btnStop=document.querySelector("[data-stop]"),t.timerInput=document.querySelector("#datetime-picker"),t.dataStartBtn=document.querySelector("[data-start-btn]"),t.dataStopBtn=document.querySelector("[data-stop-btn]"),t.timerContainer=document.querySelector(".timer"),t.daysData=document.querySelector("[data-days]"),t.hoursData=document.querySelector("[data-hours]"),t.minutesData=document.querySelector("[data-minutes]"),t.secondsData=document.querySelector("[data-seconds]"),t.form=document.querySelector(".form");const{btnStart:e,btnStop:o,body:a}=t;e.addEventListener("click",(function(){n(),r=setInterval((()=>{n()}),700),e.disabled=!0})),o.addEventListener("click",(function(){clearInterval(r),e.disabled=!1}));let r=null;const n=()=>a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`;
//# sourceMappingURL=01-color-switcher.afc08f08.js.map
