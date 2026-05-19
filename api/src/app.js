const express = require("express");

const clientesRoutes = require("./routes/clientesRoutes");
const produtosRoutes = require("./routes/produtosRoutes");
const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();

app.use(express.json());

app.use("/clientes", clientesRoutes);
app.use("/produtos", produtosRoutes);
app.use("/usuarios", usuariosRoutes);

module.exports = app;
