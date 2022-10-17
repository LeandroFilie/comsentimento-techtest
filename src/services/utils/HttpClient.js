class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    return this.makeRequest(path, {
      method: 'GET',
    });
  }

  async post(path, body) {
    return this.makeRequest(path, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async put(path, body) {
    return this.makeRequest(path, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  async delete(path) {
    return this.makeRequest(path, {
      method: 'DELETE',
    });
  }

  async makeRequest(path, { body = null, method }) {
    const headers = new Headers();

    const tokenAuthorization = localStorage.getItem('token');

    if (body) {
      headers.append('Content-type', 'application/json');

      if (method === 'DELETE' || method === 'PUT') {
        headers.append('Authorization', tokenAuthorization);
      } else {
        headers.append('Authorization', process.env.REACT_APP_AUTHORIZATION_HEADER);
      }
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method,
      body,
      headers,
    });

    const contentType = response.headers.get('Content-Type');

    let responseBody = null;
    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new Error();
  }
}

export default HttpClient;
