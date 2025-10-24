import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Article({ article, onPin }) {
  return (
    <Card className={`mb-3 ${article.pinned ? 'border-primary' : ''}`}>
      <Card.Body>
        <Card.Title>
          {article.title}{' '}
          {article.pinned && <span className="badge bg-primary ms-2">Fijado</span>}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Categoría: {article.category}
        </Card.Subtitle>
        <Button
          variant={article.pinned ? 'outline-danger' : 'outline-primary'}
          size="sm"
          onClick={() => onPin(article.id)}
        >
          {article.pinned ? 'Desfijar' : 'Fijar'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Article;
