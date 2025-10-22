const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wq8vyj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalPromptCommand: true
  },
});
