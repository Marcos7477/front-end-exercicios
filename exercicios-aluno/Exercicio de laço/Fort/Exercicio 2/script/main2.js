let peso = 0
let pesoTotal = 0;

for (let cont= 1; cont < 11; cont +=1) {
    peso = prompt('insira o peso da pessoa numero' + cont);
    pesoTotal = pesoTotal + Number(peso);
    console.log(pesoTotal);
}

let media = pesoTotal / 10
alert('A media do peso das 10 pessoas é: ' + $(media))