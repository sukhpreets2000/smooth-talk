import {hc} from "hono/client";
import {App} from "./main.ts";

export const client = hc<App>("http://localhost:8787")

