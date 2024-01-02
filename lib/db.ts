import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

// this is used in local so there wont be a prisma client created every reload
if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db
}