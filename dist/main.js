!function(){const e=document.querySelector(".left"),t=document.querySelector(".right"),s=document.querySelectorAll(".songsNavItem");e.addEventListener("click",(()=>{const e=document.querySelector(".songsContainer").clientWidth,t=document.querySelector(".songsFrame"),s=document.querySelector(".songsNavDisplayed"),a=document.querySelector(".displayed"),o=parseInt(a.getAttribute("data-id"),10);let l=o-1,d=e*(l-1);1===o&&(l=t.lastElementChild.getAttribute("data-id"),d=e*(l-1));const n=document.querySelector(`[data-id='${l}']`),r=document.querySelector(`[data-songsNav='${l}']`);a.classList.toggle("displayed"),s.classList.toggle("songsNavDisplayed"),n.classList.toggle("displayed"),r.classList.toggle("songsNavDisplayed"),t.style.transform=`translateX(-${d}px)`})),t.addEventListener("click",(()=>{const e=document.querySelector(".songsContainer").clientWidth,t=document.querySelector(".songsFrame"),s=document.querySelector(".displayed"),a=parseInt(s.getAttribute("data-id"),10),o=document.querySelector(".songsNavDisplayed");let l=a+1,d=e*a;a===parseInt(t.lastElementChild.getAttribute("data-id"),10)&&(l=1,d=0);const n=document.querySelector(`[data-id='${l}']`),r=document.querySelector(`[data-songsNav='${l}']`);s.classList.toggle("displayed"),o.classList.toggle("songsNavDisplayed"),n.classList.toggle("displayed"),r.classList.toggle("songsNavDisplayed"),t.style.transform=`translateX(-${d}px)`})),s.forEach((e=>e.addEventListener("click",(e=>{(e=>{const t=document.querySelector(".songsContainer").clientWidth,s=document.querySelector(".songsFrame"),a=document.querySelector(".displayed"),o=document.querySelector(".songsNavDisplayed"),l=parseInt(e.target.getAttribute("data-songsNav"),10),d=t*(l-1),n=document.querySelector(`[data-id='${l}']`),r=document.querySelector(`[data-songsNav='${l}']`);a.classList.toggle("displayed"),o.classList.toggle("songsNavDisplayed"),n.classList.toggle("displayed"),r.classList.toggle("songsNavDisplayed"),s.style.transform=`translateX(-${d}px)`})(e)}))))}();