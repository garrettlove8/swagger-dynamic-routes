/*
  TODO: To-do list:
  x1. generate json
  x2. take in data
  4. figure out the structure of how we need the data to look
  5. Loop through data and create Swagger json according to the swagger spec
*/

/*
  - Array of options for each parameter in the route
  - Object for each route combo with properties
      - crud: [c, r, u, d]
      - request (corresponding to array indexes of crud prop)
      - response (corresponding to array indexes of crud prop)
*/

const fs = require('fs')

/*
destination = './'

data: {
  
}
*/
exports.generate = (data, destination = './') => {
  let fileData = {
    ...setup(data)
  }

  fs.writeFileSync(`${destination}swagger.json`, JSON.stringify(fileData), () => {
    console.log('Done')
  })
}

/*
  data: {
    "info": {
      "title": "CRUD API",
      "version": "1.0.0",
      "description": "\n      Usage documentation for the CRUD API. For a deeper understanding of how this API works\n      please see the respective confluence"
    },
    "basePath": "/",
    "swagger": "2.0",
  }
*/
const setup = ({
  title = 'Simple API',
  version = '1.0.0',
  description = 'A simple API for great things',
  basePath,
  swaggerVersion
}) => {
  return {
    info: { title, version, description},
    basePath: basePath,
    swagger: swaggerVersion
  }
}