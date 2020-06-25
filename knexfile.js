require('ts-node').register();

const { config } = require('./src/config').Knex;

module.exports = {
  development: {
    ...config,
    migrations: {
      directory: './src/database/migrations'
    }
  }
};
