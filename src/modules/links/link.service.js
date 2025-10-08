
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

  createLink(urlnormal, linkData) {

    var re = new RegExp("^((http(s?):\/\/(www.)?[a-z]+.com\/)|(magnet:\?xt=urn:btih:))")
    
    if (!re.test(urlnormal)) {
      return null
    } 
    return this.LinkRepository.create(urlnormal, linkData); 
  }

  updatelink(id, linkData) {
    return this.LinkRepository.update(id, linkData);
  }

  deletelink(id) {
    return this.LinkRepository.remove(id);
  }
}