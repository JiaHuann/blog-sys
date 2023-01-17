const { override, addLoader } = require('customize-cra');

module.exports = override(
  addLoader({
    test: /\.md$/,
    use: 'raw-loader'
  })
);