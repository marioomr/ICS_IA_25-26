import { POSTS } from "../data/posts";
import { Link } from "react-router-dom";

export default function PostsListPage() {
  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {POSTS.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
