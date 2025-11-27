import PostList from "./components/PostList";
import PostDetailsContainer from "./components/PostDetailsContainer";
import UserSearch from "./components/UserSearch";
import PostComments from "./components/PostComments";
import NewPostForm from "./components/NewPostForm";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejercicios useEffect</h1>

      <h2>Ejercicio 1: Lista de Posts</h2>
      <PostList />

      <hr />

      <h2>Ejercicio 2: Detalles de un Post</h2>
      <PostDetailsContainer />

      <hr />

      <h2>Ejercicio 3: Búsqueda con debounce</h2>
      <UserSearch />

      <hr />

      <h2>Ejercicio 4: Comentarios con loading/error</h2>
      <PostComments postId={1} />

      <hr />

      <h2>Ejercicio 5: Crear post con useCallback</h2>
      <NewPostForm />
    </div>
  );
}
