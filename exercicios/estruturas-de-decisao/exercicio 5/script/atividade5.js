let experiencia = prompt('insira a sua experiencia como professor');
let pontuacao = 0;

if ( experiencia < 5) {
    pontuacao = pontuacao + 10; // expressão

} else if ( experiencia >= 5) {
    pontuacao = pontuacao + 20;
}

let formacao = prompt('insira sua formação academica')

if ( formacao == 'graduação') {
    pontuacao += 10;
} else if ( formacao == 'especialisação') {
  pontuacao +=20;
} else if ( formacao == 'mestrado') {
  pontuacao +=30;
} else if ( formacao == 'doutorado') {
    pontuacao +=40;
}

console.log('sua pontuação final é de: ${pontuacao}');
