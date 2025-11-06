const express = require('express');
const router = express.Router();


const DepartamentoController = require('./controllers/DepartamentoController');
const CargoController = require('./controllers/CargoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProjetoController = require('./controllers/ProjetoController');
const TarefaController = require('./controllers/TarefaController');


const IDValidator = require('./validators/IDValidator');


// Departamentos
router.post('/departamentos', DepartamentoController.create);
router.get('/departamentos', DepartamentoController.index);
router.get('/departamentos/:id', IDValidator, DepartamentoController.show);
router.put('/departamentos/:id', IDValidator, DepartamentoController.update);
router.delete('/departamentos/:id', IDValidator, DepartamentoController.remove);


// Cargos
router.post('/cargos', CargoController.create);
router.get('/cargos', CargoController.index);
router.get('/cargos/:id', IDValidator, CargoController.show);
router.put('/cargos/:id', IDValidator, CargoController.update);
router.delete('/cargos/:id', IDValidator, CargoController.remove);


// Funcionarios
router.post('/funcionarios', FuncionarioController.create);
router.get('/funcionarios', FuncionarioController.index);
router.get('/funcionarios/:id', IDValidator, FuncionarioController.show);
router.put('/funcionarios/:id', IDValidator, FuncionarioController.update);
router.delete('/funcionarios/:id', IDValidator, FuncionarioController.remove);


// Projetos
router.post('/projetos', ProjetoController.create);
router.get('/projetos', ProjetoController.index);
router.get('/projetos/:id', IDValidator, ProjetoController.show);
router.put('/projetos/:id', IDValidator, ProjetoController.update);
router.delete('/projetos/:id', IDValidator, ProjetoController.remove);


// Tarefas
router.post('/tarefas', TarefaController.create);
router.get('/tarefas', TarefaController.index);
router.get('/tarefas/:id', IDValidator, TarefaController.show);
router.put('/tarefas/:id', IDValidator, TarefaController.update);
router.delete('/tarefas/:id', IDValidator, TarefaController.remove);


module.exports = router;