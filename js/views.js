// Telas do app. Cada função recebe o argumento da rota e devolve o HTML da tela.

import {GAMES,FRIENDS,LISTS} from "./data.js";
import {S} from "./store.js";
import {$,esc,PAW,paws,num,fmtDate} from "./utils.js";
import {cover,allLogs,avg,avatar,entry,EMPTY} from "./components.js";

function inicio(){
 const pop=[...GAMES].sort((a,b)=>avg(b.id)-avg(a.id)).slice(0,6);
 return `<div class="card banner">
  <div style="font-size:22px;font-weight:800;max-width:75%">Registre o que você joga. Descubra o que jogar.</div>
  <div class="meta" style="font-size:14px;max-width:75%">Guarde seu histórico, dê patinhas aos seus jogos e veja o que seus amigos estão zerando.</div>
  <svg class="tail" viewBox="0 0 32 28" height="70"><use href="#cat"/></svg></div>
  <h2>Populares entre seus amigos</h2><div class="grid">${pop.map(g=>cover(g,`<span class="badge"><span class="pw" style="width:11px;height:11px;color:var(--paw)">${PAW}</span>${num(avg(g.id))}</span>`)).join("")}</div>
  <h2>Atividade recente</h2><div class="feed">${allLogs().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,10).map(entry).join("")}</div>`;
}

function jogos(){return `<h2>Todos os jogos</h2><div class="grid">${GAMES.map(g=>cover(g)).join("")}</div>`}

function busca(){const q=$("#q").value.toLowerCase().trim();const r=GAMES.filter(g=>g.title.toLowerCase().includes(q)||g.genre.toLowerCase().includes(q));
 return `<h2>Resultados para “${esc(q)}”</h2>${r.length?`<div class="grid">${r.map(g=>cover(g)).join("")}</div>`:EMPTY("Nenhum jogo encontrado. O gato procurou embaixo do sofá também.")}`}

function jogo(arg){
 const g=GAMES[arg],logs=allLogs().filter(l=>l.game==g.id),mine=S.logs.filter(l=>l.game==g.id),a=avg(g.id);
 const dist=[.5,1,1.5,2,2.5,3,3.5,4,4.5,5].map(v=>logs.filter(l=>l.rating==v).length),mx=Math.max(1,...dist);
 return `<div class="hero">${cover(g)}<div class="info">
  <h1>${esc(g.title)}</h1><div class="meta" style="font-size:14px">${g.year} · ${esc(g.dev)}</div>
  <div style="margin:8px 0"><span class="pill">${esc(g.genre)}</span></div>
  <div class="row" style="gap:16px;margin:12px 0;flex-wrap:wrap"><button class="btn" onclick="openLog(${g.id})">🐾 Registrar / avaliar</button>
  <div>${paws(a,18)} <b>${a?num(a):"–"}</b> <span class="meta">${logs.length} registro(s)</span></div></div>
  <div class="dist" title="Distribuição das notas">${dist.map(d=>`<div style="height:${d/mx*100}%"></div>`).join("")}</div>
  <div class="meta" style="display:flex;justify-content:space-between"><span>0,5</span><span>5 patinhas</span></div>
  ${mine.length?`<div class="meta" style="margin-top:8px">Você registrou este jogo ${mine.length}x.</div>`:""}
 </div></div>
 <h2>Resenhas</h2><div class="feed">${logs.length?logs.sort((a,b)=>b.date.localeCompare(a.date)).map(entry).join(""):EMPTY("Ninguém registrou ainda. Seja o primeiro gato a chegar!")}</div>`;
}

function listas(){return `<h2>Listas da comunidade</h2><div class="lists">${LISTS.map(l=>`<div class="card"><b>${esc(l.t)}</b><div class="who meta" style="margin:4px 0">${avatar(l.by)} por ${l.by} · ${l.g.length} jogos</div>
 <div class="strip">${l.g.map(i=>cover(GAMES[i])).join("")}</div><div class="meta" style="margin-top:10px">${esc(l.d)}</div></div>`).join("")}</div>`}

function diario(){
 const L=[...S.logs].sort((a,b)=>b.date.localeCompare(a.date));
 return `<h2>Meu diário</h2>${L.length?`<div class="card" style="overflow-x:auto"><table><tr><th>Data</th><th>Jogo</th><th>Status</th><th>Nota</th><th>Plataforma</th><th></th></tr>
 ${L.map(l=>`<tr><td>${fmtDate(l.date)}</td><td><a href="#" style="color:var(--text)" onclick="go('jogo',${l.game});return false">${esc(GAMES[l.game].title)}</a></td><td>${l.status}</td><td>${l.rating?paws(l.rating):"–"}${l.like?' <span style="color:var(--accent2)">♥</span>':""}</td><td class="meta">${l.plat}</td><td><button class="btn ghost" style="padding:2px 8px" onclick="delLog(${l.ts})">✕</button></td></tr>`).join("")}</table></div>`
 :EMPTY("Seu diário está vazio. Até o gato já registrou mais jogos que você.",`<br><br><button class="btn" onclick="go('jogos')">Encontrar um jogo para registrar</button>`)}`}

function perfil(){
 const L=S.logs,z=L.filter(l=>l.status=="Zerado").length,r=L.filter(l=>l.rating).map(l=>l.rating);
 const fav=L.filter(l=>l.like).map(l=>GAMES[l.game]);
 const t=S.timings;
 return `<div class="row" style="gap:14px;margin-top:8px">${avatar("Você",true)}<div><div style="font-size:22px;font-weight:800">Seu perfil</div><div class="meta">Seguindo ${Object.keys(FRIENDS).length} amigos</div></div></div>
 <h2>Estatísticas</h2><div class="stats">
  <div class="card"><b>${L.length}</b><span class="meta">registros</span></div>
  <div class="card"><b>${z}</b><span class="meta">jogos zerados</span></div>
  <div class="card"><b>${r.length?num(r.reduce((a,b)=>a+b,0)/r.length):"–"}</b><span class="meta">média de patinhas</span></div>
  <div class="card"><b>${fav.length}</b><span class="meta">curtidos</span></div></div>
 <h2>Favoritos</h2>${fav.length?`<div class="grid">${fav.map(g=>cover(g)).join("")}</div>`:EMPTY("Curta jogos (♥) ao registrar para vê-los aqui.")}
 <h2>Dados da sessão de teste</h2><div class="card"><div class="meta">Tempo entre abrir o formulário de registro e salvar (usado para medir a hipótese H2).</div>
 ${t.length?`<table style="margin-top:8px"><tr><th>#</th><th>Jogo</th><th>Tempo</th><th>Com resenha</th></tr>${t.map((x,i)=>`<tr><td>${i+1}</td><td>${esc(GAMES[x.game].title)}</td><td>${x.sec.toFixed(1)} s</td><td>${x.review?"sim":"não"}</td></tr>`).join("")}</table>
  <div style="margin-top:8px">Média: <b>${(t.reduce((a,b)=>a+b.sec,0)/t.length).toFixed(1)} s</b></div>`:EMPTY("Nenhum registro cronometrado ainda.")}
 <div class="row" style="margin-top:12px"><button class="btn ghost" id="resetBtn" onclick="resetAll()">Reiniciar protótipo (novo participante)</button></div></div>`}

export const VIEWS={inicio,jogos,jogo,listas,diario,perfil,busca};
