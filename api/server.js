const express = require('express');
const { logger, notFound } = require('./middlewares')
const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.use(logger) // f takes req, res, next --> either call next  or send response to client

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API ${req.foo}</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('*', notFound)

// you just do this here
server.use((err, req, res, next) => { // eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
    message: err.message,
  })
})

module.exports = server;
