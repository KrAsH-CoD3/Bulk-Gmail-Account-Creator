var __funcaptchaInitParameters={responses:{lastSolution:null}};(function(){var e={};if(document.currentScript&&document.currentScript.dataset&&document.currentScript.dataset["parameters"]){try{e=JSON.parse(document.currentScript.dataset["parameters"])}catch(o){}}if(e.originalFuncaptchaApiUrl){var a=document.createElement("a");a.href=e.originalFuncaptchaApiUrl;if(a.hostname){__funcaptchaInitParameters.apiJSSubdomain=a.hostname}}if(e.originalFuncaptchaApiUrl&&e.currentFuncaptchaApiUrl&&e.originalFuncaptchaApiUrl!==e.currentFuncaptchaApiUrl){var t=document.getElementsByTagName("script");for(var n in t){if(t[n].src===e.originalFuncaptchaApiUrl){t[n].src=e.currentFuncaptchaApiUrl;if(typeof t[n].dataset.callback!=="undefined"){e.currentOnloadMethodName=t[n].dataset.callback}break}}}else{}var r=e.currentOnloadMethodName;if(r){function c(){var e;if(typeof window[r]==="function"){e=window[r]}window[r]=function(a){if(typeof a!=="undefined"&&typeof a.setConfig==="function"){var t=a.setConfig;a.setConfig=function(e){t.apply(this,arguments);Object.assign(window.__funcaptchaInitParameters,e)}}else{var n=FunCaptcha;FunCaptcha=ArkoseEnforcement=function(e){if(e&&typeof e.callback=="function"){var a=e.callback;e.callback=function(){a.apply(this,arguments)}}Object.assign(__funcaptchaInitParameters,e);n.apply(this,arguments);this.getSessionToken=function(){if(__funcaptchaInitParameters["responses"]["lastSolution"]){return __funcaptchaInitParameters["responses"]["lastSolution"]}}};ArkoseEnforcement.prototype.clear_session=function(){n.prototype.clear_session.apply(this,arguments)};ArkoseEnforcement.prototype.refresh_session=function(){n.prototype.refresh_session.apply(this,arguments)}}if(typeof e==="function"){e.apply(this,arguments)}}}if(typeof window[r]!=="undefined"||r==="_funcaptchaOnloadMethod"){c()}else{var i=setInterval((function(){if(typeof window[r]==="undefined"){return}clearInterval(i);c()}),1)}}window.addEventListener("message",(function(e){if(!e.data||typeof e.data==="object")return;var a=JSON.parse(e.data);switch(a.eventId){case"challenge-complete":if(typeof __funcaptchaInitParameters["callback"]==="function"){__funcaptchaInitParameters["callback"](a.payload.sessionToken)}else if(typeof __funcaptchaInitParameters["onCompleted"]==="function"){__funcaptchaInitParameters["onCompleted"]({token:a.payload.sessionToken})}else{window.parent.postMessage(JSON.stringify({eventId:"challenge-complete",publicKey:a.publicKey,payload:{sessionToken:a.payload.sessionToken}}),"*")}break}}))})();window.addEventListener("message",(function(e){if(!e.data||typeof e.data.receiver=="undefined"||e.data.receiver!=="funcaptchaObjectInterceptor"){return}var a=e.data;if(a.type==="getFuncaptchaInitParameters"){var t;if(typeof __funcaptchaInitParameters.data==="undefined"){var n=document.createElement("a");n.href=window.location.href;var r=new URLSearchParams(n.search);t=r.get("data")}else{t=__funcaptchaInitParameters.data.blob}e.source.postMessage({receiver:"funcaptchaSolver",type:"funcaptchaInitParameters",parameters:{data:t}},"*")}}));