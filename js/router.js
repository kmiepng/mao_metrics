// Navegação entre telas.

import {$} from "./utils.js";
import {VIEWS} from "./views.js";

let view="inicio",arg=null;

export function go(v,a){view=v;arg=a;if(v!="busca")$("#q").value="";render();scrollTo(0,0)}

export function setView(v){view=v}

export function render(){
 document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("on",b.dataset.v==view));
 $("#app").innerHTML=VIEWS[view](arg);
}
