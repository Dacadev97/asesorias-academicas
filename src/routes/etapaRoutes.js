const express = require("express");
const router = express.Router();
const etapaController = require("../controllers/etapaController");

router.post("/", etapaController.create);
router.get("/", etapaController.findAll);
router.get("/:id", etapaController.findById);
router.put("/:id", etapaController.update);
router.delete("/:id", etapaController.delete);

module.exports = router;
