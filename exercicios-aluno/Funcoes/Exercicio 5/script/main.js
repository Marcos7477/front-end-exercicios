function calculaDesconto(valor, percentualDeDdesconto) {
	let valorDeDesconto = (valor * percentualDeDesconto) / 100;
	let valorFinal = valor - valorDeDesconto;
	return valorFinal
}

console.log(calculaDesconto(2000,20))