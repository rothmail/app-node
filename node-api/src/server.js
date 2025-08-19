//importar pacotes para aplicação
const express = require('express');
const cors = require('cors');

//definir a porta e instanciar o express
const port = 3000;
const app = express();

//habilitando o cors e a utilização do json
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Rodando na porta ${port}`)); //testando a api

const connection = require('./db_config');