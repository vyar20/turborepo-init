import { Hono } from "hono"

const route = new Hono()

route.get("/", (c) => {
    return c.json({
        message: "Hello, World!"
    })
})

export default route
