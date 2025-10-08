import { LinkRepository } from "./link.repository.js";
import { LinkService } from "./link.service.js";
import { LinkController } from "./link.controller.js";

const linkRepository = new LinkRepository();
const linkService = new LinkService(linkRepository);
const linkController = new LinkController(linkService);

export async function linkRoutes(fastify, options) {
  
  fastify.get('/links', (request, reply) => 
    linkController.getLinks(request, reply)
  );
  fastify.get('/links/:id', (request, reply) => 
    linkController.getLinkById(request, reply)
  );
  fastify.post('/links', (request, reply) => 
    linkController.createLink(request, reply)
  );
  fastify.put('/links/:id', (request, reply) => 
    linkController.updateLink(request, reply)
  );
  fastify.delete('/links/:id', (request, reply) => 
    linkController.deleteLink(request, reply)
  );
}