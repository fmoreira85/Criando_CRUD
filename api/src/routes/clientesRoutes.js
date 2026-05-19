const express = require("express");

const clientesController = require("../controllers/clientesController");

const router = express.Router();

router.get("/", clientesController.listar);
router.get("/:id", clientesController.buscarPorId);
router.post("/", clientesController.criar);
router.put("/:id", clientesController.atualizar);
router.delete("/:id", clientesController.deletar);

module.exports = router;
