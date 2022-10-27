import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../../Shared/NewsCard/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();

  return (
    <div>
      {categoryNews.length === 0 ? (
        <h1 className='text-center my-5'>Here is no News found</h1>
      ) : (
        categoryNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))
      )}
    </div>
  );
};

export default Category;
