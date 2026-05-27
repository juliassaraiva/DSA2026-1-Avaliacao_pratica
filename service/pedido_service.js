
// Importa o repository (onde os dados são salvos - nesse caso, em memória)
const pedidoRepository = require("../repository/pedido_repository_memoria");
// Importa o validador (onde ficam as regras de validação)
const pedidoValidador = require("./pedido_validador");

// Listar
async function listar(situacao) {
    //valida se foi informado o filtro válido de situação
    if (situacao) {
        pedidoValidador.validarSituacao(situacao);
    }
    //pede para o repository buscar os pedidos com o filtro opcional de situação
    const listaPedidos = await pedidoRepository.listar(situacao);
    //formatação do retorno com os campos que vamos exibir
    return listaPedidos.map(pedido => ({
        codigo: pedido.codigo,
        dataHora: pedido.dataHora,
        clienteNome: pedido.clienteNome,
        produtoNome: pedido.produtoNome,
        situacao: pedido.situacao,
        valorTotal: pedido.produtoPreco
    }));
}

// Buscar por ID
async function buscarPorId(codigo) {
    //pede para o repository buscar os pedidos por código
    const pedido = await pedidoRepository.buscarPorId(codigo);
    //se não encontrar, retorna null 
    if (!pedido) {
        return null;
    }
    //se tudo certo, exibe a resposta com as informações complettas
    return {
        codigo: pedido.codigo,
        dataHora: pedido.dataHora,
        clienteCpf: pedido.clienteCpf,
        clienteNome: pedido.clienteNome,
        produtoNome: pedido.produtoNome,
        situacao: pedido.situacao,
        valorTotal: pedido.produtoPreco
    };
}

// Inserir
async function inserir(pedido) {
    //antes de salvar, valida as informações do pedido
    pedidoValidador.validarPedido(pedido);
    //se ok na validação, salva/insere no repository
    return await pedidoRepository.inserir(pedido);
}

// Atualizar
async function atualizar(codigo, situacao) {
    //valida se o código é valido
    pedidoValidador.validarCodigo(codigo);
    //valida se a situação é valida (uma das determinadas: aberto, pago ou finalizado)
    pedidoValidador.validarSituacao(situacao);
    //se tudo ok, atualiza o repository
    return await pedidoRepository.atualizar(codigo, situacao);
}

// Deletar
async function deletar(codigo) {
    //valida se o código é valido
    pedidoValidador.validarCodigo(codigo);
    //se tudo ok, deleta o pedido com o código informado
    return await pedidoRepository.deletar(codigo);
}


// Exporta todas as funções para serem usadas no app.js
module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
};
