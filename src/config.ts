import dotenv from 'dotenv';

dotenv.config();

export namespace Knex {
  export const config = {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOSTNAME,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT
    },
    migrations: {
      tableName: 'KnexMigrations'
    }
  };
}

export default { Knex };
