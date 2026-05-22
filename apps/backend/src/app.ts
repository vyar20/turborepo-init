import route from "@/routes/route"
import { Hono } from "hono"

const app = new Hono()

app.route("/api", route)

export default {
    port: 3000,
    fetch: app.fetch
}
