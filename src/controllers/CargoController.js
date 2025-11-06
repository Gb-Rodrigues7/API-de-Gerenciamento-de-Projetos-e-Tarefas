const CargoModel = require('../models/CargoModel');

const CargoController = {
  async create(req, res) {
    try {
      const cargo = await CargoModel.create(req.body);
      res.status(201).json(cargo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const cargos = await CargoModel.find();
      res.json(cargos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const cargo = await CargoModel.findById(req.params.id);
      if (!cargo) return res.status(404).json({ error: 'Cargo não encontrado' });
      res.json(cargo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const cargo = await CargoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!cargo) return res.status(404).json({ error: 'Cargo não encontrado' });
      res.json(cargo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const cargo = await CargoModel.findByIdAndDelete(req.params.id);
      if (!cargo) return res.status(404).json({ error: 'Cargo não encontrado' });
      res.json({ message: 'Cargo removido com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = CargoController;