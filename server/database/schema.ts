import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import crypto from 'node:crypto';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({autoIncrement: true}),
  publicId: text('public_id').unique().notNull().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  avatar: text('avatar').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date())
})