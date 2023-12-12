import {migrate} from 'drizzle-orm/node-postgres/migrator';
import { buildServer } from './utils/server';
import { db } from './db';

async function main() {
  const app = await buildServer();

  app.listen({
    port: 3000,
  });

  await migrate(db, {
    migrationsFolder: './migrations'
  });
}

main();