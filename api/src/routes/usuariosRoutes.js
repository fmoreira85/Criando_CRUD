const express = require("express");

const usuariosController = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", usuariosController.listar);
router.get("/:id", usuariosController.buscarPorId);
router.post("/", usuariosController.criar);
router.put("/:id", usuariosController.atualizar);
router.delete("/:id", usuariosController.deletar);

module.exports = router;
