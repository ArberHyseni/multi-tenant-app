import {Pool} from 'pg';
import {drizzle} from 'drizzle-orm/node-postgres';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

export const db = drizzle(pool);