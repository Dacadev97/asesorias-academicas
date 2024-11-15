const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cliente", clienteSchema);
