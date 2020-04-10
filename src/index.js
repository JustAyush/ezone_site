import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";
import RouterRoute from "./components/router/router";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <RouterRoute />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(<Try />, document.getElementById("root"));
