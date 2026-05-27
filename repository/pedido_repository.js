//com conexão com o banco de dados

const { client } = require("./db");

// US02 – Listar pedidos
async function listar() {
    const result = await client.query("SELECT * FROM produtos");
    return result.rows;
}

// US03 – Buscar por ID
async function buscarPorId(codigo) {
    const sql = "SELECT * FROM produtos WHERE id = $1";
    const result = await client.query(sql, [codigo]);

    return result.rows[0];
}

// US01 – Inserir pedido
async function inserir(pedido) {
    const sql = `
        INSERT INTO produtos (nome, categoria, preco)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

    const valores = [
        pedido.produtoNome,   // nome
        pedido.clienteNome,   // categoria (adaptado)
        pedido.produtoPreco   // preco
    ];

    const result = await client.query(sql, valores);

    return result.rows[0];
}

// US04 – Atualizar (aqui estamos atualizando o preço)
async function atualizar(codigo, novoPreco) {
    const sql = `
        UPDATE produtos
        SET preco = $1
        WHERE id = $2
        RETURNING *;
    `;

    const result = await client.query(sql, [novoPreco, codigo]);

    return result.rows[0];
}

// US05 – Deletar
async function deletar(codigo) {
    const sql = "DELETE FROM produtos WHERE id = $1";
    await client.query(sql, [codigo]);
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
};
``