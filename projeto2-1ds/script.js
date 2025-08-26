let idade = parseInt(prompt("quantos anos voce tem? "))
let ingresso = prompt("voce tem ingressos? [S/N]").toLocaleLowerCase() // true

if (ingresso === "s") { // 21, s
    ingresso = true
    if (idade >= 18 && ingresso == true) {
      alert("voce pode entra!")   
    }else {
        alert("voce nao pode entrar...")
    }
} else if (ingresso === "n") { 
    ingresso = false
} else {
    alert("voce digitou algo errado. Fim do programa.")
}





