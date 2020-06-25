import dotenv from 'dotenv';

dotenv.config();

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

export default { Knex };
