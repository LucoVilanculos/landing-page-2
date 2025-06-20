import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home, About, Contact, Login, Register, ErrorPage, Resume, Projects} from "./pages/index";

const router = createBrowserRouter([
    {
      path: "/", 
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register /> 
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/resume",
      element: <Resume />
    }
  ]);
export const Router = () => {
    return (
        <RouterProvider router={router} />
    );
}