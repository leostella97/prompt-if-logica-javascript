// estrutura de decisão switch/case

let frutas = ["banana", "maça", "uva", "morango"]
let bemVindo = "Seja bem vindo!\nVeja abaixo as frutas no array"
let aFrutaEh = "A fruta é: "

console.log(bemVindo)

// laço for para percorrer no array para poder mostrar
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]; // acessa a fruta atual no array armazenando na variável fruta para mostrar no switch


switch (fruta) {
    case "banana":
        console.log(aFrutaEh + "banana")
        break;
    case "maça":
        console.log(aFrutaEh + "maça")
        break;
    case "uva":
        console.log(aFrutaEh + "uva")
        break;
    case "morango":
        console.log(aFrutaEh + "morango")
        break;
    default: // algum outro que não esteja listado
        console.log("Outra fruta")
    }
}