const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

pool.connect((err) => {
  if (err) throw new Error(err);
  console.log('connected!');
});

module.exports = pool;