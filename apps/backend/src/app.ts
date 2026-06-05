import route from "@/routes/route"
import { env } from "@repo/env"
import { Hono } from "hono"

const app = new Hono()

app.route("/api", route)

export default {
    port: env.PORT,
    fetch: app.fetch
}
