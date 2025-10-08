
export default defineEventHandler(async (event) => {
  try {
    await requireUserSession(event);
  } catch (error) {
    setResponseStatus(event, 401);
    return { error: 'Unauthorized' };
  }
  
  const { db, tables } = useDrizzle(event);
  const users = await db.select().from(tables.users)
  
  return users;
})
