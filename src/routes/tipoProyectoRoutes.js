const express = require("express");
const router = express.Router();
const tipoProyectoController = require("../controllers/tipoProyectoController");

router.post("/", tipoProyectoController.create);
router.get("/", tipoProyectoController.findAll);
router.get("/:id", tipoProyectoController.findById);
router.put("/:id", tipoProyectoController.update);
router.delete("/:id", tipoProyectoController.delete);

module.exports = router;
