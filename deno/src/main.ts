import { Hono } from 'hono';
import usersRoute from "./routes/users.route.ts";
import authRoute from "./routes/auth.routes.ts";

const app = new Hono()

app.basePath('/api')

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/user', usersRoute)
app.route("/auth", authRoute)


export default app
