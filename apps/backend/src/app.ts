import { _app } from '@repo/api/server'
import { env } from '@repo/env'
import { Hono } from 'hono'

const app = new Hono()

app.route('/', _app)

export default {
    port: env.PORT,
    fetch: app.fetch
}
