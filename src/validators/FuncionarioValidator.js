const yup = require('yup');
const mongoose = require('mongoose');


const objectIdValidation = (message) =>
yup.string().test('is-objectid', message, (value) => mongoose.Types.ObjectId.isValid(value));


const enderecoSchema = yup.object({
cep: yup.string(),
logradouro: yup.string(),
numero: yup.string(),
complemento: yup.string(),
bairro: yup.string(),
cidade: yup.string(),
uf: yup.string().length(2, 'UF deve ter 2 caracteres'),
});


const createSchema = yup.object({
nome: yup.string().required('Nome é obrigatório'),
cpf: yup.string().required('CPF é obrigatório'),
email: yup.string().email('Formato de email inválido').required('Email é obrigatório'),
telefone: yup.string().required('Telefone é obrigatório'),
data_contratacao: yup.date().required('Data de contratação é obrigatória'),
data_nascimento: yup.date().required('Data de nascimento é obrigatória'),
genero: yup.string().required('Gênero é obrigatório'),
endereco: enderecoSchema.optional(),
cargo: objectIdValidation('ID de cargo inválido').required('Cargo é obrigatório'),
departamento: objectIdValidation('ID de departamento inválido').required('Departamento é obrigatório'),
});


const updateSchema = yup.object({
nome: yup.string(),
cpf: yup.string(),
email: yup.string().email('Formato de email inválido'),
telefone: yup.string(),
data_contratacao: yup.date(),
data_nascimento: yup.date(),
genero: yup.string(),
endereco: enderecoSchema.optional(),
cargo: objectIdValidation('ID de cargo inválido'),
departamento: objectIdValidation('ID de departamento inválido'),
});


module.exports = { createSchema, updateSchema };