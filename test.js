const { generate } = require('./index')

const data = {
  title: 'Simple API',
  version: '1.0.0',
  description: 'A simple API for great things',
  basePath: '/',
  swaggerVersion: '2.0.0'
}

generate(data)