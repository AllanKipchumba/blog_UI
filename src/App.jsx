import "./app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

//import pages
import { Publish, Signup, Home, About, Login, ReadPost } from "./pages";

//import components
import {
  Footer,
  ScrollButton,
  Navbar,
  Content,
  Authenticated,
  NotAuthenticated,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/post/:id"
          element={
            <Authenticated>
              <ReadPost />
            </Authenticated>
          }
        />
        <Route
          path="/login"
          element={
            <NotAuthenticated>
              <Login />
            </NotAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <NotAuthenticated>
              <Signup />
            </NotAuthenticated>
          }
        />
        <Route
          path="/write"
          element={
            <Authenticated>
              <Publish />
            </Authenticated>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Content />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default App;
