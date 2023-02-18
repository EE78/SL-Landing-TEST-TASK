const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./scripts/showMap.js', './scripts/showList.js', './scripts/showFooterImage.js'],
    output: {
        path: path.resolve(__dirname, 'webpack_bundle'),
        filename: 'mainScript.js'
      }
}