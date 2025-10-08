import { pgTable, uuid, text, date } from 'drizzle-orm/pg-core';

export const links = pgTable('links', {
  id: uuid('id').primaryKey(),
  legendaLink: text('legendalink').notNull(),
  urlEncurtada: text('urlencurtada').notNull().unique(),
  urlNormal: text('urlnormal'),
  dataCriacao: date('datacriacao'),
});