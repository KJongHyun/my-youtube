import axios from 'axios';

export default class FakeYoutubeClient {
  async search(params) {
    return axios.get(`/videos/search.json`);
  }

  async videos(params) {
    return axios.get(`/videos/popular.json`);
  }

  async detail(params) {
    return axios.get(`/videos/detail.json`);
  }
}
