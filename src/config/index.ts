import dotenv from 'dotenv';

dotenv.config();

const Watson = {
  url: process.env.WATSON_URL,
  key: process.env.WATSON_API_KEY
};

const Knex = {
  config: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOSTNAME,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT
    }
  }
};

export default { Knex, Watson };
