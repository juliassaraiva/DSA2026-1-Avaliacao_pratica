const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "senacrs",
    database: "crud_produtos"
});

async function conectar() {
    await client.connect();
}

module.exports = {
    client,
    conectar
};