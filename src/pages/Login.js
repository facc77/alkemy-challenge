import React from "react";
import "../css/login.css";
import LoginForm from "../components/LoginForm";

const Home = () => {
  return (
    <>
      <div class="jumbotron d-flex">
        <LoginForm />
      </div>
    </>
  );
};

export default Home;
