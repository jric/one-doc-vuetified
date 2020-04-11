const fs = require('fs')

module.exports = {
    devServer: {
        https: {
          key: fs.readFileSync('./certs/doc.limo+4-key.pem'),
          cert: fs.readFileSync('./certs/doc.limo+4.pem'),
        },
        public: 'https://localhost:8080/'
    }
}
