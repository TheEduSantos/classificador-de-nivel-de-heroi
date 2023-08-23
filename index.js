console.log("=================== Classificador de Nível de Herói ===================")

console.log("INSIRA O NOME E O XP DO SEU HERÓI")

// let nomeHeroi = prompt("Qual o nome do seu herói: ");
// let xp = prompt("Qual o XP do seu herói: ");

let nomeHeroi = "Son Goku";
let xp = 8001;

if (xp < 1000) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Ferro e tem " + xp + " de XP"); 
} else if ( xp >= 1001 && xp <= 2000 ) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Bronze e tem " + xp + " de XP"); 
} else if ( xp >= 2001 && xp <= 5000 ) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Prata e tem " + xp + " de XP"); 
} else if ( xp >= 5001 && xp <= 7000 ) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Ouro e tem " + xp + " de XP"); 
} else if ( xp >= 7001 && xp <= 8000 ) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Platina e tem " + xp + " de XP"); 
} else if ( xp >= 8001 && xp <= 9000 ) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Ascendente e tem " + xp + " de XP"); 
} else if ( xp >= 9001 && xp <= 10000 ) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Imortal e tem " + xp + " de XP"); 
} else if ( xp >= 10001 ) {
    console.log("O Herói **" + nomeHeroi + "** está no nível de Radiante e tem " + xp + " de XP"); 
} else {
    console.log("Erro!!!"); 
}

