let Heroi = {
    nome: "Victor",
    nivel: "",
    experience: 6001
}


if (Heroi.experience <= 1000) {
    Heroi.nivel = "Ferro"
}

else if (Heroi.experience> 1000 && Heroi.experience <= 2000){
    Heroi.nivel = "Bronze"
}

else if (Heroi.experience > 2000 && Heroi.experience <= 5000){
    Heroi.nivel = "Prata"
}

else if (Heroi.experience > 5000 && Heroi.experience<= 6000){
    Heroi.nivel = "Ouro"
}

else if (Heroi.experience > 6000 && Heroi.experience <= 7000){
    Heroi.nivel = "Platina"
}

else if (Heroi.experience > 7000 && Heroi.experience <= 8000){
    Heroi.nivel = "Diamante"
}

else if (Heroi.experience > 8000 && Heroi.experience <= 9000){
    Heroi.nivel = "Ascendente"
}

else if (Heroi.experience > 9000 && Heroi.experience <= 10000){
    Heroi.nivel = "Imortal"
}

else {
    Heroi.nivel = "Radiante"
}

console.log(`O Herói de nome ${Heroi.nome} está no nível de ${Heroi.nivel}`)