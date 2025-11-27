import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h3>Lista de Posts</h3>
      <ul>
        {posts.length === 0 ? (
          <li>Cargando posts...</li>
        ) : (
          posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        )}
      </ul>
    </div>
  );
}
