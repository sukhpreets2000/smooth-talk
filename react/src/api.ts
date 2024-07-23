import { hc } from "hono/client";

let client;
if (import.meta.env.PROD) {
  const mod = await import("../../deno/src/client");
  client = mod.client;
} else {
  client = hc("/api");
}

const api = client.api;

export { api };