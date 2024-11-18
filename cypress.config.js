const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7n73bs", // For future Cypress Cloud reporter.
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
