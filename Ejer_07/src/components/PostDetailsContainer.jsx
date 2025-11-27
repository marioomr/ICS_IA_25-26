import { useEffect, useState } from "react";

export default function PostDetails({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(null);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [postId]);

  if (!post) return <p>Cargando post...</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
