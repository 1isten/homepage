const assetsVersion = new Date().getTime();

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
    themeColor: '#fafafa',
    msTileColor: '#fafafa',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    assetsVersion,
  },
};