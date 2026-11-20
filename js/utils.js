// Funções utilitárias genéricas: DOM, escape, formatação e patinhas.

export const $=s=>document.querySelector(s);
export const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
export const ini=t=>t.split(/[\s:]+/).filter(w=>/^[A-Z0-9]/.test(w)).slice(0,2).map(w=>w[0]).join("");
export const PAW='<svg viewBox="0 0 24 24"><use href="#paw"/></svg>';

export function paws(r,s=14){let h="";for(let i=1;i<=5;i++){const f=r>=i?100:r>=i-.5?50:0;
 h+=`<span class="pw" data-i="${i}" style="width:${s}px;height:${s}px;--s:${s}px">${PAW}<span class="fill" style="width:${f}%">${PAW}</span></span>`}
 return `<span class="paws">${h}</span>`}

export const num=r=>r.toFixed(1).replace(".",",");
export const fmtDate=d=>new Date(d+"T12:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"short"});

export function toast(m){const t=$("#toast");t.textContent=m;t.style.display="block";clearTimeout(t._h);t._h=setTimeout(()=>t.style.display="none",1800)}
