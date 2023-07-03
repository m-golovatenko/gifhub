const baseUrl = 'https://api.giphy.com/v1/gifs';
const api_key = 'OgSxxfjZjMxPygEJOcUBylTOTzstNmn5';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this.api_key = options.api_key;
    this.limit = 12;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getTrendingGifs(page) {
    const currentPage = page - 1;
    return fetch(
      `${this._baseUrl}/trending?${new URLSearchParams({
        api_key: this.api_key,
        limit: this.limit,
        offset: currentPage * this.limit
      })}`
    ).then(this._getResponseData);
  }

  getSearchGifs(queryString, page) {
    const currentPage = page - 1;
    return fetch(
      `${this._baseUrl}/search?${new URLSearchParams({
        api_key: this.api_key,
        q: queryString,
        limit: this.limit,
        offset: currentPage * this.limit
      })}`
    ).then(this._getResponseData);
  }

  getGifById(id) {
    return fetch(
      `${this._baseUrl}/${id}?${new URLSearchParams({
        api_key: this.api_key
      })}`
    ).then(this._getResponseData);
  }

  getRandomGif() {
    return fetch(
      `${this._baseUrl}/random?${new URLSearchParams({
        api_key: this.api_key
      })}`
    ).then(this._getResponseData);
  }

  getSuggestions() {
    return fetch(
      `https://api.giphy.com/v1/trending/searches?${new URLSearchParams({
        api_key: this.api_key
      })}`
    ).then(this._getResponseData);
  }
}

const api = new Api({ baseUrl, api_key });

export default api;
