import React from 'react';
import Article from './Article';
import EmptyState from './EmptyState';

function ArticleList({ articles = [], onPin }) {
  if (!articles.length) return <EmptyState mensaje="No hay artículos disponibles." />;

  const sortedArticles = [...articles].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <div>
      {sortedArticles.map((article) => (
        <Article key={article.id} article={article} onPin={onPin} />
      ))}
    </div>
  );
}

export default ArticleList;
