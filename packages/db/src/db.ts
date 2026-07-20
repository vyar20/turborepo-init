import { PrismaPg } from '@prisma/adapter-pg'
import { env } from '@repo/env'
import { PrismaClient } from 'generated/prisma/client'

const globalForPrisma = globalThis as unknown as {
    db: PrismaClient
}

const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL
})

export const db =
    globalForPrisma.db ||
    new PrismaClient({
        adapter,
        log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
    })

if (env.NODE_ENV !== 'production') globalForPrisma.db = db
