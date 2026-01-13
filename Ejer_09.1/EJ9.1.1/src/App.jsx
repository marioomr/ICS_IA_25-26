import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsListPage from "./pages/PostsListPage";
import PostDetailPage from "./pages/PostDetailPage";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "posts", element: <PostsListPage /> },
      { path: "posts/:postId", element: <PostDetailPage /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
