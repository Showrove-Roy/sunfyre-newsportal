import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <Player
        autoplay
        loop
        style={{ height: "300px", width: "300px" }}
        src='https://assets9.lottiefiles.com/packages/lf20_suhe7qtm.json'></Player>

      <h2 className='fs-1 fw-bold'>This page is not found</h2>
      <h3>
        Please Go <Link to='/'>Home</Link>
      </h3>
    </div>
  );
};

export default ErrorPage;
