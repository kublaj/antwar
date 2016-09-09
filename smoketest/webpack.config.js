const path = require('path');

module.exports = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [
            path.join(__dirname, 'layouts'),
            path.join(__dirname, 'pages')
          ]
        }
      ]
    }
  };
};
