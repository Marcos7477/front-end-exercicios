let idade = prompt('insira sua idade');
let renda = prompt('Insira a sua renda');



if ( idade >=18) {
    if (renda >= 3036) {
        console.log('esta apto')

    } else {
        console.log('voce não tem renda');
    }
} else {
    console.log('infelizmente voce nao tem idade')
}
