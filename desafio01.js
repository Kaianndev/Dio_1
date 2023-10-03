
//Desafio de projetos 1
// Aluno Desenvolvedor: Tiago Azevedo

// Variáveis
let cavaleiro = ["Sheena de Cobra", "Seya de Pegasus" , "Shiryu de Dragao" , "Aldebaran de Touro", "Shaka de virgen", "Seya de Sagitario","Hades", "Saori Kido(Atena)"]
let cosmoCavaleiro = [ 1000, 1999, 3950, 5030, 6000, 7500, 9999, 1000000 ]
let ArmaduradoCavaleiro = [" "," "," "," "," "," "," "," "]

// Aplicacao do uso de laços de repetição
for ( let i = 0; i < cavaleiro.length; i++){
    
    let nome = cavaleiro[i]
    let xp = cosmoCavaleiro[i]
    let nivel = ArmaduradoCavaleiro[i] 

    // Aplicando estruturas de decisão
    if (xp < 1000){
        nivel = "Ferro"

    } else if(xp >= 1001 && xp <= 2000) {
        nivel = "Bronze"

    } else if (xp >= 2001 && xp <= 5000){
        nivel = "Prata"

    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro"

    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina"

    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente"

    } else if (xp >= 9001 && xp <= 10000){
        nivel = "Imortal"

    } else if (xp >= 10001){
        nivel = "Radiante"
    }


    // Saída
    console.log(`Seu Cavalheiro e ${nome} usando Armadura de ${nivel} e sua explosao de cosmo tem poder de ${xp}`)
}

