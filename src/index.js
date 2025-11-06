require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
app.use(express.json());


app.use('/api', routes);


const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT = 3000 } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('MongoDB conectado');
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
})
.catch(err => {
console.error('Erro ao conectar com o MongoDB', err.message);
process.exit(1);
});