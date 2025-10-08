
import { randomUUID } from 'node:crypto';
import { db } from '../../infra/bd.js';
import { eq } from 'drizzle-orm';
import { links } from '../../infra/bd/schema.js';

export class LinkRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return this.db.select()
      .from(links);
  }

  async findById(id) {
    const result = await this.db.select()
      .from(links)  
      .where(eq(links.id, id));

    return result[0] || null;
  }

async create(urlNormal, linkData) {
  const id = randomUUID();
  const urlencurtada = "https://exemplo.com/link-original";
  const datacriacao = new Date().toISOString().split('T')[0];

  try {
    const result = await this.db.insert(links).values({
      id: id,
      urlnormal: urlNormal,
      datacriacao: datacriacao,
      urlencurtada: urlencurtada,
      legendalink: linkData.legendaLink
    }).returning();

    return result[0];

  } catch (e) {
    return e;
  }
}

  async update(id, linkData) {
    const result = await this.db.update(links)
      .set(linkData)
      .where(eq(links.id, id))
      .returning();
    return result[0] || null;
  }

  async remove(id) {
    const result = await this.db.delete(links)
      .where(eq(links.id, id))
      .returning({ id: links.id });

    return result.length > 0;
  }

}