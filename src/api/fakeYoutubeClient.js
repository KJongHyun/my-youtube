import axios from 'axios';

export default class FakeYoutubeClient {
  async search(params) {
    return params.channelId
      ? axios.get(`/videos/channelPlayList.json`)
      : axios.get(`/videos/search.json`);
  }

  async videos(params) {
    return axios.get(`/videos/popular.json`);
  }

  async channels(params) {
    return axios.get(`/videos/channel.json`);
  }
}
