const express = require('express');
const routes = new express.Router();
const { authClient, authAdmin } = require('./middlewares/AuthAdmin');
const { saveLead, getLeads } = require('./controllers/LeadController');
const {ping} = require('./controllers/ConnectionController');

routes.get('/ping', ping);

routes.post('/lead', authClient, saveLead);
routes.get('/lead', authAdmin, getLeads);

module.exports = routes