'use client'

import React from "react";
import { MapPin } from "@phosphor-icons/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="max-w-full justify-center">
      <div
        className="flex flex-col gap-6 bg-[url(/images/header.png)] bg-cover bg-center bg-no-repeat h-full md:pt-32 md:pb-[200px] py-10 px-2"
      >
        <h3 className="text-white text-center font-bold text-5xl h-full">
          Get Quick Access to <br /> Hospitals in your Area
        </h3>
        <p className="text-lg font-normal text-center text-light-gray">
          Find the nearest hospital to you and make an appointment. Discover
          Your <br /> Perfect Care: Find Your Hospital, Anytime, Anywhere!
        </p>
        
      </div>
    </div>
  );
};

export default Header;
