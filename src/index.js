import ReactDom from "react-dom/client";
import Home from "./view/Home/home";
import About from "./view/About/about";
import Contact from "./view/Contact/contact";
import {
  createBrowserRouter,
  RouterProvider,

} 
from "react-router-dom";
const root = ReactDom.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
root.render(<RouterProvider router={router} />)