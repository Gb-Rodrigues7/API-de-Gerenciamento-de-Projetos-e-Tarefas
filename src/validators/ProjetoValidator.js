const yup = require('yup');


const createSchema = yup.object({
nome: yup.string().required('Nome é obrigatório'),
descricao: yup.string().required('Descrição é obrigatória'),
data_inicio: yup.date().required('Data de início é obrigatória'),
data_fim: yup
.date()
.required('Data de fim é obrigatória')
.min(yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
});


const updateSchema = yup.object({
nome: yup.string(),
descricao: yup.string(),
data_inicio: yup.date(),
data_fim: yup.date().min(yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
});


module.exports = { createSchema, updateSchema };