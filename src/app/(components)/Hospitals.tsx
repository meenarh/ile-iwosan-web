"use client";
import React from "react";
import Image from "next/image";
import { Star } from "@phosphor-icons/react";

type Hospital = {
  image: string;
  name: string;
  location: string;
  rating: number;
  icon: JSX.Element;
};

type HospitalItemProps = {
  image: string;
  name: string;
  location: string;
  rating: number;
  icon: JSX.Element;
};

const HospitalItem: React.FC<HospitalItemProps> = ({
  image,
  name,
  location,
  rating,
  icon,
}) => (
  <div className="flex flex-col gap-3">
    <Image src={image} alt="" width={350} height={230} className="rounded-lg" />
    <h4 className="text-black font-medium text-xl">{name}</h4>
    <p className="text-grey text-sm">{location}</p>
    <p className="text-black font-medium text-sm flex flex-row gap-2">
      {icon}
      {rating}
    </p>
  </div>
);

const Hospitals: React.FC = () => {
  const hospitals: Hospital[] = [
    {
      image: "/images/image 1.png",
      name: "Seidman Cancer Center",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
    {
      image: "/images/image 2.png",
      name: "Sheldon Health Center",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
    {
      image: "/images/image 3.png",
      name: "Mayo Clinic",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
    {
      image: "/images/image 4.png",
      name: "Chinook  Regional Hospital",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
    {
      image: "/images/image 5.png",
      name: "Seidman Cancer Center",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
    {
      image: "/images/image 6.png",
      name: "Sheldon Health Center",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
    {
      image: "/images/image 7.png",
      name: "Mayo Clinic",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
    {
      image: "/images/image 8.png",
      name: "Chinook  Regional Hospital",
      location: "Lekki, Lagos",
      rating: 4.5,
      icon: <Star size={20} color="#E18A31" />,
    },
  ];

  return (
    <div className="md:py-10 md:px-20 max-w-full justify-center">
      <h2 className="text-black text-2xl text-center font-bold">
        Hospitals near you
      </h2>

      <div className="grid grid-cols-4 gap-10 py-10">
        {hospitals.map((hospitals, index) => (
          <HospitalItem key={index} {...hospitals} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-blue text-white rounded-md m-auto h-12 w-[150px] justify-center">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hospitals;
