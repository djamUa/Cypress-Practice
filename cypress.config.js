
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Додайте будь-які події, якщо потрібно
    },
    baseUrl: "https://qauto.forstudy.space/",  // Замініть на URL вашого застосунку
  },
});
