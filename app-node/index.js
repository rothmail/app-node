const express = require('express');
const app = express();

const port = 3000;
app.use(express.json());

app.get('/get', (request, response) => {
    response.send('Rota get')
})

app.post('/post', (request, response) => {
    const name = request.body.name;
    response.send(`Meu nome é ${name}`);
})

app.put('/put', (request, response) => {
    const id = request.params.id;
    response.send(`Meu id é ${id}`);
})

app.delete('/delete/:id', (request, response) => {
    const id = resquest.params.id;
    response.send(`Meu id é ${id}`);
})

app.listen(port, () => console.log(`Rodando na porta ${port}`));