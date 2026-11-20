// Dados estáticos do protótipo: jogos, amigos, registros de exemplo e listas.

export const GAMES=[
 ["Hollow Knight",2017,"Metroidvania","Team Cherry",["#1b2a4a","#5a7bb5"]],
 ["The Witcher 3: Wild Hunt",2015,"RPG","CD Projekt Red",["#3a1d12","#b0653a"]],
 ["Stardew Valley",2016,"Simulação","ConcernedApe",["#1f5a2d","#8cd06a"]],
 ["Celeste",2018,"Plataforma","Maddy Makes Games",["#4b1d5e","#e06aa8"]],
 ["Red Dead Redemption 2",2018,"Ação/Aventura","Rockstar Games",["#5a1010","#c9442b"]],
 ["Hades",2020,"Roguelike","Supergiant Games",["#3b0a0a","#e4572e"]],
 ["The Legend of Zelda: Breath of the Wild",2017,"Aventura","Nintendo",["#123d3a","#57b5a2"]],
 ["Elden Ring",2022,"RPG de ação","FromSoftware",["#2b2412","#c9a64a"]],
 ["Minecraft",2011,"Sandbox","Mojang",["#2f4f1a","#7fbf3f"]],
 ["God of War",2018,"Ação/Aventura","Santa Monica Studio",["#2a2a35","#8b9bb4"]],
 ["Baldur's Gate 3",2023,"RPG","Larian Studios",["#2a1430","#9b59b6"]],
 ["Disco Elysium",2019,"RPG","ZA/UM",["#3a2f1a","#d98e4c"]],
 ["Undertale",2015,"RPG","Toby Fox",["#111","#e8e8e8"]],
 ["Outer Wilds",2019,"Exploração","Mobius Digital",["#0f2440","#f2a33a"]],
 ["Cuphead",2017,"Run and gun","Studio MDHR",["#5a3a1a","#e8c27a"]],
 ["Portal 2",2011,"Puzzle","Valve",["#20323f","#4fa3d9"]],
 ["Grand Theft Auto V",2013,"Ação","Rockstar Games",["#1e3a24","#5ab06a"]],
 ["Fortnite",2017,"Battle royale","Epic Games",["#2a1a5a","#5ad0ff"]],
 ["League of Legends",2009,"MOBA","Riot Games",["#0f1d2e","#c8aa6e"]],
 ["Free Fire",2017,"Battle royale","Garena",["#3a1500","#ff9a2e"]],
 ["It Takes Two",2021,"Co-op","Hazelight",["#3a1a3a","#ff7aa8"]],
 ["Hollow Knight: Silksong",2025,"Metroidvania","Team Cherry",["#3a0f1a","#d94a6a"]],
 ["Sekiro: Shadows Die Twice",2019,"Ação","FromSoftware",["#2a1010","#a83232"]],
 ["Terraria",2011,"Sandbox","Re-Logic",["#183a5a","#6ac06a"]],
 ["Stray",2022,"Aventura","BlueTwelve Studio",["#2a1a10","#e08a3a"]],
].map((g,i)=>({id:i,title:g[0],year:g[1],genre:g[2],dev:g[3],c:g[4]}));

export const FRIENDS={Ana:"#ff9f5a",Bruno:"#9ad0ff",Carla:"#ff8fb1",Diego:"#b8e08a",Lu:"#ffd36b"};

export const SEED=[
 ["Ana",5,4.5,"Zerado","Chorei no final. Combate simples mas a história segura até o fim.",true,"2026-11-18"],
 ["Bruno",7,5,"Zerado","Melhor mundo aberto que já joguei. Só explorar já vale.",true,"2026-11-17"],
 ["Carla",24,5,"Zerado","Jogar como gato é tudo que eu queria na vida. Miau.",true,"2026-11-16"],
 ["Diego",7,4.5,"Jogando","Ainda no começo, mas a liberdade é absurda.",false,"2026-11-16"],
 ["Lu",2,5,"Zerado","Jogo de conforto. Joguei 80h sem perceber.",true,"2026-11-15"],
 ["Ana",13,4,"Zerado","Curto e criativo. Não leia nada antes de jogar.",true,"2026-11-14"],
 ["Bruno",4,2.5,"Abandonado","Bonito, mas lento demais pra mim.",false,"2026-11-13"],
 ["Carla",3,4,"Zerado","Difícil na medida certa. Trilha sonora incrível.",false,"2026-11-12"],
 ["Diego",0,4.5,"Zerado","Difícil, bonito e enorme. Vale cada morte.",true,"2026-11-10"],
 ["Lu",20,4,"Zerado","Joguei com meu irmão, diversão garantida em dupla.",false,"2026-11-09"],
 ["Ana",11,3.5,"Jogando","Interessante, mas é muito texto pra ler.",false,"2026-11-08"],
 ["Bruno",14,5,"Zerado","Melhor jogo de exploração que existe.",true,"2026-11-05"],
].map(s=>({who:s[0],game:s[1],rating:s[2],status:s[3],text:s[4],like:s[5],date:s[6]}));

export const LISTS=[
 {t:"Pra jogar a dois",by:"Lu",g:[20,2,23,8,15],d:"Co-op e sofá: jogos pra jogar com alguém do lado (o gato conta)."},
 {t:"Difíceis, mas justos",by:"Diego",g:[7,22,3,0,14,5],d:"Você vai morrer muito. Gatos têm 7 vidas, você não."},
 {t:"Histórias que ficam",by:"Carla",g:[4,1,11,10,12],d:"Jogos que eu ainda penso semanas depois."},
 {t:"Curtos pra fim de semana",by:"Ana",g:[24,15,12,3,13],d:"Dá pra zerar em poucos dias, entre uma soneca e outra."},
];
