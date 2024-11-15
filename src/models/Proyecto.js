const mongoose = require("mongoose");

const proyectoSchema = new mongoose.Schema({
  numero: String,
  titulo: String,
  fechaInicio: Date,
  fechaEntrega: Date,
  valor: Number,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  tipoProyecto: { type: mongoose.Schema.Types.ObjectId, ref: "TipoProyecto" },
  universidad: { type: mongoose.Schema.Types.ObjectId, ref: "Universidad" },
  etapa: { type: mongoose.Schema.Types.ObjectId, ref: "Etapa" },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Proyecto", proyectoSchema);
