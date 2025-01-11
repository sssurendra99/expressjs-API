import { PrismaClient } from "@prisma/client";

export interface Context {
    prisma: PrismaClient
}

const globalForPrisma = globalThis as unknown as {prisma: PrismaClient}

export const prisma = globalForPrisma.prisma || new PrismaClient();

globalForPrisma.prisma = prisma

export const context: Context = {
    prisma: prisma,
}
