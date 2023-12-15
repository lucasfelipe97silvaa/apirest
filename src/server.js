const express = require('express'); // criação a coneção
const mongoose = require('mongoose'); // intermediario para conecção  do servidor com o mongoDB

const app = express(); // intanciando o metodo Express para app 
const routes = require('./routes');

// newUrlParser: true,
// FindandModify: false,
// userUnifiedTopology: true, 
// useCreateIndex: true // criação de um index
mongoose.connect('mongodb+srv://lucasfelipe97silva:Lola2015@uc9apirest.e8zel1t.mongodb.net/?retryWrites=true&w=majority', {
})
app.use(express.json())

app.use(routes)
app.listen(3333);


// requisições 
// GET, POST, PUT, DELETE 

// query params = Acessa query params (para filtros) => parametros da URL.
// app.get('/users', (req, res) => {
//     return res.json({idade: req.query.idade})
// })


// route params = req.params, são usados para (edição e delete)

// app.put('/users/:id', (req, res) => {
// return res.json({id: req.params.id})
// })


// req.body = acessar o corpo da requisição = utilizando => app.use(express.json())

// app.post('/users', (req, res) => {
//     return res.json(req.body)
//     })
