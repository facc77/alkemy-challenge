import React from "react";
import "../css/login.css";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header login={false} />
      <div className="jumbotron d-flex">
        <LoginForm />
      </div>
    </>
  );
};

export default Home;
