import { v4 as uuidv4 } from 'uuid';

function generateLink() {
  let codigoGerado = uuidv4()
  let code = codigoGerado.substring(0, 6)
  return code
}

export class LinkService {
  constructor(LinkRepository) {
    this.LinkRepository = LinkRepository;
  }

  async getAllLinks() {
    return await this.LinkRepository.findAll();
  }

  async getLinkById(id) {
    return await this.LinkRepository.findById(id);
  }
  
  async incrementClick(code) {
    return await this.LinkRepository.incrementClick(code);
  }

  async createLink(urlnormal, linkData) {
    var re = new RegExp("^(https?:\\/\\/[^\\s/$.?#].[^\\s]*)|(magnet:\\?xt=urn:btih:[a-fA-F0-9]{40,})", "i");
    const codigoGerado = generateLink();
    const dataCriacao = new Date().toISOString().split('T')[0];
    try {
      if (re.test(urlnormal)) {
        return await this.LinkRepository.create(urlnormal, linkData, codigoGerado, dataCriacao); 
      }
    } catch (e) {
      console.error('Erro ao inserir link:', e);
      throw e;
    }
  }

  async updateLink(id, linkData) {
    var re = new RegExp("^(https?:\\/\\/[^\\s/$.?#].[^\\s]*)|(magnet:\\?xt=urn:btih:[a-fA-F0-9]{40,})", "i");
    try {
      if(re.test(linkData.urlNormal)) return await this.LinkRepository.update(id, linkData);
    } catch (e) {
      throw e
    }
  }

  async deleteLink(id) {
    return await this.LinkRepository.remove(id);
  }
}