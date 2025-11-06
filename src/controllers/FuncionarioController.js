const FuncionarioModel = require('../models/FuncionarioModel');
const CargoModel = require('../models/CargoModel');
const DepartamentoModel = require('../models/DepartamentoModel');

const FuncionarioController = {
  async create(req, res) {
    try {
      const { cargo, departamento } = req.body;

      const cargoExists = await CargoModel.findById(cargo);
      const deptoExists = await DepartamentoModel.findById(departamento);

      if (!cargoExists || !deptoExists) {
        return res.status(400).json({ error: 'Cargo ou Departamento inválido' });
      }

      const funcionario = await FuncionarioModel.create(req.body);
      res.status(201).json(funcionario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const funcionarios = await FuncionarioModel.find().populate(['cargo', 'departamento']);
      res.json(funcionarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const funcionario = await FuncionarioModel.findById(req.params.id).populate(['cargo', 'departamento']);
      if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
      res.json(funcionario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const funcionario = await FuncionarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
      res.json(funcionario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const funcionario = await FuncionarioModel.findByIdAndDelete(req.params.id);
      if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
      res.json({ message: 'Funcionário removido com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = FuncionarioController;