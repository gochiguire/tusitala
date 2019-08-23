const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  database: 'tusitala',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
});

client
    .connect()
    .then(() => console.log('CONNECTED!'))
    .catch(e => console.log('CONNECTION ERROR: ', e));