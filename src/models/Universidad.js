const mongoose = require("mongoose");

const universidadSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  telefono: String,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Universidad", universidadSchema);
