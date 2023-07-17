import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo = ({ src, alt }: PhotoProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <picture>
      {isLoading ? (
        <Skeleton variant="rectangular" animation="wave" width={200} height={200}>
          <img
            src={`${src}`}
            onLoad={(e) => {
              setIsLoading(false);
            }}
            className="width:inherit"
            alt={alt}
          />
        </Skeleton>
      ) : (
        <img src={`${src}`} className="width:inherit" alt={alt} />
      )}
    </picture>
  );
};

export default Photo;
