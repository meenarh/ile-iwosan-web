import React from "react";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import Hospitals from "./(components)/Hospitals";
import About from "./(components)/About";
import Strip from "./(components)/Strip";
import Review from "./(components)/Review";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-full justify-center overflow-x-hidden">
      <NavBar />
      <Header />
      <Hospitals />
      <About />
      <Strip />
      <Review />
      <Footer />
    </div>
  );
};

export default page;
