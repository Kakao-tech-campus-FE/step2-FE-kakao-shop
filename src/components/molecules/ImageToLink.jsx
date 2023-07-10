import React from 'react';
import Image from '../atoms/Image';
import LinkTo from '../atoms/LinkTo';

function ImageToLink({src, to, linkstyle, imagestyle}) {

  return (
    <LinkTo to={to} style={linkstyle}>
      <Image src={src} style={imagestyle}/>
    </LinkTo>
  )
}

export default ImageToLink