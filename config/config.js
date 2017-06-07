var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var connString = process.env.SUPERHEROES_DB || '';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'azure-express (dev)'
    },
    port: process.env.PORT || 3000,
    connString: connString,
  },

  test: {
    root: rootPath,
    app: {
      name: 'azure-express (test)'
    },
    port: process.env.PORT || 3000,
    connString: connString,
  },

  production: {
    root: rootPath,
    app: {
      name: 'azure-express (prod)'
    },
    port: process.env.PORT || 3000,
    connString: connString
  }
};

module.exports = config[env];
