
export class LinkService {
  constructor(LinkRepository) {
    this.LinkRepository = LinkRepository;
  }

  getAlllinks() {
    return this.LinkRepository.findAll();
  }

  getlinkById(id) {
    return this.LinkRepository.findById(id);
  }

  async createLink(urlnormal, linkData) {

    var re = new RegExp("^(https?:\\/\\/[^\\s/$.?#].[^\\s]*)|(magnet:\\?xt=urn:btih:[a-fA-F0-9]{40,})", "i");

    // if (re.test(urlnormal)) {
    return await this.LinkRepository.create(urlnormal, linkData); 
    // // // // // // // } 
    // // // // // // // return re.test(urlnormal)
  }

  updatelink(id, linkData) {
    return this.LinkRepository.update(id, linkData);
  }

  deletelink(id) {
    return this.LinkRepository.remove(id);
  }
}