
export default defineOAuthAuth0EventHandler({
  config: {
    scope: ['openid', 'profile', 'email']
  },
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, { 
      user: { 
        email: user.email, 
        avatar: user.picture, 
        sub: user.sub,
        name: user.name
      } 
    });

    const { db, tables } = useDrizzle(event);
    const existingUser = await db.select({ count: count()}).from(tables.users)
      .where(eq(tables.users.email, user.email));

    if (existingUser[0].count === 0) {
      return sendRedirect(event, '/user/new');
    }

    return sendRedirect(event, '/dash');
  }
})