//importar pacotes para aplicação
const express = require('express');
const cors = require('cors');
const db = require('./db_config');

//definir a porta e instanciar o express
const app = express();

//habilitando o cors e a utilização do json
app.use(cors());
app.use(express.json());

app.get('./users', (req, res) => {
    db.query('SELECT id, name, email, profile_status, profile_role FROM users', (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuários:', err);
            res.status(500).json({ erro: 'Erro ao buscar por usuários no banco de dados.' })
        } else {
            res.json(results);
        }
    });
});

app.post('./users', (req, res) => {
    const { name, email, hash_password, phone } = req.body;
    const sql = 'INSERT INTO users (name, email, hash_password, phone) VALUES(?,?,?,?)';

    db.query(sql, [name, email, hash_password, phone], (err, result) => {
        if (err) {
            console.error('Erro ao inerir usuário:', err);
            res.status(500).json({ erro: 'Erro ao salvar usuário no banco de dados.' });
        } else {
            res.json({
                id: result.inserId,
                name: name,
                email: email,
                phone: phone
            });
        }
    });
});

app.listen(3000, () =>
    console.log('Servidor rodando em http://localhost:3000')
); //testando a api

// app.post('/usuario/cadastrar', (request, reponse) => {
//     let params = Array(
//         request.body.name,
//         request.body.email,
//         request.body.password,
//         request.body.cpf_number
//     );

//     let query = 'INSERT INTO users(name, email, password, cpf_number) VALUES (?, ?, ?, ?)';
//     connection.query(query, params);
// });

// app.post('/usuario/listar', (request, reponse) => {
//     let params = Array(
//         request.body.name,
//         request.body.email,
//         request.body.password,
//         request.body.cpf_number
//     )
// });

// //passar ocamndo e os dados para função query
// connection.query(query, params, (err, results) => {
//     if (results) {
//         response
//             .status(201)
//             .json({
//                 success: true,
//                 message: "Sucess",
//                 data: results
//             })
//     } else {
//         response
//             .status(400)
//             .json({
//                 success: false,
//                 message: "Fail",
//                 data: err
//             })
//     }
// });

// app.get('/usuario/listar', (request, response) => {
//     const query = "SELECT*FROM users";

//     connection.query(query, (err, results) => {
//         if (results) {
//             response
//                 .status(201)
//                 .json({
//                     success: true,
//                     message: "Sucess",
//                     data: results
//                 })
//         } else {
//             response
//                 .status(400)
//                 .json({
//                     success: false,
//                     message: "Fail",
//                     data: err
//                 })
//         }
//     })
// });

// app.post('/usuario/editar/:id', (request, response) => {
//     let params = Array(
//         request.body.name,
//         request.params.id
//     );

//     let query = "UPDATE users SET name = ? WHERE id = ?";

//     connection.query(query, params, (err, results) => {
//         if (results) {
//             response
//                 .status(200)
//                 .json({
//                     succes: true,
//                     message: "Sucess",
//                     data: results
//                 });
//         } else {
//             response
//                 .status(400)
//                 .json({
//                     sucess: false,
//                     message: 'Fail',
//                     data: err
//                 });
//         }
//     })
// });

// app.post('/usuario/deletar/:id', (request, response) => {
//     let params = Array(
//         request.params.id
//     );

//     let query = 'DELETE FROM users WHERE id = ?;';

//     connection.query(query, params, (err, results) => {
//         if (results) {
//             response
//                 .status
//                 .json({
//                     sucess: true,
//                     message: 'Sucess',
//                     data: results
//                 })
//         } else {
//             response
//                 .status
//                 .json({
//                     sucees: false,
//                     message: 'Fail',
//                     data: err
//                 })
//         }
//     })
// });