const Hub = require('../hubs/hubs-model')

const checkHubId = (req, res, next) => {
  const { id } = req.params
  console.log(`the id is ${id}`)
  next()
}

const logger = (req, res, next) => {
  console.log(`${req.method} request`)
  req.foo = 'web 43 is awesome'
  next()
}

const notFound = (req, res, next) => {
  res.status(404).json({
    message: 'not found, sorry!'
  })
}

const errorHandling = (err, req, res, next) => { // eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
    message: err.message,
  })
}

module.exports = {
  logger,
  notFound,
  errorHandling,
  checkHubId,
}
