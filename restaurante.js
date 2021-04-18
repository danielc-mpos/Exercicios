function calcularPrecoDaConta(){



//Capturar os campos
var txtPreco = document.getElementById('txtPreco');
var txtQuantidade =  document.getElementById('txtQuantidade');
var outQuantidade = document.getElementById('outQuantidade');

//Capturar os valores
var preco = txtPreco.value;                       // Valor do Quilo
var consumoTotal = Number(txtQuantidade.value);   // Consumo do Cliente (gr)

//Calcular Preço
var precoBuffet = Math.floor( consumoTotal * preco );
var precoBuffet = precoBuffet / 1000;

//Exibir o resultado
outQuantidade.textContent = (`Valor a Pagar R$ ${precoBuffet.toFixed(2)}`);


}

//Capturar o botão e adicionar o evento click
var btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click',calcularPrecoDaConta);