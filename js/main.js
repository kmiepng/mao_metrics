// Ponto de entrada: liga os eventos e expõe as ações usadas pelos onclick do HTML.

import {S,save,resetState} from "./store.js";
import {$,toast} from "./utils.js";
import {go,render,setView} from "./router.js";
import {openLog,closeLog,saveLog,initModal} from "./modal.js";

function delLog(ts){S.logs=S.logs.filter(l=>l.ts!=ts);save();render()}

let armed=0;
function resetAll(){const b=document.getElementById("resetBtn");
 if(Date.now()-armed>4000){armed=Date.now();if(b)b.textContent="Toque de novo para apagar tudo";return}
 armed=0;resetState();toast("Protótipo reiniciado");go("inicio")}

// Módulos não criam variáveis globais; os atributos onclick do HTML precisam destas.
Object.assign(window,{go,openLog,closeLog,saveLog,delLog,resetAll});

initModal();
$("#nav").onclick=e=>{if(e.target.dataset.v)go(e.target.dataset.v)};
$("#q").oninput=e=>{if(e.target.value.trim()){setView("busca");render()}else go("inicio")};
render();
