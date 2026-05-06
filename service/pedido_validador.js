//[R01] O CPF do cliente é obrigatório.
//[R02] O CPF deve ser numérico e possuir 9 algarismos.

function validaCpf(clienteCpf) {
    if(!clienteCpf)
        throw "CPF do cliente é obrigatório";
    if(clienteCpf.trim().length = 9 )
        throw "CPF do cliente deve ter no minimo 9 caracteres";
}


//[R03] O nome do cliente é obrigatório.
//[R04] O nome do cliente deve ter pelo menos 5 caracteres.

function validaNome(clienteNome) {
    if(!clienteNome)
        throw "O nome do cliente é obrigatório";
    if(clienteNome.trim().length < 5)
        throw "Nome do cliente deve ter no minimo 5 caracteres";
}


//[R05] O nome do produto é obrigatório.
//[R06] O nome do produto deve ter pelo menos 5 caracteres.

function validaNomeProduto(produtoNome) {
    if(!produtoNome)
        throw "O nome do produto é obrigatório";
    if(produtoNome.trim().length < 5)
        throw "Nome do produto deve ter no minimo 5 caracteres";
}

//[R07] O preço do produto é obrigatório.
//[R08] O preço do produto deve ser um número positivo.

function validaPrecoProduto(produtoPreco) {
    if(produtoPreco === null || produtoPreco === undefined)
        throw "O preço do produto é obrigatório";
    if(typeof produtoPreco !=="number" || produtoPreco< 0)
        throw "Preço do produto deve ser um número positivo";
}


//[R09] O pedido deve ter preenchido automaticamente o código, a dataHora (atual) e a situação como “aberto”.

function validaPedido(codigo, dataHora, situacao) {
    if(!codigo)
        throw "O código é obrigatório e deve ser preenchido automaticamente";
    if(!dataHora !== new Date())
        throw "A data é obrigatória e deve ser preenchido automaticamente com a data atual";
        validaSituacao(situacao);
}

/*[R01] A listagem deve retornar os pedidos cadastrados de acordo com o seguinte critério de filtragem (opcional):
- situação
[R02] Caso especificada a situação, deve permitir somente os valores “aberto”,  “pago” e “finalizado”*/

function validaSituacao(situacao) {
    const situacoesValidas = ["aberto", "pago", "finalizado"];

    if (!situacao)
        throw "A situação do pedido é obrigatória";

    if (!situacoesValidas.includes(situacao))
        throw "Situação inválida. Use: aberto, pago ou finalizado";
}


//[R01] O código do produto é obrigatório
//[R02] O código do produto deve ser um número

function validaCodigo(codigo) {
    if(codigo == null || codigo === undefined)
        throw "Código do produto é obrigatório";
    if(typeof codigo !== "number")
        throw "Código do produto deve ser um número";
}


/*[R03] A situação do pedido é obrigatória        
[R04] A situação só permite os valores “aberto”,  “pago” e “finalizado”*/

function validaCliente(cliente) {
    if (!cliente)
        throw "Cliente é obrigatório";

    validaCpf(cliente.cpf);
    validaNome(cliente.nome);
}


function validaProduto(produto) {
    if (!produto)
        throw "Produto é obrigatório";

    validaCodigo(produto.codigo);
    validaNomeProduto(produto.nome);
    validaPrecoProduto(produto.preco);
}


module.exports = {
    validaCliente,
    validaProduto,
    validaPedido
}






