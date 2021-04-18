function calcularTempoDeUso(){



//Capturar os campos
var txtValor = document.getElementById('txtValor');
var txtTempo =  document.getElementById('txtTempo');
var outTempo = document.getElementById('outTempo');

//Capturar os valores
var valor = txtValor.value;                       
var tempoDeUso = Number(txtTempo.value); 

//Calcular Preço
var valor = valor / 15;
var valorTotal = Math.floor( tempoDeUso * valor );
//var valorTotal = valorTotal / 1000;

//Exibir o resultado
outTempo.textContent = (`Valor a Pagar R$ ${valorTotal.toFixed(2)}`);


}

//Capturar o botão e adicionar o evento click
var btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click',calcularTempoDeUso);
