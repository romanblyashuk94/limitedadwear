var e=function(e){const t="rating__star far fa-star",a=e.length;let n;e.map((s=>{s.onclick=()=>{if(n=e.indexOf(s),s.className===t)for(;n>=0;--n)e[n].className="rating__star fas fa-star";else for(;n<a;++n)e[n].className=t}}))};const t=document.querySelector("[data-alert]"),a=document.querySelector("[data-close-alert]"),n=[...document.getElementsByClassName("rating__star")],s=document.querySelector("[data-openMenuBtn]"),c=document.querySelector("[data-closeMenuBtn]"),r=document.querySelector("[data-menu]");var l,o,i,d;l=c,o=r,s.addEventListener("click",(()=>o.classList.toggle("isOpen"))),l.addEventListener("click",(()=>o.classList.toggle("isOpen"))),e(n),i=t,(d=a).addEventListener("click",(function e(){i.classList.remove("isOpen"),d.removeEventListener("click",e)}));
//# sourceMappingURL=index.5df468fc.js.map