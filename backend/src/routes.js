const  express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.list);
routes.delete('/incidents/:id', IncidentsController.destroy);

routes.get('/profile', ProfileController.list);

module.exports = routes;