const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    screenshotsFolder: "cypress/screenshots", // Додано кому тут
    // Для запису відео використовуємо команду npx cypress run -b chrome
  },
});