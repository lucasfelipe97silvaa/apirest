const express = require('express'); // metedo para que possa trabalha com rotas 

const SessionController = require('./controllers/SessionController')
const DashboardController = require('./controllers/DashboardController')
const SpotController = require('./controllers/SpotController')

const routes = express.Router();

//     exemplo de uma rota 
// routes.get('/users', (req, res) => {  
//     return res.json({messagem : 'ola lucas'})
//     })

routes.post('/session', SessionController.store);
routes.get('/session', SessionController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots', SpotController.store);



module.exports = routes;