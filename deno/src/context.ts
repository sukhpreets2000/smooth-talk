import type { Env } from "npm:hono";
import type { User, Session } from "npm:lucia";

export interface Context extends Env {
    Variables: {
        user: User | null;
        session: Session | null;
    };
}