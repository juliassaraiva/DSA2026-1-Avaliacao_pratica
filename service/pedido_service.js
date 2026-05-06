const pedidoRepository = require('../repository/pedido_repository')
const pedidoValidador = require('./pedido_validador')

/*[R03] A listagem deve exibir todos os pedidos, onde cada pedido deve mostrar:
- codigo
- dataHora
- clienteNome
- produtoNome
- situacao
- valor total (produtoPreco)*/

async function listar() {
    const listaPedidos = await pedidoRepository.listar();
    return listaPedidos.map(pedido => { 
        return {
            codigo: pedido.codigo,
            dataHora: pedido.dataHora,
            clienteNome: pedido.clienteNome,
            produtoNome: pedido.produtoNome,
            situacao: pedido.situacao,
            valorTotal: pedido.produtoPreco
        }
    });
}

/*[R03] A consulta deve exibir as seguintes informações:
- codigo
- dataHora
- clienteRG
- clienteNome
- produtoNome
- situacao
- valor total (produtoPreco)*/

async function buscarPedido() {
    const listaPedidos = await pedidoRepository.buscarPedido();
    return listaPedidos.map(pedido=> { 
        return {
            codigo: pedido.codigo,
            dataHora: pedido.dataHora,
            clienteCpf: pedido.clienteCpf,
            clienteNome: pedido.clienteNome,
            produtoNome: pedido.produtoNome,
            situacao: pedido.situacao,
            valorTotal: pedido.produtoPreco
        }
    });
}

async function inserir(pedido) {
    pedido.validador.validaProduto(produto)
    pedido.validador.validaCliente(cliente)
    return await pedidoRepository.inserir(pedido)
}

module.exports = {
    listar,
    buscarPedido,
    inserir
}