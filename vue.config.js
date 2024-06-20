const { defineConfig } = require('@vue/cli-service')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData:`
            @import "@/assets/scss/variables.scss";
            @import "@/assets/scss/global.scss";
            @import "@/assets/scss/mixins.scss";
        ` ,
      },
    },
  },
};
