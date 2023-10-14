import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import User from "./Components/User/User";
// import Github from "./Components/Github/Github";
import Github, { githubInfoLoader } from "./Components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
