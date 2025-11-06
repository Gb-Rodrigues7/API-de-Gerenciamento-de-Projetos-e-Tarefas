const yup = require('yup');
const mongoose = require('mongoose');


const objectIdValidation = (message) =>
yup.string().test('is-objectid', message, (value) => mongoose.Types.ObjectId.isValid(value));


const createSchema = yup.object({
titulo: yup.string().required('Título é obrigatório'),
descricao: yup.string().required('Descrição é obrigatória'),
data_inicio: yup.date().required('Data de início é obrigatória'),
data_fim: yup
.date()
.required('Data de fim é obrigatória')
.min(yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
responsavel: objectIdValidation('ID de funcionário inválido').required('Responsável é obrigatório'),
projeto: objectIdValidation('ID de projeto inválido').required('Projeto é obrigatório'),
});


const updateSchema = yup.object({
titulo: yup.string(),
descricao: yup.string(),
data_inicio: yup.date(),
data_fim: yup.date().min(yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
responsavel: objectIdValidation('ID de funcionário inválido'),
projeto: objectIdValidation('ID de projeto inválido'),
});


module.exports = { createSchema, updateSchema };