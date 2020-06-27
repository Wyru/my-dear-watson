import knex from 'knex';
import config from '../config';

const connection = knex(config.Knex.config);

export default connection;
