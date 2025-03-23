
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">Page not found</p>
        <Link 
          to="/"
          className="not-found__button"
        >
          Go home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
