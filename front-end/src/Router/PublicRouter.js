import React from "react";
import { Route, Routes } from "react-router";
import { Redirect } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const PublicRouter = ({ Component, path }) => {
  if (true) {
    return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
      </Routes>
    );
  } else {
    redirect("/dashboard")
    return <></>;
  }
};

export default PublicRouter;
