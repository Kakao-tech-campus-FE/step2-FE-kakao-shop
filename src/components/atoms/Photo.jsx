import React from 'react';

export default function Photo({ src, alt }) {
  return (
    <picture className='w-12'>
      <img src={src} alt={alt} className='w-full rounded-xl' />
    </picture>
  );
}
