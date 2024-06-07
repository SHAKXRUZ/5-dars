import React from "react";
import { Route } from "react-router-dom";

import Shifokor from "./shifokor/Shifokor";
import News from "./news/News";
import Contact from "./contact/Contact";
import Section from "./section/Section";
import Home from "./home/Home";

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shifokor">
        <Shifokor />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/section">
        <Section />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </>
  );
};

export default Routes;
