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
  },
  transpileDependencies: ['vuetify'],
};
