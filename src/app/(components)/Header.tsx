'use client'

import React from "react";
import { MapPin } from "@phosphor-icons/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="max-w-full justify-center">
      <div
        className="flex flex-col gap-6 bg-[url(/images/header.png)] bg-cover bg-center bg-no-repeat h-full md:pt-32 md:pb-[300px] py-10 px-2"
      >
        <h3 className="text-white text-center font-bold text-5xl h-full">
          Get Quick Access to <br /> Hospitals in your Area
        </h3>
        <p className="text-lg font-normal text-center text-light-gray">
          Find the nearest hospital to you and make an appointment. Discover
          Your <br /> Perfect Care: Find Your Hospital, Anytime, Anywhere!
        </p>
        <div className="flex items-center relative">
          <MapPin className="absolute z-10 md:left-[385px]" size={24} color="#1E1E1E" />
          <input
            type="text"
            placeholder="Nigeria"
            className="w-[650px] rounded-2xl m-auto py-6 px-8 top-10 bg-white shadow-md placeholder:text-sm placeholder:text-deep-gray placeholder-opacity-50 placeholder:first-letter:font-normal placeholder:font-normal placeholder:pl-2 outline-none"
          />
          <button className="bg-blue text-white absolute z-10 md:left-[920px] py-4 px-5 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
