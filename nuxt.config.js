// nuxt.config.js

export default {
  // Other Nuxt config options...

  // Modules section
  buildModules: [
    // Add Vuetify module
    "@nuxtjs/vuetify",
  ],

  // Vuetify module configuration
  vuetify: {
    // Vuetify options
    treeShake: true, // Enable tree-shaking to reduce bundle size
  },

  // CSS configuration
  css: [
    // Import Vuetify styles
    "vuetify/dist/vuetify.min.css",
  ],
};
