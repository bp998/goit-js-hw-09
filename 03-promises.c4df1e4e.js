const e=document.querySelector('button[type="submit"]'),t=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]');e.addEventListener("click",(e=>{e.preventDefault();let l=1,o=setTimeout((()=>{let e=setInterval((()=>{const r=Number(t.value)+l*Number(n.value);!function(e,t){new Promise(((n,u)=>{Math.random()>.3?console.log(`✅ Fulfilled promise ${e} in ${t}ms`):console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}(l,r),l++,l>Number(u.value)&&(clearInterval(e),clearTimeout(o))}),n.value)}),t.value)}));
//# sourceMappingURL=03-promises.c4df1e4e.js.map