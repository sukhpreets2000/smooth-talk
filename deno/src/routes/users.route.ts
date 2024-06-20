import { Hono } from "hono";
import { db } from "../db/index.ts";
import { usersTable } from "../db/schema.ts";

const users = new Hono()

users.get("/all", async (c) => {
    try {
        const users = await db.select().from(usersTable)
        if (!users) return c.json({ users: [] }, 404)
        console.log("users", users)
        return c.json({ users })
    } catch (error) {
        console.log("ERROR: ", error)
    }
})

export default users