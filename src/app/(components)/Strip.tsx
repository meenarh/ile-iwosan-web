"use client";
import React from "react";
import {
  MagnifyingGlass,
  Stethoscope,
  Heart,
  ShareNetwork,
} from "@phosphor-icons/react";

type Props = {
  icon: JSX.Element | string;
  title: string;
  description: string;
};

type StripItemProps = {
  icon: JSX.Element | string;
  title: string;
  description: string;
};

const StripItem: React.FC<StripItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-col gap-3">
    <div className="bg-white w-10 h-10 p-[10px] rounded-full items-center">
      {icon}
    </div>
    <h5 className="text-lg font-medium text-white">{title}</h5>
    <p className="text-light-gray text-sm font-normal">{description}</p>
  </div>
);

const Strip: React.FC = () => {
  const strips: Props[] = [
    {
      icon: <MagnifyingGlass size={20} color="#016FEB" />,
      title: "Search Hospitals",
      description: "Find the best hospitals near you without any hassle",
    },
    {
      icon: <Stethoscope size={20} color="#016FEB" />,
      title: "Access The Best Doctors",
      description:
        "Get full access to the best doctors in the market to attend to you.",
    },
    {
      icon: <Heart size={20} color="#016FEB" />,
      title: "Favorite Hospitals",
      description: "Always gain access to your favorite hospitals anytime.",
    },
    {
      icon: <ShareNetwork size={20} color="#016FEB" />,
      title: "Share Hospitals",
      description:
        "Introduce your friends to hospitals you like for the best treatment.",
    },
  ];
  return (
    <div className="bg-blue py-10 px-20 max-w-full justify-center flex md:flex-row flex-col gap-16">
      {strips.map((strip, index) => (
        <StripItem key={index} {...strip} />
      ))}
    </div>
  );
};

export default Strip;
