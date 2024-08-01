const { Pool } = require('pg');
// require('dotenv').config();

const endpoint = process.env.RDS_ENDPOINT;
console.log(endpoint);
console.log('test');

const pool = new Pool({
  host: 'database-1.ctomi4qowrx7.us-east-2.rds.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: 'reinforcement',
  database: 'database-1',
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database!');
});

module.exports = pool;
