let idade = prompt('Insira um numero entre 1 a 800');
let Numerodaidade = Number(idade);

if (Numerodaidade > 800 || Numerodaidade < 1) {
      alert('error. Numero de 1 a 800');
      let idade = prompt('Insira um numero aleatorio 1 a 800');
}

if (Numerodaidade >= 532 && Numerodaidade <= 743) {
    alert('boa')
    console.log('coloque um numero entre 532 e 743');

}

if (Numerodaidade < 532) {
    alert('Numero não esta entre 532 e 743');
    console.log('Nao colocou numero entre 532 e 743');
}
 if (Numerodaidade > 743) {
    alert('nao colocou numero desejavel');
    console.log('não colocou numero entre 532 e 743');
 }
