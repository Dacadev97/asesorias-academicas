const Etapa = require("../models/Etapa");

exports.create = async (req, res) => {
  try {
    const etapa = new Etapa(req.body);
    const newEtapa = await etapa.save();
    res.status(201).json(newEtapa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const etapas = await Etapa.find();
    res.status(200).json(etapas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const etapa = await Etapa.findById(req.params.id);
    if (!etapa) {
      res.status(404).json({ message: "Etapa no encontrada" });
    }
    res.status(200).json(etapa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const etapa = await Etapa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!etapa) {
      res.status(404).json({ message: "Etapa no encontrada" });
    }
    res.status(200).json(etapa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const etapa = await Etapa.findByIdAndDelete(req.params.id);
    if (!etapa) {
      res.status(404).json({ message: "Etapa no encontrada" });
    }
    res.status(200).json({ message: "Etapa eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
