
import { useState } from "react";
import PostDetails from "./PostDetails";

export default function PostDetailsContainer() {
  const [postId, setPostId] = useState(1);

  return (
    <div>
      <input
        type="number"
        min="1"
        value={postId}
        onChange={e => setPostId(e.target.value)}
      />

      <PostDetails postId={postId} />
    </div>
  );
}
