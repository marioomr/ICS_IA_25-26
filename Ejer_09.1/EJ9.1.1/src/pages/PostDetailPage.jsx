import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/posts";

export default function PostDetailPage() {
  const { postId } = useParams();
  const post = POSTS.find(p => p.id.toString() === postId);

  if (!post) {
    return (
      <div>
        <h2>Artículo no encontrado</h2>
        <Link to="/posts">Volver a la lista de artículos</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/posts">Volver a la lista de artículos</Link>
    </div>
  );
}
