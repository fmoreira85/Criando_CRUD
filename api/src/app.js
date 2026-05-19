const express = require("express");

const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();

app.use(express.json());

app.use("/usuarios", usuariosRoutes);


module.exports = app;