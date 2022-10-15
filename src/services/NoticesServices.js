class NoticesService {
  async listNotices() {
    const response = await fetch('https://api.comsentimento.com.br/notices');
    console.log(response);

    return response.json();
  }
}

export default new NoticesService();
