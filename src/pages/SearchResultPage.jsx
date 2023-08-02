import React from "react";
import SearchResultTemplate from "../components/templates/SearchResultTemplate";
import { useParams } from "react-router-dom";

const SearchResultPage = () => {
  const { query } = useParams();

  return (
    <div className="my-8 max-w-screen-xl">
      <SearchResultTemplate query={query} />
    </div>
  );
};

export default SearchResultPage;
