let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12] // Domingo, Segunda...
let diasDaSemana = ['Domingo', 
    'Segunda-Feira', 
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-feira',
    'Sexta-Feira',
    'Sabado'
]
// Determinar se o uso do dia é verde, amarelo ou vermelhO
const indicadorDeUso = (numeroDeHoras) => {
if ( numeroDeHoras <= 1) {
    return '🟢';
} else if (numeroDeHoras <= 3) {
    return '🟡';
} else {
    return '🔴';
}
}

//console.log( 'Domingo:' + indicadorDeUso(usoDiasDaSemana[0]));
//console.log( 'Segunda-Feira:' + indicadorDeUso(usoDiasDaSemana[1]));
//console.log( 'Terça-Feira:' + indicadorDeUso(usoDiasDaSemana[2]));
//console.log( 'Quarta-Feira:' + indicadorDeUso(usoDiasDaSemana[3]));
//console.log( 'Quinta-feira:' + indicadorDeUso(usoDiasDaSemana[4]));
//console.log( 'Sexta-Feira;' + indicadorDeUso(usoDiasDaSemana[5]));
//console.log( 'Sabado:' + indicadorDeUso(usoDiasDaSemana[6]));

for(let contador = 0; contador <= 6 ; contador++) {
    let Farol = indicadorDeUso(usoDiasdaSemana [contador]); 
    let dia = diasDaSemana[contador];
    let horas = usoDiasDaSemana[contador];

    console.log('${Farol} 📅 ${dia} | ${ horas} horas de uso');
}

//console.log(typeof usoDiasDaSemana); //
//console.log(typeof usoDiasDaSemana[0]); // number
//console.log(typeof indicadorDeUso); // function
