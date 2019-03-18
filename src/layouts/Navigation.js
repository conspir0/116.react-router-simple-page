import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "home", path: "/", exact: true },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
  { name: "admin", path: "/admin" }
];

const Navigation = () => {
  const menu = list.map(item => {
    return (
      <li key="item.name">
        <NavLink to={item.path} exact={item.exact ? item.exact : false}>
          {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
