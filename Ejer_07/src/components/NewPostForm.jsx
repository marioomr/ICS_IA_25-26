import { useState, useCallback, useEffect } from "react";

export default function NewPostForm() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [createdPost, setCreatedPost] = useState(null);

  const addPost = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setCreatedPost(data);
  }, [formData]);

  useEffect(() => {
    if (createdPost) console.log("Post creado:", createdPost);
  }, [createdPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />

        <textarea
          placeholder="Contenido"
          value={formData.body}
          onChange={(e) =>
            setFormData({ ...formData, body: e.target.value })
          }
        />

        <button type="submit">Crear Post</button>
      </form>

      {createdPost && (
        <p>Post creado correctamente. ID: {createdPost.id}</p>
      )}
    </div>
  );
}
