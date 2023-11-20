const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.nfse.gov.br/EmissorNacional/',
    viewportHeight: 900,
    viewportWidth: 1440,
  },
});
