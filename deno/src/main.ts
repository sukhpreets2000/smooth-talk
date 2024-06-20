import { Hono } from 'hono';
import usersRoute from "./routes/users.route.ts";

const app = new Hono()

app.basePath('/api')

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/user', usersRoute)


export default app
