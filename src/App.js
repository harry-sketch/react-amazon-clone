import React, { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Home from "./components/home/Home";
import Recommend from "./components/recommend/Recommend";
import Footer from "./components/footer/Footer";
import End from "./components/end/End";

const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 15rem auto;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <ClockLoader
          Loading={loading}
          size={100}
          color={"#000"}
          css={override}
        />
      ) : (
        <>
          <Header />
          <Navbar />
          <Banner />
          <Home />
          <Recommend />
          <Footer />
          <End />
        </>
      )}
    </>
  );
};

export default App;
