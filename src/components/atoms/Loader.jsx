import React from "react";
import { useIsFetching } from "react-query";

const GlobalLoading = () => {
  const isFetching = useIsFetching();

  console.log(isFetching);

  if (!isFetching) {
    return null;
  }

  return (
    <div className="global-loading-container">
      <div className="global-loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default GlobalLoading;
