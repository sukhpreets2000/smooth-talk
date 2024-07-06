import { Lucia } from "lucia"
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle"
import { db } from "../index.ts";
import { SelectUser, sessionsTable, usersTable } from "../schema.ts";

export const adapter = new DrizzleSQLiteAdapter(db, sessionsTable, usersTable);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: Deno.env.get("NODE_ENV") === "production"
        }
    },
    getUserAttributes: (attributes) => {
        return {
            username: attributes.user_name,
            email: attributes.email
        };
    }
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: SelectUser;
    }
}