const path = require('path');

module.exports = {
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: ['@emotion/babel-plugin'],
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
};
