// Modal de registro/avaliação de um jogo.

import {GAMES} from "./data.js";
import {S,save} from "./store.js";
import {$,paws,num,toast} from "./utils.js";
import {render} from "./router.js";

let M={};

export function openLog(id){M={game:id,status:"Zerado",rating:0,like:false,t0:performance.now()};
 $("#mTitle").textContent=GAMES[id].title;$("#mDate").value=new Date().toISOString().slice(0,10);$("#mText").value="";
 paintModal();$("#modal").classList.add("on")}

export function closeLog(){$("#modal").classList.remove("on")}

function paintModal(){
 document.querySelectorAll("#mStatus button").forEach(b=>b.classList.toggle("on",b.dataset.s==M.status));
 $("#mRate").innerHTML=paws(M.rating,34);
 $("#mRateTxt").textContent=M.rating?num(M.rating)+" / 5":"toque nas patinhas";
 $("#mLike").classList.toggle("on",M.like)}

export function saveLog(){
 const text=$("#mText").value.trim(),sec=(performance.now()-M.t0)/1000;
 S.logs.push({game:M.game,status:M.status,rating:M.rating,like:M.like,date:$("#mDate").value||new Date().toISOString().slice(0,10),plat:$("#mPlat").value,text,ts:Date.now()});
 S.timings.push({game:M.game,sec,review:!!text});save();closeLog();toast("Miau! Salvo no seu diário 🐾");render()}

export function initModal(){
 $("#mStatus").onclick=e=>{const b=e.target.closest("button");if(b){M.status=b.dataset.s;paintModal()}};
 $("#mRate").onclick=e=>{const s=e.target.closest(".pw");if(!s)return;const r=s.getBoundingClientRect();const v=+s.dataset.i-(e.clientX-r.left<r.width/2?.5:0);M.rating=M.rating==v?0:v;paintModal()};
 $("#mLike").onclick=()=>{M.like=!M.like;paintModal()};
 $("#modal").onclick=e=>{if(e.target.id=="modal")closeLog()};
}
