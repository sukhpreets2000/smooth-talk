import { generateId } from "npm:lucia"
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { relations } from "drizzle-orm"

export const usersTable = sqliteTable('user', {
    id: text('id').primaryKey().notNull()
        .$defaultFn(() => generateId(15)),
    user_name: text('user_name').notNull().unique(),
    email: text('email').unique().notNull(),
    password_hash: text("password_hash").notNull()
});

export const sessionsTable = sqliteTable("session", {
    id: text("id").primaryKey().notNull(),
    userId: text("user_id").notNull().references(() => usersTable.id),
    expiresAt: integer("expires_at").notNull()
})

export const usersRelations = relations(usersTable, ({ many }) => ({
    session: many(sessionsTable)
}))

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

// export type InsertSession = typeof sessionsTable.$inferInsert;
// export type SelectSession = typeof sessionsTable.$inferSelect;
