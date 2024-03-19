import { doublePrecision, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: text('id').primaryKey().default('uuid_generate_v4()'),
  imageId: text('image_id').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  price: doublePrecision('price').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export type ProductSelect = typeof products.$inferSelect
export type ProductInsert = typeof products.$inferInsert
