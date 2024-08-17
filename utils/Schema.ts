import { serial, varchar, text, integer, boolean } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData').notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('templateSlug').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
  numberOfWords: integer('numberOfWords')  // New field to store word count
});


