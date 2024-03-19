import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js'
import { env } from '@/utils/env'
import { neon } from '@neondatabase/serverless'

const pool = neon(env.DATABASE_URL)

// @ts-expect-error - This is a valid connection
export const db = drizzle(pool, {
  schema,
})
