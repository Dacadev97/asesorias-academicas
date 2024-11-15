const TipoProyecto = require("../models/TipoProyecto");

exports.create = async (req, res) => {
  try {
    const tipoProyecto = new TipoProyecto(req.body);
    const newTipoProyecto = await tipoProyecto.save();
    res.status(201).json(newTipoProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const tipoProyectos = await TipoProyecto.find();
    res.status(200).json(tipoProyectos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const tipoProyecto = await TipoProyecto.findById(req.params.id);
    if (!tipoProyecto) {
      res.status(404).json({ message: "Tipo de proyecto no encontrado" });
    }
    res.status(200).json(tipoProyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const tipoProyecto = await TipoProyecto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tipoProyecto) {
      res.status(404).json({ message: "Tipo de proyecto no encontrado" });
    }
    res.status(200).json(tipoProyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const tipoProyecto = await TipoProyecto.findByIdAndDelete(req.params.id);
    if (!tipoProyecto) {
      res.status(404).json({ message: "Tipo de proyecto no encontrado" });
    }
    res.status(200).json({ message: "Tipo de proyecto eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
