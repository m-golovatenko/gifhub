const baseUrl = 'https://api.giphy.com/v1/gifs';
const api_key = 'OgSxxfjZjMxPygEJOcUBylTOTzstNmn5';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this.api_key = options.api_key;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getTrendingGifs() {
    return fetch(`${this._baseUrl}/trending?${new URLSearchParams ({
      api_key: this.api_key,
      limit: 12,
      offset: 0
    })}`)
    .then(this._getResponseData);
  }

  getSearchGifs(queryString) {
    return fetch(`${this._baseUrl}/search?${new URLSearchParams ({
      api_key: this.api_key,
      q: queryString,
      limit: 12,
      offset: 0
    })}`)
    .then(this._getResponseData);
  }

  
}

const api = new Api({baseUrl, api_key});

export default api;
