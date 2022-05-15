import React, { useState } from "react";
import useArticle from "../hooks/useArticle";
import useComments from "../hooks/useComments";
import useUser from "../hooks/useUser";

const ArticleView = ({ id }) => {
  const { data: article, loading, error } = useArticle(id);
  const { data: comments } = useComments();
  const { data: user } = useUser(article?.userId);

  if (error) return "Failed.";
  if (loading || !article) return "Loading...";

  return (
    <div className="container">
      <h1>{article.title}</h1>
      {user && (
        <div>
          <strong>Author: No.{user.id} - </strong>
          <strong>{user.name}</strong>
        </div>
      )}
      <p>{article.content}</p>
      {comments && (
        <div>
          <h3>Comments ({comments.length})</h3>
          <dl>
            {comments.map((item) => (
              <>
                <dt key={item.id}>
                  {item.user}: {item.title}
                </dt>
                <dd>{item.content}</dd>
              </>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
};

export default () => {
  const idList = [1, 2, 3, 4, 5, 6];
  const [id, setId] = useState(1);
  return (
    <div className="article-warpper">
      <ul>
        {idList.map((item) => {
          return (
            <li
              onClick={() => {
                setId(item);
              }}
            >
              Article {item}
            </li>
          );
        })}
      </ul>
      <ArticleView id={id} />
    </div>
  );
};
