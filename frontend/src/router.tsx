import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Movie from "./pages/Movie";
import Watch from "./pages/Watch";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/movie/:id", element: <Movie /> },
      { path: "/watch/:id", element: <Watch /> },
    ],
  },
]);
