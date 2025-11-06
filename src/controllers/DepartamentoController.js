const DepartamentoModel = require('../models/DepartamentoModel');

const DepartamentoController = {
  async create(req, res) {
    try {
      const departamento = await DepartamentoModel.create(req.body);
      res.status(201).json(departamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const departamentos = await DepartamentoModel.find();
      res.json(departamentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const departamento = await DepartamentoModel.findById(req.params.id);
      if (!departamento) return res.status(404).json({ error: 'Departamento não encontrado' });
      res.json(departamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const departamento = await DepartamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!departamento) return res.status(404).json({ error: 'Departamento não encontrado' });
      res.json(departamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const departamento = await DepartamentoModel.findByIdAndDelete(req.params.id);
      if (!departamento) return res.status(404).json({ error: 'Departamento não encontrado' });
      res.json({ message: 'Departamento removido com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = DepartamentoController;