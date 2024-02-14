const ENV = require ('../config/index');
const user = require ('../src/components/users/network');

const routes = function (server) {
    server.use(ENV.config.url,user)
}

module.exports= routes;