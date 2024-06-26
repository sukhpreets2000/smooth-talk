import { createClient } from "https://esm.sh/@libsql/client@0.6.0/web";
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { drizzle } from "npm:drizzle-orm/libsql"
import * as schema from './schema.ts';

await config({ export: true });

const client = createClient({
    url: Deno.env.get("TURSO_DATABASE_URL")!,
    authToken: Deno.env.get("TURSO_AUTH_TOKEN")!,
});

export const db = drizzle(client, { schema });