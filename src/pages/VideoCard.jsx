import React from 'react';
import { formatKo } from '../util/date';
import { Link } from 'react-router-dom';

export default function VideoCard({ video }) {
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <Link to={`/videos/watch/${id}`}>
      <li>
        <img
          className='w-full rounded-xl'
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <p className='font-semibold my-2 line-clamp-2'>{title}</p>
          <p className='text-sm opacity-80'>{channelTitle}</p>
          <p className='text-sm opacity-80'>{formatKo(publishedAt)}</p>
        </div>
      </li>
    </Link>
  );
}
