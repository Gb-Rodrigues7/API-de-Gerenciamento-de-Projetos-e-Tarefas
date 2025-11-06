const TarefaModel = require('../models/TarefaModel');
const FuncionarioModel = require('../models/FuncionarioModel');
const ProjetoModel = require('../models/ProjetoModel');

const TarefaController = {
  async create(req, res) {
    try {
      const { responsavel, projeto } = req.body;

      const funcionario = await FuncionarioModel.findById(responsavel);
      const projetoExistente = await ProjetoModel.findById(projeto);

      if (!funcionario || !projetoExistente) {
        return res.status(400).json({ error: 'Responsável ou Projeto inválido' });
      }

      const tarefa = await TarefaModel.create(req.body);
      res.status(201).json(tarefa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const tarefas = await TarefaModel.find().populate(['responsavel', 'projeto']);
      res.json(tarefas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const tarefa = await TarefaModel.findById(req.params.id).populate(['responsavel', 'projeto']);
      if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const tarefa = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const tarefa = await TarefaModel.findByIdAndDelete(req.params.id);
      if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json({ message: 'Tarefa removida com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = TarefaController;