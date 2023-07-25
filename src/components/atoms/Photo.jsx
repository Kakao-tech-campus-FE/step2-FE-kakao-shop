import React from 'react';

export default function Photo({ src, alt }) {
  return (
    <picture className='w-48'>
      <source srcSet={`${src}.webp`} />
      <source srcSet={`${src}.png`} />
      <source srcSet={`${src}.webm`} />
      <img src={`${src}.jpg`} alt={alt} className='w-full' />
    </picture>
  );
}
