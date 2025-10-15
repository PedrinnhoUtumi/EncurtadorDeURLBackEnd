// export class LinkController {
//     constructor(linkService) {
//         this.linkService = linkService;
//     }

//     async getAlLinks(request, reply) {
//         const links = await this.linkService.getAllLinks();
//         return reply.send(links);
//     }

//     async getLinkById(request, reply) {
//         const { id } = request.params;
//         const link =  await this.linkService.getLinkById(id);

//         if (!link) {
//             return reply.code(404).send({ message: 'link não encontrado' });
//         }
//         return reply.send(link);
//     }

//     async createLink(request, reply) {
//         const { urlNormal } = request.body;
//         try {
//             const novoLink = await this.linkService.createLink(urlNormal, request.body);
//             return reply.code(201).send(novoLink);
//         } catch (error) {
//             return reply.code(500).send({ message: 'Erro ao criar link', error: error.message });
//         }
//     }

//     async updateLink(request, reply) {
//         const { id } = request.params;
//         const linkAtualizado = await this.linkService.updateLink(id, request.body);

//         if (!linkAtualizado) {
//             return reply.code(404).send({ message: 'link não encontrado' });
//         }
//         return reply.send(linkAtualizado);
//     }

//     async deleteLink(request, reply) {
//         const { id } = request.params;
//         const sucesso = await this.linkService.deleteLink(id);

//         if (!sucesso) {
//             return reply.code(404).send({ message: 'link não encontrado' });
//         }
//         return reply.code(204).send();
//     }
// }

export class LinkController {
    constructor(linkService) {
      this.linkService = linkService;
    }
  
    async getAllLinks(request, reply) {
      try {
        const links = await this.linkService.getAllLinks();
        return reply.code(200).send(links);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar links', error: error.message });
      }
    }
  
    async getLinkById(request, reply) {
      const { id } = request.params;
      try {
        const link = await this.linkService.getLinkById(id);
        if (!link) {
          return reply.code(404).send({ message: `Link com ID ${id} não encontrado.` });
        }
        return reply.code(200).send(link);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao buscar link por ID', error: error.message });
      }
    }
  
    async createLink(request, reply) {
      const { urlNormal } = request.body;
      try {
        const novoLink = await this.linkService.createLink(urlNormal, request.body);
        return reply.code(201).send(novoLink);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao criar link', error: error.message });
      }
    }
  
    async updateLink(request, reply) {
      const { id } = request.params;
      try {
        const updatedLink = await this.linkService.updateLink(id, request.body);
        if (!updatedLink) {
          return reply.code(404).send({ message: `Link com ID ${id} não encontrado para atualização.` });
        }
        return reply.code(200).send(updatedLink);
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao atualizar link', error: error.message });
      }
    }
  
    async deleteLink(request, reply) {
      const { id } = request.params;
      try {
        const deletedLink = await this.linkService.deleteLink(id);
        if (!deletedLink) {
          return reply.code(404).send({ message: `Link com ID ${id} não encontrado para exclusão.` });
        }
        return reply.code(200).send({ message: `Link com ID ${id} deletado com sucesso.` });
      } catch (error) {
        return reply.code(500).send({ message: 'Erro ao deletar link', error: error.message });
      }
    }
  }
  