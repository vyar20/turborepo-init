import z from "zod"

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]),
    PORT: z.coerce.number(),
    DATABASE_URL: z.url(),
    JWT_SECRET: z.string().min(32)
})

export const env = (() => {
    const parsed = envSchema.safeParse(process.env)

    if (!parsed.success) {
        console.error("Invalid environment variables:", parsed.error.issues)
        process.exit(1)
    }

    return parsed.data
})()
