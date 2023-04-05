const express = require('express');

const config = require('../config');
const user = require('./components/user/network');

const app = express();

app.listen(config.api.port, () => {
  console.log('Corriendo en el puerto...', config.api.port);
});

app.use('/api/users', user);