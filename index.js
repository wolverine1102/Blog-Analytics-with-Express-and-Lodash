const express = require('express');
const app = express();
const { router } = require('./src/routes/index');

app.use(router);

app.listen(7050, '0.0.0.0', () => console.log('Listening on port 7050...'));