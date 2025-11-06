const ProjetoModel = require('../models/ProjetoModel');

const ProjetoController = {
  async create(req, res) {
    try {
      const projeto = await ProjetoModel.create(req.body);
      res.status(201).json(projeto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const projetos = await ProjetoModel.find();
      res.json(projetos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const projeto = await ProjetoModel.findById(req.params.id);
      if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
      res.json(projeto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const projeto = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
      res.json(projeto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const projeto = await ProjetoModel.findByIdAndDelete(req.params.id);
      if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
      res.json({ message: 'Projeto removido com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = ProjetoController;