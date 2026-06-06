import { env } from "@repo/env"
import { PrismaClient } from "generated/prisma/client"

const globalForPrisma = globalThis as unknown as {
    db: PrismaClient
}

export const db =
    globalForPrisma.db ||
    new PrismaClient({
        log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
    })

if (env.NODE_ENV !== "production") globalForPrisma.db = db
