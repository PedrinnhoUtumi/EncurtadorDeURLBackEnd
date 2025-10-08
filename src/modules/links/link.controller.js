export class LinkController {
    constructor(linkService) {
        this.linkService = linkService;
    }

    async getLinks(request, reply) {
        const links = this.linkService.getAllLinks();
        return reply.send(links);
    }

    async getLinkById(request, reply) {
        const { id } = request.params;
        const link = this.linkService.getLinkById(id);

        if (!link) {
            return reply.code(404).send({ message: 'link não encontrado' });
        }
        return reply.send(link);
    }

    async createLink(request, reply) {
        const { urlNormal } = request.body;
      
        const novoLink = await this.linkService.createLink(urlNormal, request.body);
        
        if (!novoLink) {
          return reply.code(400).send({ message: `Impossível criar este link! ${novoLink}` });
        }
      
        return reply.code(201).send(novoLink);
      }
      

    async getLinks(request, reply) {
        const links = this.linkService.getAllLinks();
        return reply.send(links);
    }

    async updateLink(request, reply) {
        const { id } = request.params;
        const linkAtualizado = this.linkService.updateLink(id, request.body);

        if (!linkAtualizado) {
            return reply.code(404).send({ message: 'link não encontrado' });
        }
        return reply.send(linkAtualizado);
    }

    async deleteLink(request, reply) {
        const { id } = request.params;
        const sucesso = this.linkService.deleteLink(id);

        if (!sucesso) {
            return reply.code(404).send({ message: 'link não encontrado' });
        }
        return reply.code(204).send();
    }
}

