'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const customerRouter = require('./routes/customerRoute');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(customerRouter);
app.use(logger);

app.get('/', (req, res) => {
  const mesesage = `This is a success message`;
  res.status(200).send(message);
});

app.get('/person', validator, (req, res) => {
  const person = {name: req.query.name};
  res.status(200).json(person);
})

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log('server running'));
};

module.exports = { start, app };


