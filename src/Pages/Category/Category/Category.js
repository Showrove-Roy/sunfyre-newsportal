import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h4>This is single Category news: {allNews.length}</h4>
    </div>
  );
};

export default Category;
