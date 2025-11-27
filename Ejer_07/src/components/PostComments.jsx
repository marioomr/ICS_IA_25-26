import { useEffect, useState } from "react";

export default function PostComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadComments() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );

        if (!res.ok) throw new Error("Error al cargar comentarios");

        const data = await res.json();
        setComments(data);

      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    }

    loadComments();
  }, [postId]);

  return (
    <div>
      <h3>Comentarios</h3>

      {isLoading && <p>Cargando comentarios...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && !error && (
        <ul>
          {comments.map(c => (
            <li key={c.id}>{c.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
