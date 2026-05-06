const express = require ("express")
const pedidoService = require("./service/pedido_service")

const app = express();
app.use(express.json()) // for parsing application/json



app.get("/hello", (req, res) => {
    res.send("Hello World");
})


app.get("/api/pedidos", async (req, res) =>{
    const listaPedidos = await pedidoService.listar();
    res.json(listaPedidos);
})


app.get("/api/pedidos/:codigo", async (req, res) => {
    try {
        const codigo = Number(req.params.codigo);
        const pedido = await pedidoService.buscarPedido(codigo);

        if (!pedido) {
            return res.status(404).json({ erro: "Pedido não encontrado" });
        }

        res.json(pedido);
    } catch (err) {
        res.status(400).json({ erro: err });
    }
});

app.post("/api/pedidos", async (req, res) =>{
    const pedido = req.body;
    try{
        const pedidoInserido = await pedidoService.inserir(pedido);
        res.status(201).json(pedidoInserido);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }   
})


app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})




