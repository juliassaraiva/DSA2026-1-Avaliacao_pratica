//validações

//validação do cpf do cliente
function validarCpf(clienteCpf) {
    //verifica se o cpf do cliente foi informado
    if (!clienteCpf) {
        throw new Error("CPF do cliente é obrigatório");
    }
    //verifica se o cpf informado tem 9 digitos(números)
    if (!/^\d{9}$/.test(clienteCpf)) {
        throw new Error("CPF deve conter 9 dígitos numéricos");
    }
}
//valida nome do cliente
function validarNome(clienteNome) {
    //verifica se o nome do cliente foi informado
    if (!clienteNome) {
        throw new Error("Nome do cliente é obrigatório");
    }
    //remove espaços e verifica se o nome tem pelo menos 5 caracrteres
    if (clienteNome.trim().length < 5) {
        throw new Error("Nome do cliente deve ter no mínimo 5 caracteres");
    }
}

//validação do produto
function validarNomeProduto(produtoNome) {
    //verifica se o nome do produto foi informado
    if (!produtoNome) {
        throw new Error("Nome do produto é obrigatório");
    }
    //remove espaços e verifica se o nome tem pelo menos 5 caracrteres
    if (produtoNome.trim().length < 5) {
        throw new Error("Nome do produto deve ter no mínimo 5 caracteres");
    }
}

//validação do preço
function validarPrecoProduto(produtoPreco) {
    if (produtoPreco === null || produtoPreco === undefined) {
        throw new Error("Preço do produto é obrigatório");
    }

    if (typeof produtoPreco !== "number" || produtoPreco <= 0) {
        throw new Error("Preço deve ser um número positivo");
    }
}

//validação completa do pedido com todas as validações elencadas acima

function validarPedido(pedido) {
    //verifica se o pedido existe
    if (!pedido) {
        throw new Error("Pedido é obrigatório");
    }
    //valida cada campo do pedido, conforme a validação especifica
    validarCpf(pedido.clienteCpf);
    validarNome(pedido.clienteNome);
    validarNomeProduto(pedido.produtoNome);
    validarPrecoProduto(pedido.produtoPreco);
}

//valida a situação do pedido
function validarSituacao(situacao) {
    //lista as situações possíveis/permitidas
    const situacoesValidas = ["aberto", "pago", "finalizado"];
    //verifica se a situação foi informada
    if (!situacao) {
        throw new Error("Situação é obrigatória");
    }
    //verifica se a situação informada é permitida
    if (!situacoesValidas.includes(situacao)) {
        throw new Error("Situação inválida");
    }
}

//valida o código do pedido
function validarCodigo(codigo) {
    //verifica se o código foi informado
    if (codigo === null || codigo === undefined) {
        throw new Error("Código é obrigatório");
    }
    //verifica se o código informado é numérico
    if (isNaN(codigo)) {
        throw new Error("Código deve ser numérico");
    }
}


//Exporta as funções para validação (usadas no service)
module.exports = {
    validarCpf,
    validarNome,
    validarNomeProduto,
    validarPrecoProduto,
    validarPedido,
    validarSituacao,
    validarCodigo
};