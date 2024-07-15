import { Hono } from 'hono';
import { cors } from "hono/cors"

import usersRoute from "./routes/users.route.ts";
import authRoute from "./routes/auth.routes.ts";
import { lucia } from "./db/lib/auth.ts";
import { Context } from "./context.ts";

const app = new Hono<Context>().basePath('/api')

app.use('*', cors({ origin: '*', credentials: true }));
app.use("*", async (c, next) => {
  const sessionId = lucia.readSessionCookie(c.req.header("Cookie") ?? "");
  if (!sessionId) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  const { session, user } = await lucia.validateSession(sessionId);
  if (session && session.fresh) {
    c.header("Set-Cookie", lucia.createSessionCookie(session.id).serialize(), { append: true });
  }
  if (!session) {
    c.header("Set-Cookie", lucia.createBlankSessionCookie().serialize(), { append: true });
  }
  c.set("session", session);
  c.set("user", user);
  return next();
});

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/user', usersRoute)
app.route("/auth", authRoute)


export default app
