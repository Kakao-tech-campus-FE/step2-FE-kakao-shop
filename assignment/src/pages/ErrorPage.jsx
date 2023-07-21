import React from 'react';

export const ErrorPage = ({ message }) => {
  return (
    <>
      <h1> 404 Not Found</h1>
      <h1> {message}</h1>;
    </>
  );
};
