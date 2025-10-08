
export default defineOAuthAuth0EventHandler({
  config: {
    scope: ['openid', 'profile', 'email']
  },
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, { user: { ...user, alive: true} });
    return sendRedirect(event, '/dash');
  }
})