import React from "react";
import { Route, Routes, redirect } from "react-router";
import { Redirect } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

const PrivateRouter = ({ Component, path }) => {
  if (false) {
    return (
      <Routes>
        <Route path="/dashboard" render={Dashboard} exact />
      </Routes>
    );
  } else {
    redirect("/")
    return <></>;
  }
};

export default PrivateRouter;
