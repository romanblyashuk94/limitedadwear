var e=function(e){const t="rating__star far fa-star",a=e.length;let c;e.map((r=>{r.onclick=()=>{if(c=e.indexOf(r),r.className===t)for(;c>=0;--c)e[c].className="rating__star fas fa-star";else for(;c<a;++c)e[c].className=t}}))};const t=document.querySelector("[data-alert]"),a=document.querySelector("[data-close-alert]"),c=[...document.getElementsByClassName("rating__star")],r=document.querySelector("[data-openMenuBtn]"),n=document.querySelector("[data-closeMenuBtn]"),l=document.querySelector("[data-menu]"),o=document.querySelector("[data-selectedimage]"),s=document.querySelector("[data-productImagesThumbnail]"),u=document.querySelector(".parametrsForm"),d=document.querySelector("[data-quantityInput]"),i=document.querySelector(".totalPrice"),m=document.querySelector("[data-increment]"),v=document.querySelector("[data-decrement]");var g,y,q,S,L,f,p,E,k;(g=u).addEventListener("change",(()=>{document.querySelector("[data-sizeOutput]").textContent=g.elements.size.value,document.querySelector("[data-colorOutput]").textContent=g.elements.color.value})),y=o,s.addEventListener("click",(e=>{e.preventDefault(),"IMG"===e.target.nodeName&&(e.currentTarget.querySelector("img.selectedImage").classList.remove("selectedImage"),e.target.classList.add("selectedImage"),y.src=e.target.src)})),q=n,S=l,r.addEventListener("click",(()=>S.classList.toggle("isOpen"))),q.addEventListener("click",(()=>S.classList.toggle("isOpen"))),e(c),L=t,(f=a).addEventListener("click",(function e(){L.classList.remove("isOpen"),f.removeEventListener("click",e)})),p=d,E=i,k=v,m.addEventListener("click",(()=>{const e=Number(p.value);e<20&&(p.value=e+1,E.textContent=`$${(285*p.value).toFixed(2)}`)})),k.addEventListener("click",(()=>{const e=Number(p.value);e>1&&(p.value=e-1,E.textContent=`$${(285*p.value).toFixed(2)}`)}));
//# sourceMappingURL=index.0e403eb2.js.map