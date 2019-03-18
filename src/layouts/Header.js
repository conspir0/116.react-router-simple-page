import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import foto1 from "../images/header1.jpg";
import foto2 from "../images/header2.jpg";
import foto3 from "../images/header3.jpg";

const Header = props => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={foto1} alt="miasto" />} />
        <Route
          path="/products"
          render={() => <img src={foto2} alt="miasto" />}
        />
        <Route
          path="/contact"
          render={() => <img src={foto3} alt="miasto" />}
        />
        <Route path="/admin" render={() => <img src={foto3} alt="miasto" />} />
        <Route render={() => <img src={foto1} alt="miasto" />} />
      </Switch>
    </>
  );
};

export default Header;
