// Estado do usuário persistido no localStorage.

const K="maometrics.v1";

// O objeto S é sempre o mesmo; só seus campos mudam, para que todos os módulos vejam o estado atual.
export const S={logs:[],timings:[]};
try{const x=JSON.parse(localStorage.getItem(K));if(x)Object.assign(S,x)}catch(e){}

export const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};

export function resetState(){S.logs=[];S.timings=[];save()}
