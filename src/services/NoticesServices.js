import HttpClient from './utils/HttpClient';

class NoticesService {
  constructor() {
    this.httpClient = new HttpClient('https://api.comsentimento.com.br');
  }

  async listNotices() {
    return this.httpClient.get('/notices');
  }
}

export default new NoticesService();
