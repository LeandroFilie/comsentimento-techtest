import HttpClient from './utils/HttpClient';

class NoticesService {
  constructor() {
    this.httpClient = new HttpClient('https://api.comsentimento.com.br');
  }

  async listNotices() {
    return this.httpClient.get('/notices');
  }

  async createNotice(notice) {
    return this.httpClient.post('/notices', notice);
  }
}

export default new NoticesService();
