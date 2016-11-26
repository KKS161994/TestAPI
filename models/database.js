const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/collegebuddy';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE IF NOT EXISTS items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query = client.query('create table TestNew(ID serial primary key,
Name Text NOT NULL,
Email Text NOT NULL,
Mob_No Text NOT NULL,
Password Text NOT NULL,
College_Name Text not null)');
query.on('end', () => { client.end(); });