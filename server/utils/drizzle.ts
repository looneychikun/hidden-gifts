import { drizzle } from 'drizzle-orm/d1';
export { sql, eq, and, or } from 'drizzle-orm';

import { type H3Event, EventHandlerRequest } from 'h3';

import * as schema from '../database/schema';

export const tables = schema;

export function useDrizzle(event : H3Event<EventHandlerRequest>) {
  return { db: drizzle(event.context.cloudflare.env.DB, { schema }), tables: tables};
}

export type User = typeof schema.users.$inferSelect;