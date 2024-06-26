import { Lucia } from "npm:lucia"
import { LibSQLAdapter } from "npm:@lucia-auth/adapter-sqlite"
import { db } from "../index.ts";
import { SelectUser } from "../schema.ts";

const adapter = new LibSQLAdapter(db, {
    user: "user",
    session: "session"
})

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