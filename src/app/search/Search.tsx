'use client'

import NavBar from "@/components/NavBar";
import React from "react";
import { MapPin } from "@phosphor-icons/react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="max-w-full justify-center">
      <NavBar isLoggedIn={false} />

      <div className="bg-[url(/images/header.png)] bg-cover bg-center bg-no-repeat h-full md:pt-[120px] md:pb-[120px] md:px-[390px] py-10 px-2">
        <div className="flex items-center relative">
          <MapPin
            className="absolute z-10 md:left-[10px]"
            size={24}
            color="#1E1E1E"
          />
          <input
            type="text"
            placeholder="Lagos"
            className="md:w-[650px] w-[350px] rounded-2xl m-auto py-6 px-8 top-10 bg-white shadow-md placeholder:text-sm placeholder:text-deep-gray placeholder-opacity-50 placeholder:first-letter:font-normal placeholder:font-normal placeholder:pl-2 outline-none"
          />
          <button className="bg-blue text-white absolute z-10 md:left-[530px] py-4 px-5 rounded-lg">
            Search
          </button>
        </div>
      </div>

      <div className="">
        <div className="flex ">

        </div>
      </div>
    </div>
  );
};

export default Search;
