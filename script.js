let prato, sobremesa, bebida, pratoNome, bebidaNome, sobremesaNome, pratoPreco, bebidaPreco, sobremesaPreco, nome, endereco;

function selectPratoFrango(cardPrato) {
    if (prato !== cardPrato) {
        if (prato != null) {
            let divCheck = prato.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            prato.classList.remove("selected");
            prato.classList.remove("shadow");

        }
        prato = cardPrato;
        prato.classList.add("selected");
        prato.classList.add("shadow");

    }

    let divCheck = prato.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    pratoNome = "Frango Yin Yang";
    pratoPreco = 14.90;

    checkFinish();
}

function selectPratoPeixe(cardPrato) {
    if (prato !== cardPrato) {
        if (prato != null) {
            let divCheck = prato.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            prato.classList.remove("selected");
            prato.classList.remove("shadow");
        }
        prato = cardPrato;
        prato.classList.add("selected");
        prato.classList.add("shadow");

    }

    let divCheck = prato.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    pratoNome = "Filé de Peixe";
    pratoPreco = 19.90;

    checkFinish();
}

function selectPratoLasanha(cardPrato) {
    if (prato !== cardPrato) {
        if (prato != null) {
            let divCheck = prato.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            prato.classList.remove("selected");
            prato.classList.remove("shadow");

        }
        prato = cardPrato;
        prato.classList.add("selected");
        prato.classList.add("shadow");

    }

    let divCheck = prato.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    pratoNome = "Lasanha";
    pratoPreco = 16.90;

    checkFinish();
}


function selectBebidaCoca(cardBebida) {
    if (bebida !== cardBebida) {
        if (bebida != null) {
            let divCheck = bebida.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            bebida.classList.remove("selected");
            bebida.classList.remove("shadow");

        }
        bebida = cardBebida;
        bebida.classList.add("selected");
        bebida.classList.add("shadow");

    }

    let divCheck = bebida.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';
    bebidaNome = "Coca-Cola";
    bebidaPreco = 6.90;

    checkFinish();
}

function selectBebidaFanta(cardBebida) {
    if (bebida !== cardBebida) {
        if (bebida != null) {
            let divCheck = bebida.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            bebida.classList.remove("selected");
            bebida.classList.remove("shadow");

        }
        bebida = cardBebida;
        bebida.classList.add("selected");
        bebida.classList.add("shadow");

    }

    let divCheck = bebida.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    bebidaNome = "Fanta Laranja";
    bebidaPreco = 5.90;

    checkFinish();
}

function selectBebidaSuco(cardBebida) {
    if (bebida !== cardBebida) {
        if (bebida != null) {
            let divCheck = bebida.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            bebida.classList.remove("selected");
            bebida.classList.remove("shadow");

        }
        bebida = cardBebida;
        bebida.classList.add("selected");
        bebida.classList.add("shadow");
    }

    let divCheck = bebida.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    bebidaNome = "Suco de Melancia";
    bebidaPreco = 8.90;

    checkFinish();
}

function selectSobremesaPudim(cardSobremesa) {
    const element = cardSobremesa;
    if (sobremesa !== cardSobremesa) {
        if (sobremesa != null) {
            let divCheck = sobremesa.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            sobremesa.classList.remove("selected");
            sobremesa.classList.remove("shadow");

        }
        sobremesa = cardSobremesa;
        sobremesa.classList.add("shadow");

        sobremesa.classList.add("selected");
    }

    let divCheck = sobremesa.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    sobremesaNome = "Pudim";
    sobremesaPreco = 7.90;

    checkFinish();
}

function selectSobremesaSorvete(cardSobremesa) {
    const element = cardSobremesa;
    if (sobremesa !== cardSobremesa) {
        if (sobremesa != null) {
            let divCheck = sobremesa.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            sobremesa.classList.remove("selected");
            sobremesa.classList.remove("shadow");

        }
        sobremesa = cardSobremesa;
        sobremesa.classList.add("selected");
        sobremesa.classList.add("shadow");

    }

    let divCheck = sobremesa.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    sobremesaNome = "Sorvete";
    sobremesaPreco = 9.90;

    checkFinish();
}

function selectSobremesaPetit(cardSobremesa) {
    const element = cardSobremesa;
    if (sobremesa !== cardSobremesa) {
        if (sobremesa != null) {
            let divCheck = sobremesa.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            sobremesa.classList.remove("shadow");
            sobremesa.classList.remove("selected");
        }
        sobremesa = cardSobremesa;
        sobremesa.classList.add("selected");
        sobremesa.classList.add("shadow");
    }

    let divCheck = sobremesa.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    sobremesaNome = "Petit Gateau";
    sobremesaPreco = 14.90;

    checkFinish();
}

function checkFinish() {
    const element = document.querySelector(".rodape .botao");
    if (prato != null && bebida != null && sobremesa != null) {
        element.classList.add("selected-button");
        element.innerHTML = "<span>Fechar pedido</span>";
    } else {
        element.classList.remove("selected-button");
        element.innerHTML = "<span>Selecione os 3 itens para fechar o pedido</span>";
    }
}

function finish() {
    solicitarDados();
    if (prato != null && bebida != null && sobremesa != null) {
        let mensagem = createMessage();
        let uri = getUri(mensagem);
        window.open(uri);
        sobremesa.classList.remove("selected");
        prato.classList.remove("selected");
        bebida.classList.remove("selected");

        let pratoDiv = prato.querySelector('div');
        pratoDiv.querySelector('.check img').style.display = 'none';

        let bebidaDiv = bebida.querySelector('div');
        bebidaDiv.querySelector('.check img').style.display = 'none';

        let sobremesDiv = sobremesa.querySelector('div');
        sobremesDiv.querySelector('.check img').style.display = 'none';


        bebida.classList.remove("shadow");
        prato.classList.remove("shadow");
        sobremesa.classList.remove("shadow");

        prato = null;
        bebida = null;
        sobremesa = null;

        checkFinish();
    }
}

function solicitarDados() {
    nome = prompt("Informe seu nome:");
    endereco = prompt("Informe seu endereco:");
}

function createMessage() {
    let nomePrato, nomeSobremesa, nomeBebida, total;
    total = getTotal();
    let mensagem = "Olá, gostaria de fazer o pedido\n" +
        `- Prato: ${pratoNome}\n` +
        `- Bebida: ${bebidaNome}\n` +
        `- Sobremesa: ${sobremesaNome}\n` +
        `Total: R$ ${getTotal().toFixed(2)}\n\n` +
        `Nome: ${nome}\n` +
        `Endereço: ${endereco}\n`;
    return mensagem;
}

function getUri(mensagem) {
    let uri = "https://wa.me/+5538991836830?text=" + encodeURIComponent(mensagem);
    return uri;
}


function getTotal() {
    return pratoPreco + sobremesaPreco + bebidaPreco;
}