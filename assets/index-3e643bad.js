(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const c=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],f=window.localStorage.getItem("lastGenerated")||"";let s;if(f!=a()){window.localStorage.setItem("lastGenerated",a());const o=c[Math.floor(Math.random()*c.length)];console.log(o),window.localStorage.setItem("generatedLetter",o),s=o}else s=window.localStorage.getItem("generatedLetter");const d=document.getElementById("date");d&&(d.innerText=`(${a()})`);const u=document.getElementById("uwu");u&&(u.innerText=`U${s}U`);function a(){const o=new Date,n=o.getFullYear(),l=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getDate()).padStart(2,"0");return`${n}/${l}/${r}`}