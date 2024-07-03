import { z } from 'zod';
import { Hono } from 'hono';
import { Scrypt, generateId } from 'lucia';
import { zValidator } from '@hono/zod-validator';

import { lucia } from '../db/lib/auth.ts';
import { Context } from "../context.ts";
import { getUser, createUser } from "../functions/users.ts";

const authRouter = new Hono<Context>();

authRouter.post(
    '/login',
    zValidator(
        'form',
        z.object({
            email: z.string().min(1).email(),
            password: z.string().min(1).max(255),
        })
    ),
    async (c) => {
        const { email, password } = await c.req.valid('form');

        const user = await getUser({ email });
        if (user === null) {
            return c.json({ error: 'Invalid email or password.' }, 400);
        }

        const validPassword = await new Scrypt().verify(user.password_hash, password);
        if (!validPassword) {
            return c.json({ error: 'Invalid email or password.' }, 400);
        }

        const session = await lucia.createSession(user.id, {});
        const cookie = lucia.createSessionCookie(session.id);

        c.header('Set-Cookie', cookie.serialize(), { append: true });

        return c.redirect('/');
    }
);

authRouter.post(
    '/signup',
    zValidator(
        'form',
        z.object({
            email: z.string().min(1).email(),
            password: z.string().min(1).max(255),
        })
    ),
    async (c) => {
        const { email, password } = await c.req.valid('form');

        const existingUser = await getUser({ email });
        if (existingUser) {
            return c.json({ error: 'User with that email already exists.' }, 400);
        }

        const passwordHash = await new Scrypt().hash(password);

        const userId = generateId(15);

        const user = await createUser({
            id: userId,
            user_name: email.split('@')[0],
            email,
            password_hash: passwordHash,
        });
        if (!user) {
            return c.json({ error: 'An error occurred during sign up.' }, 500);
        }

        const session = await lucia.createSession(userId, {});
        const cookie = lucia.createSessionCookie(session.id);

        c.header('Set-Cookie', cookie.serialize(), { append: true });

        return c.redirect('/dashboard');
    }
);

authRouter.post('/logout', async (c) => {
    const session = c.get('session');
    if (session) {
        await lucia.invalidateSession(session.id);
    }

    const cookie = lucia.createBlankSessionCookie();

    c.header('Set-Cookie', cookie.serialize(), { append: true });

    return c.redirect('/');
});

authRouter.get("/me", (c) => {
    const session = c.get('session')
    const user = c.get('user')

    if (!session || !user) {
        return c.redirect('/login')
    }

    return c.json({ message: "success", user, session })
})

export default authRouter;