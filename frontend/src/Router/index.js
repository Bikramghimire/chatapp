import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Message from "../container/Message";
import Login from "../container/Auth/login";
import Register from "../container/Auth/register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/message" element={<Message />} /> */}
        <Route path="/" element={<Message />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
