const { defineConfig } = require('cypress');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');

module.exports = defineConfig({
  env: {
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow",
    },
  },
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 20000, 

  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config);
      return config;
    },
  },
});
