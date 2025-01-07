require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

const http = require('http').Server(app);
const port = process.env.SERVER_PORT || 3000;

http.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
