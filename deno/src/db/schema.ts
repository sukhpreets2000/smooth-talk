import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('user', {
    id: text('id').primaryKey(),
    user_name: text('user_name').notNull().unique(),
    email: text('email').unique().notNull(),
    pashword_hash: text("password_hash").notNull()
});

export const sessionsTable = sqliteTable("session", {
    id: text("id").primaryKey(),
    user_id: text("user_id").notNull().references(() => usersTable.id),
    expires_at: integer("expires_at").notNull()
})

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertSession = typeof sessionsTable.$inferInsert;
export type SelectSession = typeof sessionsTable.$inferSelect;

export interface DatabaseUser {
    id: string;
    user_name: string;
    email: string;
    password_hash: string;
}