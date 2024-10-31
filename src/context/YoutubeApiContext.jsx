import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

// const youtubeClient = new YoutubeClient();
const youtubeClient = new FakeYoutubeClient();
const youtube = new Youtube(youtubeClient);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
