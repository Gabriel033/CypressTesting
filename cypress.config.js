const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        logMessage (message){
          console.log(message);
          return null;
        },
        calculateSum(a, b){
          return a + b
        }
      })
    },
  },
});
