import { Hono } from 'hono';
import { cors } from "hono/cors"

import usersRoute from "./routes/users.route.ts";
import authRoute from "./routes/auth.routes.ts";

const app = new Hono().basePath('/api')

app.use('/*', cors({ origin: '*' }))
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/user', usersRoute)
app.route("/auth", authRoute)


export default app
