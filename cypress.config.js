const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://qauto.forstudy.space",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: true,
      html: false,
      json: true 
    }
  }
});
