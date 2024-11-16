const Universidad = require("../models/universidad");

exports.create = async (req, res) => {
  try {
    const universidad = new Universidad(req.body);
    const newUniversidad = await universidad.save();
    res.status(201).json(newUniversidad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const universidades = await Universidad.find();
    res.status(200).json(universidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const universidad = await Universidad.findById(req.params.id);
    if (!universidad) {
      res.status(404).json({ message: "Universidad no encontrada" });
    }
    res.status(200).json(universidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const universidad = await Universidad.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!universidad) {
      res.status(404).json({ message: "Universidad no encontrada" });
    }
    res.status(200).json(universidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const universidad = await Universidad.findByIdAndDelete(req.params.id);
    if (!universidad) {
      res.status(404).json({ message: "Universidad no encontrada" });
    }
    res.status(200).json({ message: "Universidad eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
