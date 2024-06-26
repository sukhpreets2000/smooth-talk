import { eq } from "npm:drizzle-orm";
import { db } from "../db/index.ts";
import { InsertUser, usersTable, SelectUser } from "../db/schema.ts";

export async function getUser({
    email,
}: {
    email: string;
}): Promise<SelectUser | null> {
    const users = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));

    if (!users) {
        return null;
    }
    return users[0];
}

export async function createUser(data: InsertUser): Promise<SelectUser | null> {
    const result = await db.insert(usersTable).values(data).returning();
    if (!result || result.length === 0) {
        return null;
    }

    return result[0];
}
