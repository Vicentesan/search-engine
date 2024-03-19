import { env } from '@/utils/env'
import type { Config } from 'drizzle-kit'

export default {
  driver: 'pg',
  schema: '.src/db/schema.ts',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  out: './drizzle',
} satisfies Config
