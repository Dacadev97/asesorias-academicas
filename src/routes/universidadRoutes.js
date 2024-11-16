const express = require("express");
const router = express.Router();
const universidadController = require("../controllers/universidadController");

router.post("/", universidadController.create);
router.get("/", universidadController.findAll);
router.get("/:id", universidadController.findById);
router.put("/:id", universidadController.update);
router.delete("/:id", universidadController.delete);

module.exports = router;
