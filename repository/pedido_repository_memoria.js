//Banco em memória(array), onde os pedidos ficam enquando o sistema roda
let listaPedidos = [];
//incremento automatico de 1, começando em 1
let autoIncrement = 1;

// Listar
async function listar(situacao) {
    //usuário informa o filtro situacao
    if (situacao) {
        //filtra a lista de pedidos e retorna pedidos da situação informada
        return listaPedidos.filter(p => p.situacao === situacao);
    }
    //se não tiver filtro, retorna todos os pedidos
    return listaPedidos;
}

// Buscar por ID
async function buscarPorId(codigo) {
    //prodcura dentro do array o pedido com o código informado
    return listaPedidos.find(
        pedido => pedido.codigo === Number(codigo)
    );
}

// Inserir
async function inserir(pedido) {
    //define o código automaticamente com o incremento
    pedido.codigo = autoIncrement++;
    //define data e hora atual
    pedido.dataHora = new Date();
    //define a situação inicial sempre como 'aberto'
    pedido.situacao = "aberto";
    //adiciona o pedido no array
    listaPedidos.push(pedido);
    //retorna o pedido criado
    return pedido;
}

// Atualizar situação
async function atualizar(codigo, novaSituacao) {
    //busca o pedido pelo filtro do código
    const pedido = await buscarPorId(codigo);
    //se não encontra o pedido, dá mensagem de erro
    if (!pedido) {
        throw new Error("Pedido não encontrado");
    }
    //se encontra, atualiza o pedido com os parametros informados inicialmente
    pedido.situacao = novaSituacao;
    //retorna o pedido atualizado
    return pedido;
}

// Deletar
async function deletar(codigo) {
    //procura por indice(posição) do pedido no array
    const indice = listaPedidos.findIndex(
        pedido => pedido.codigo === Number(codigo)
    );
    //se não encontra o pedido, dá mensagem de erro
    if (indice < 0) {
        throw new Error("Pedido não encontrado");
    }
    //se encontra, remove o pedido, usando o indice informado
    listaPedidos.splice(indice, 1);
}

//exporta as funções usadas em outros arquivos da API
module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
};