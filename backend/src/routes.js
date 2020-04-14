const express = require('express');

const CasosControler = require('./controllers/CasosController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/casos', CasosControler.index);
routes.post('/casos', CasosControler.create);
routes.delete('/casos/:id', CasosControler.delete);
routes.put('/casos/editar/:id', CasosControler.put);

module.exports = routes;