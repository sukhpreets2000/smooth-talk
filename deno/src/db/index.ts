import { createClient } from "npm:@libsql/client";
import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';
import { drizzle } from "drizzle-orm/libsql"
import * as schema from './schema.ts';

await config({ export: true });

const client = createClient({
    url: Deno.env.get("TURSO_DATABASE_URL")!,
    authToken: Deno.env.get("TURSO_AUTH_TOKEN")!,
});

export const db = drizzle(client, { schema });