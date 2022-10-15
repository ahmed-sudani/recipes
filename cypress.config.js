const { defineConfig } = require('cypress')
const mongo = require('cypress-mongodb')

module.exports = defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb://localhost:27017/',
      database: 'test',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      mongo.configurePlugin(on)
    },
  },
})
