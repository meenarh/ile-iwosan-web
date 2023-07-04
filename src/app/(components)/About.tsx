'use client'
import React from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="px-20 py-10">
      <h5 className="uppercase text-blue text-sm font-medium my-2">About Us</h5>
      <div className="flex flex-row gap-6 items-start">
        <h3 className="text-3xl font-bold text-black">
          We aim to provide easy access to the best health care services
        </h3>
        <div className="flex flex-col gap-3 md: w-1/2">
          <p className="text-gray font-normal text-lg">
            Carefinder is a platform where users can search for hosiptals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <p className="text-blue text-sm font-medium flex flex-row gap-3">View our services <ArrowRight color="#016FEB" size={20} /></p>
        </div>
      </div>

      <Image src='/images/about.png' alt="" width={1280} height={500} className="py-16" />
    </div>
  );
};

export default About;
