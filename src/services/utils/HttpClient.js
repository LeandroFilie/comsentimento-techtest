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

  async put(path, body) {
    const headers = new Headers();

    headers.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE0NzQ4MzY0NywiaWF0IjoxNjY1OTMxNDUxLCJleHAiOjE2NjYwMTc4NTF9.jyu8fCzxTS-b5R4EXyLKp8An_DwlSMEEbiUEllyBiZI');
    headers.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers,
    });

    return response;
  }

  async delete(path) {
    const headers = new Headers();

    headers.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE0NzQ4MzY0NywiaWF0IjoxNjY1OTMxNDUxLCJleHAiOjE2NjYwMTc4NTF9.jyu8fCzxTS-b5R4EXyLKp8An_DwlSMEEbiUEllyBiZI');
    headers.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'delete',
      headers,
    });

    return response;
  }
}

export default HttpClient;
