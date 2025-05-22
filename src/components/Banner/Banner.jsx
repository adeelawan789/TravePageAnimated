import React from "react";
import logo from "../images/logo.png";
import { motion as m } from "framer-motion";
import HeadAnimation from "../Animation/HeadAnimation";

const Banner = () => {
  return (
    <div
      className="w-full h-screen bg-banner bg-no-repeat bg-center bg-cover clip
      flex flex-col items-center text-center gap-14 text-white">
      <div className="mt-16 md:mt-7">
        <img className="w-[13rem]" src={logo} alt="logoImg" />
      </div>

      <div>
        <h1
          className="text-3xl md:text-6xl 2xl:text-8xl capitalize font-bold md:w-[44rem]
          2xl:w-[73rem] px-4 mx-auto textShadow">
          <HeadAnimation text={"welcome to mountain expedition club"} />
        </h1>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="md:w-[30rem] 2xl:w-[40rem] 2xl:text-2xl mx-auto mt-4 textShadow px-3 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          consectetur, saepe, quia dolor dolore blanditiis.
        </m.p>
      </div>
    </div>
  );
};

export default Banner;
