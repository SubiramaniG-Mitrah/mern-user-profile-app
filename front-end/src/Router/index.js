import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AllRoutes = () => {
  return (
    <Router>
      <PublicRouter />
      <PrivateRouter />
    </Router>
  );
};

export default AllRoutes;
