/**
 * @fileoverview instantiate & resuse a single instance of PrismaClient,
 * as suggested by prisma docs
 */
import { PrismaClient } from '@prisma/client'

interface PrismaCache {
  prisma?: PrismaClient
}

let cache: PrismaCache = {}

const prisma = cache.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  cache.prisma = prisma
}

export default prisma
