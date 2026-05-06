let listaPedidos = [];
let autoIncrement = 1;

//US02 – Listagem de pedidos
async function listar() {
    return listaPedidos;
}


//US03 – Consulta de um pedido

async function buscarPedido(codigo) {
    return listaPedidos.find(pedido => pedido.codigo === codigo);
}


//US01 – Inclusão de um novo pedido

async function inserir(pedido) {
    if (
        !pedido ||
        !pedido.clienteCpf ||
        !pedido.clienteNome ||
        !pedido.produtoNome ||
        pedido.produtoPreco === undefined
    ) {
        throw "Dados obrigatórios do pedido não informados";
    }

    pedido.codigo = autoIncrement++;
    pedido.dataHora = new Date();
    pedido.situacao = "aberto";

    listaPedidos.push(pedido);
    return pedido;
}


//US04 –Atualizar a situação de um pedido

async function atualizar(codigo, novaSituacao) {
    const indice = listaPedidos.findIndex(
        pedido => pedido.codigo === codigo
    );

    if (indice < 0) {
        throw "Pedido não encontrado";
    }

    const situacoesValidas = ["aberto", "pago", "finalizado"];
    if (!situacoesValidas.includes(novaSituacao)) {
        throw "Situação inválida";
    }

    listaPedidos[indice].situacao = novaSituacao;
    return listaPedidos[indice];
}


//US05 –Deletar um pedido

async function deletar(codigo) {
    const indice = listaPedidos.findIndex(
        pedido => pedido.codigo === codigo
    );

    if (indice < 0) {
        throw "Pedido não encontrado";
    }

    return listaPedidos.splice(indice, 1)[0];
}


module.exports = {
    listar,
    inserir,
    buscarPedido,
    atualizar,
    deletar,    
}







