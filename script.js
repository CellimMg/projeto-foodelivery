let prato, sobremesa, bebida; //aqui ele passa as divs (cards)

function selectPrato(cardPrato) {
    if (prato !== cardPrato) {
        if (prato != null) {
            let divCheck = prato.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            toggleShadowAndSelect(prato);
        }
        prato = cardPrato;
        toggleShadowAndSelect(prato);
    }
    let divCheck = prato.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';

    checkFinish();
}


function selectBebida(cardBebida) {
    if (bebida !== cardBebida) {
        if (bebida != null) {
            let divCheck = bebida.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            toggleShadowAndSelect(bebida);
        }
        bebida = cardBebida;
        toggleShadowAndSelect(bebida);
    }
    let divCheck = bebida.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';
    checkFinish();
}

function selectSobremesa(cardSobremesa) {
    const element = cardSobremesa;
    if (sobremesa !== cardSobremesa) {
        if (sobremesa != null) {
            let divCheck = sobremesa.querySelector('div');
            divCheck.querySelector('.check img').style.display = 'none';
            toggleShadowAndSelect(sobremesa);
        }
        sobremesa = cardSobremesa;
        toggleShadowAndSelect(sobremesa);
    }

    let divCheck = sobremesa.querySelector('div');
    divCheck.querySelector('.check img').style.display = 'block';
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
        let uri = getUri(createMessage());
        window.open(uri);
        cleanCards();
        checkFinish();
    }
}

function solicitarDados() {
    nome = prompt("Informe seu nome:");
    endereco = prompt("Informe seu endereco:");
}

function createMessage() {
    let mensagem = "Olá, gostaria de fazer o pedido\n" +
        `- Prato: ${getNomeProduto("prato")}\n` +
        `- Bebida: ${getNomeProduto("sobremesa")}\n` +
        `- Sobremesa: ${getNomeProduto("bebida")}\n` +
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
    return getPrecoProduto("prato") + getPrecoProduto("sobremesa") + getPrecoProduto("bebida");
}


function getPrecoProduto(produto) {
    switch (produto) {
        case "prato":
            let precoPrato = prato.querySelector('div').querySelector('span').innerText;
            precoPrato = formatPrecoString(precoPrato);
            console.log(precoPrato);
            return parseFloat(precoPrato);
        case "sobremesa":
            let precoSobremesa = sobremesa.querySelector('div').querySelector('span').innerText;
            precoSobremesa = formatPrecoString(precoSobremesa);
            console.log(precoSobremesa);
            return parseFloat(precoSobremesa);
        default:
            let precoBebida = bebida.querySelector('div').querySelector('span').innerText;
            precoBebida = formatPrecoString(precoBebida);
            console.log(precoBebida);
            return parseFloat(precoBebida);
    }
}

function getNomeProduto(produto) {
    switch (produto) {
        case "prato":
            let nomePrato = prato.querySelector('span').innerText;
            return nomePrato;
        case "sobremesa":
            let nomeSobremesa = sobremesa.querySelector('span').innerText;
            return nomeSobremesa;
        default:
            let nomeBebida = bebida.querySelector('span').innerText;
            return nomeBebida;
    }
}

function formatPrecoString(preco) {
    preco = preco.replace("R$ ", "");
    preco = preco.replace(",", ".");
    return preco;
}

function toggleShadowAndSelect(card) {
    card.classList.toggle("selected");
    card.classList.toggle("shadow");
}

function cleanCards() {
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
}