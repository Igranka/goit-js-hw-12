import{a as v,S as g,i as d}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function h(r,t){return(await v.create({baseURL:"https://pixabay.com/api/",params:{key:"43250686-c1e1dda9f99928fc2eb99e4d5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).get("")).data}const m=document.querySelector("ul.gallery");function y(r){const t=r.map(o=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
            <img
                src="${o.webformatURL}"
                alt="${o.tags}"
            />
            <ul class="data">
                <li>
                    <p>Likes ${o.likes}</p>
                </li>
                <li>
                    <p>Views ${o.views}</p>
                </li>
                <li>
                    <p>Comments ${o.comments}</p>
                </li>
                <li>
                    <p>Downloads ${o.downloads}</p>
                </li>
            </ul>
        </a>
    </li>`).join("");m.insertAdjacentHTML("beforeend",t),new g(".gallery-link",{captionsData:"alt",captionsDelay:250})}const b=document.querySelector(".form"),f=document.querySelector("input"),i=document.querySelector(".loader"),c=document.querySelector(".load-more-button"),w=new g(".gallery-link",{captionsData:"alt",captionDelay:250});let l,n=1,L=0;const C=15;let a;b.addEventListener("submit",S);c.addEventListener("click",q);async function S(r){if(r.preventDefault(),i.classList.add("is-open"),m.innerHTML="",w.refresh(),l=f.value.trim(),l==="")return i.classList.remove("is-open"),d.show({color:"#EF4040",progressBarColor:"rgb(181, 27, 27)",messageColor:"#FFFFFF",message:"Please enter a valid value",position:"topRight"});n=1;try{if(a=await h(l,n),L=Math.ceil(a.totalHits/C),a.hits.length===0)return i.classList.remove("is-open"),c.classList.remove("is-open"),d.info({color:"#EF4040",progressBarColor:"rgb(181, 27, 27)",messageColor:"#FFFFFF",message:"Image limit reached",position:"topRight"});y(a.hits)}catch(t){console.error(t)}finally{i.classList.remove("is-open")}F(),f.value=""}async function q(r){i.classList.add("is-open"),n+=1;try{a=await h(l,n),y(a.hits)}catch(t){console.error(t)}finally{i.classList.remove("is-open"),F();const t=2,o=m.firstElementChild.getBoundingClientRect().height*t;scrollBy({top:o,behavior:"smooth"})}}function F(){if(n>=L)return c.classList.remove("is-open"),d.show({color:"#EF4040",progressBarColor:"rgb(181, 27, 27)",messageColor:"#FFFFFF",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});c.classList.add("is-open")}
//# sourceMappingURL=commonHelpers.js.map
