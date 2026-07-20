import { Hono } from 'hono'

export const _app = new Hono()
    .basePath('/api')
    .get('/', (c) => c.json({ message: 'Hello from the API!' }))

export type AppRoute = typeof _app
