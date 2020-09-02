# Overview
When building out an API you will likely have routes that are dynamic in one form or another. For example, `table/:table/method/:method`. This may cause an issue when trying to write documentation with Swagger because of the degree to which you'd be repeating yourself. Swagger Dynamic Routes aims to help with that by allowing you to write a simplified definition and have the required JSON auto generated.

# Installation
```
npm install swagger-dynamic-routes
```

# Usage

## Generator
```
// index.js

const { generate } = require('./index')
const data = { name: "Garrett" }

generate(data)
```

```
// yourFile.json

{
  name: "Garrett"
}
```

## CLI Approach