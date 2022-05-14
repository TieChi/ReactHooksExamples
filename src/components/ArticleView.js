import React, { useState, useEffect } from "react";
import useArticle from "../hooks/useArticle";

const ArticleView = function () {
  return (
    <div>
      <h1>h1</h1>
      <div>div</div>
    </div>
  );
};

export default () => {
  const { data } = useArticle();
  console.log(data);
  return (
    <div>
      <ArticleView />
    </div>
  );
};
