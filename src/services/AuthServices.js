import HttpClient from './utils/HttpClient';

class AuthServices {
  constructor() {
    this.httpClient = new HttpClient('https://api.comsentimento.com.br');
  }

  login(user) {
    return this.httpClient.post('/users/login', user);
  }
}

export default new AuthServices();
