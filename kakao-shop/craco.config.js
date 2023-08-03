const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: ['@emotion/babel-plugin', 'babel-plugin-istanbul'],
  },
  webpack: {
    plugins: {
      add: [
        new CircularDependencyPlugin({
          // exclude detection of files based on a RegExp
          exclude: /a\.js|node_modules/,
          // include specific files based on a RegExp
          include: /src/,
          // add errors to webpack instead of warnings
          failOnError: false,
          // allow import cycles that include an asyncronous import,
          // e.g. via import(/* webpackMode: "weak" */ './file.js')
          allowAsyncCycles: false,
          // set the current working directory for displaying module paths
          cwd: process.cwd(),
        }),
      ],
    },
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@hocs': path.resolve(__dirname, 'src/hocs'),
    },
  },
};
