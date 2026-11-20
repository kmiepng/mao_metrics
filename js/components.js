// Componentes de interface reutilizáveis e consultas sobre os registros.

import {GAMES,FRIENDS,SEED} from "./data.js";
import {S} from "./store.js";
import {esc,ini,PAW,paws,fmtDate} from "./utils.js";

export function cover(g,extra=""){return `<div class="cover" style="background:linear-gradient(160deg,${g.c[0]},${g.c[1]})" onclick="go('jogo',${g.id})"><span class="ini">${ini(g.title)}</span><span class="wm">${PAW}</span>${extra}<span>${esc(g.title)}</span></div>`}

export function allLogs(){return [...S.logs.map(l=>({...l,who:"Você"})),...SEED]}

export function avg(id){const r=allLogs().filter(l=>l.game==id&&l.rating).map(l=>l.rating);return r.length?(r.reduce((a,b)=>a+b,0)/r.length):0}

export function avatar(n,big){const c=n=="Você"?"#c9a4ff":FRIENDS[n]||"#888";return `<span class="av${big?" big":""}" style="--c:${c}">${n[0]}</span>`}

export function entry(l){const g=GAMES[l.game];return `<div class="card item">${cover(g)}<div style="flex:1">
 <div class="who">${avatar(l.who)}<b>${esc(l.who)}</b><span class="meta">${l.status=="Zerado"?"zerou":l.status=="Jogando"?"está jogando":"abandonou"}</span></div>
 <div style="margin-top:4px"><a href="#" onclick="go('jogo',${g.id});return false" style="color:var(--text);font-weight:700;text-decoration:none">${esc(g.title)}</a> <small class="k">${g.year}</small></div>
 <div>${l.rating?paws(l.rating):""} ${l.like?'<span style="color:var(--accent2)">♥</span>':""} <span class="meta">· ${fmtDate(l.date)}</span></div>
 ${l.text?`<div class="review">${esc(l.text)}</div>`:""}</div></div>`}

export const EMPTY=(t,b="")=>`<div class="empty"><span class="cat">🐈</span>${t}${b}</div>`;
