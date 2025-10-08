import { pgTable, serial, varchar, date } from 'drizzle-orm/pg-core';

export const links = pgTable('links', {
  id: serial('id').primaryKey(), 
  legendaLink: varchar('legendalink').notNull(),
  urlEncurtada: varchar('urlencurtada').notNull().unique(),
  urlNormal: varchar('urlnormal'),
  dataCriacao: date('datacriacao'),
});
