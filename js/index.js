var cost = parseFloat(prompt("Digite o custo de fábrica do veículo"));

if (cost <= 0) {
	document.body.append("Não é possível realizar o custo")
}else {
	perdist = cost * 1.28
	perimp = cost * 1.45
	totalcost = perdist + perimp
	document.body.append("O valor total do custo de carro para o consumidor é de R$ " + totalcost.toLocaleString());
}
