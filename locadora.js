function converterParaHorasEmMinutos(){

    //Capturar os campos
    var txtTitulo = document.getElementById('txtTitulo');
    var txtHoras =  document.getElementById('txtHoras');
    var outTitulo = document.getElementById('outTitulo');
    var outHoras = document.getElementById('outHoras');

    //Capturar os valores
    var titulo = txtTitulo.value;
    var minutosTotais = Number(txtHoras.value); // Horas em minutos

    //Converter para hora(s) e min(s)
    var ducaracoHoras = Math.floor( minutosTotais / 60 );
    var duracaoMinutos = minutosTotais%60;


    //Exibir o resultado
    outTitulo.textContent = titulo;
    outHoras.textContent = `${ducaracoHoras} hora(s) e ${duracaoMinutos} minuto(s)`;



}

//Capturar o botão e adicionar o evento click
var btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click',converterParaHorasEmMinutos);