module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    // Babel Polyfills
    // https://cli.vuejs.org/guide/browser-compatibility.html
    [
      '@vue/app', {
        useBuiltIns: 'entry',
        // corejs: {
        //   version: 3,
        //   proposals: true,
        // },
      },
    ],
  ],
};
