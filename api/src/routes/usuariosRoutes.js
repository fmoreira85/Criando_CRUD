const express = require("express");

const usuariosController = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", usuariosController.listar );

router.post("/", usuariosController.criar);

router.put("/:id", usuariosController.atualizar);

router.delete("/:id", usuariosController.deletar);

module.exports = router;