
// Importa o framework Express (serve para criar APIs)
const express = require ("express")
// Importa a camada de serviço (onde fica a regra de negócio)
const pedidoService = require("./service/pedido_service")
// Cria a aplicação
const app = express();

// Permite que a API receba dados em JSON no body das requisições
app.use(express.json()); 

// ROTA DE TESTE (mantida para saber se a API está funcionando)
app.get("/hello", (req, res) => {
    res.send("Hello World");
})


// Rota inicial - para confirmar se a API está funcionando
app.get("/", (req, res) => {
    res.send("API de Pedidos funcionando");
});


// US02 – Listar pedidos (com filtro opcional)
app.get("/pedidos", async (req, res) => {
    try {
        //aqui usa o filtro opcional de situação
        const situacao = req.query.situacao;
        //chama o service usando o filtro para buscar dados
        const lista = await pedidoService.listar(situacao);
        res.json(lista);
        //se erro
    } catch (err) {

res.status(400).json({
    erro: true,
    mensagem: err.message
});
    }
});

//US03 – Buscar por ID
app.get("/pedidos/:codigo", async (req, res) => {
    try {
        //pega o código da url para saber a qual pedido se refere
        const codigo = req.params.codigo;
        //chama o service usando o filtro de código
        const pedido = await pedidoService.buscarPorId(codigo);
        //se não encontrar pedido
        if (!pedido) {
            return res.status(404).json({ erro: "Pedido não encontrado" });
        }
        
        res.json(pedido);
        //se erro
    } catch (err) {
        res.status(400).json({ erro: err.message || "Erro interno" });
    }
});

// US01 – Criar pedido
app.post("/pedidos", async (req, res) => {
    try {
        //pega os dados enviados no body para criar o pedido
        const pedido = req.body;
        //chama o service com os dados do body para criar o pedido
        const novoPedido = await pedidoService.inserir(pedido);
        //se tuido certo, cria o novo pedido
        res.status(201).json(novoPedido);
        //se erro
    } catch (err) {

res.status(400).json({
    erro: true,
    mensagem: err.message
});
    }
});

// US04 – Atualizar situação
app.patch("/pedidos/:codigo", async (req, res) => {
    try {
        //pega o código da url para saber a qual pedido se refere
        const codigo = req.params.codigo;
        //pega a situação enviada no body para atualizar o pedido
        const situacao = req.body.situacao;
        //chama o service para atualizar o pedido
        const pedido = await pedidoService.atualizar(codigo, situacao);
        res.json(pedido);
        //se erro
    } catch (err) {

res.status(400).json({
    erro: true,
    mensagem: err.message
});
    }
});

//US05 – Deletar pedido
app.delete("/pedidos/:codigo", async (req, res) => {
    try {
        //pega o código da url para saber a qual pedido se refere
        const codigo = req.params.codigo;
        //chama o service para deletar o pedido filtrando pelo código
        await pedidoService.deletar(codigo);
        //se der certo, deleta e apresenta status 204 sem conteúdo
        res.status(204).send();
        //se erro
    } catch (err) {

res.status(400).json({
    erro: true,
    mensagem: err.message
});
    }
});

//conexão com o banco de dados!

/*const { conectar } = require("./repository/db");

conectar()
    .then(() => console.log("Conectado ao banco"))
    .catch(err => console.error("Erro ao conectar:", err));*/


//inicia o servidor
app.listen(3000, () => {
    //mostra no terminal que a apo esta rodando, vide mensagem de log
    console.log("Servidor está rodando na porta 3000: http://localhost:3000");
})

module.exports = app;


