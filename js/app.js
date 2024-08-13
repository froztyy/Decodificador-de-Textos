function encriptador(match) {
    const palavraChaveEncriptador = {
        "a": "ai",
        "e": "enter",
        "i": "imes", 
        "o": "ober",
        "u": "ufat",
    };
    return palavraChaveEncriptador[match];
}

function descriptador(match) {
    const palavraChaveDescriptador = {
        "ai": "a",
        "enter": "e",
        "imes": "i", 
        "ober": "o",
        "ufat": "u",
    };
    return palavraChaveDescriptador[match];
}

function forceRule() {
    var textarea = document.getElementById('input__padrao');
    var value = textarea.value.toLowerCase();
    value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    value = value.replace(/[^a-z\s]/g, '');
    textarea.value = value;
}

function botaoCriptografando() {
    let textoEntrada = document.getElementById('input__padrao').value;

    if (textoEntrada != '') {
        let textoEntradaEncriptado = textoEntrada.replace(/[aeiou]/gi, encriptador);

        document.getElementById('container__saida').innerHTML = textoEntradaEncriptado;

        limparTexto();
        mostrarBotaoCopiar();
    }
}

function botaoDescriptografando() {
    let textoEntrada = document.getElementById('input__padrao').value;

    if(textoEntrada != '') {
        let textoSaidaDescriptado = textoEntrada.replace(/ai|enter|imes|ober|ufat/gi, descriptador);

        document.getElementById('container__saida').innerHTML = textoSaidaDescriptado;

        limparTexto();
    }
}

function limparTexto() {
    textoEntrada = document.querySelector('textarea');
    textoEntrada.value == ' ';
}

function copiarTexto() {
    let copiarTexto = document.getElementById('container__saida').innerHTML;
    navigator.clipboard.writeText(copiarTexto);
}

function mostrarBotaoCopiar() {
    document.getElementById('copiar__texto__btn').style.display = 'block';
}