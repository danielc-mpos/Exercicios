function calcularPrecoVeiculo(){

//Capturar os campos
var txtVeiculo = document.getElementById('txtVeiculo');
var txtPreco =  document.getElementById('txtPreco');
var outVeiculo = document.getElementById('outVeiculo');
var outPreco = document.getElementById('outPreco');
var outDividido = document.getElementById('outDividido');

//Capturar os valores
var veiculo = txtVeiculo.value;                       
var preco = Number(txtPreco.value); 

//Calcular Preço
var valorEntrada = preco / 2;
var valorDividido = valorEntrada / 12;


//Exibir o resultado
outVeiculo.textContent = veiculo;
outPreco.textContent = (`Entrada de R$ ${valorEntrada.toFixed(2)}`);
outDividido.textContent = (`+12x de R$ ${valorDividido.toFixed(2)}`);


}

//Capturar o botão e adicionar o evento click
var btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click',calcularPrecoVeiculo);