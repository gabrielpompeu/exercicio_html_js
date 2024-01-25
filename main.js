function validarFormulario() {
    var valorCampoA = document.getElementById('campoA').value;
    var valorCampoB = document.getElementById('campoB').value;

    var numeroCampoA = parseFloat(valorCampoA);
    var numeroCampoB = parseFloat(valorCampoB);

    if (numeroCampoB > numeroCampoA) {
        document.getElementById('mensagem').innerHTML = 'Formulário válido!';
    } else {
        document.getElementById('mensagem').innerHTML = 'Formulário inválido. Certifique-se de que B é maior que A.';
    }
}
