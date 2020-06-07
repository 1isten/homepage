module.exports = {
  pages: {
    'index': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Sten Li',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    '404': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: '404.html',
      title: 'Sten Li',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  pwa: {
    name: 'Sten Li',
    themeColor: '#ffffff',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',

    assetsVersion: Date.now(),

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW', // (default), create a new service worker file for each rebuild
    // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW#GenerateSW
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
  transpileDependencies: ['vuetify'],
};
