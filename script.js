let prato, bebida, sobremesa, nome, endereco;

function selectPrato(cardPrato) {
    if (prato !== cardPrato) {
        if (prato != null) {
            prato.classList.remove("selected");
        }
        prato = cardPrato;
        prato.classList.add("selected");
    }

    console.log(prato.innerHTML);

    checkFinish();
}

function selectBebida(cardBebida) {
    if (bebida !== cardBebida) {
        if (bebida != null) {
            bebida.classList.remove("selected");
        }
        bebida = cardBebida;
        bebida.classList.add("selected");
    }
    checkFinish();
}

function selectSobremesa(cardSobremesa) {
    const element = cardSobremesa;
    if (sobremesa !== cardSobremesa) {
        if (sobremesa != null) {
            sobremesa.classList.remove("selected");
        }
        sobremesa = cardSobremesa;
        sobremesa.classList.add("selected");
    }
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

        alert(mensagem);
        //window.open(uri);
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
        `- Prato: ${prato}\n` +
        `- Bebida: ${bebida}\n` +
        `- Sobremesa: ${sobremesa}\n` +
        `Total: R$ ${total}\n\n` +
        `Nome: ${nome}\n` +
        `Endereço: ${endereco}\n`;
    return mensagem;
}

function getUri(mensagem) {
    let uri = encodeURI("https://wa.me/+5538991836830?text=" + mensagem);
    return uri;
}


function getTotal() {
    let valorPrato, valorSobremesa, valorBebida;
    return valorPrato + valorSobremesa + valorBebida;
}