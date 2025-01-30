const express = require('express');
const routes = new express.Router();
const { authClient, authAdmin } = require('./middlewares/AuthAdmin');
const { saveLead, getLeads } = require('./controllers/LeadController');
const { saveEnrollment, getEnrollments } = require('./controllers/EnrollmentController')
const {ping} = require('./controllers/ConnectionController');

routes.get('/ping', authClient, ping);

routes.post('/lead', authClient, saveLead);
routes.get('/lead', authAdmin, getLeads);

routes.post('/enrollment', authClient, saveEnrollment);
routes.get('/enrollment', authAdmin, getEnrollments);

module.exports = routes