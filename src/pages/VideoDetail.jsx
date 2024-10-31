import React from 'react';
import { useParams } from 'react-router-dom';
import Youtube from '../api/youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md';

export default function VideoDetail() {
  const { id } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: video,
  } = useQuery({
    queryKey: ['video', id],
    queryFn: () => {
      return youtube.detail(id);
    },
  });

  if (isLoading) {
    return;
  }

  const { snippet } = video;
  const { title, channelTitle } = snippet;

  return (
    <>
      {!isLoading && (
        <div>
          <img className='w-full' src={snippet.thumbnails.standard.url} />
          <p className='font-bold'>{title}</p>
          <div className='grid grid-cols-2'>
            <div className='flex items-center mr-2'>
              <img
                className='rounded-full size-7 m-2'
                src={snippet.thumbnails.medium.url}
              />
              <div>
                <p className='font-bold'>{channelTitle}</p>
                <p className='font-bold'>{channelTitle}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <button className='bg-gray-50 rounded-l-full py-1 hover:bg-gray-200'>
                <MdOutlineThumbUp className='text-4xl text-zinc-900 p-1' />
              </button>
              <button className='bg-gray-50 rounded-r-full py-1 hover:bg-gray-200'>
                <MdOutlineThumbDown className='text-4xl text-zinc-900 p-1' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
