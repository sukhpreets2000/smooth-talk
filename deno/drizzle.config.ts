import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './migrations',
    dialect: 'sqlite',
    driver: 'turso',
    dbCredentials: {
        url: Deno.env.get("TURSO_DATABASE_URL")!,
        authToken: Deno.env.get("TURSO_AUTH_TOKEN")!,
    },
});
