class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);

    return response.json();
  }

  async post(path, body) {
    const headers = new Headers();

    headers.append('Authorization', process.env.REACT_APP_AUTHORIZATION_HEADER);
    headers.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'post',
      body: JSON.stringify(body),
      headers,
    });

    return response.json();
  }
}

export default HttpClient;
