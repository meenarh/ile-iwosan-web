'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import { fetchProviders } from "@/api/hospitals";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";

type Hospital = {
  image: string;
  name: string;
  address: string;
  rating: number;
  icon: JSX.Element;
};

type HospitalItemProps = {
  hospital: Hospital;
};

const HospitalItem: React.FC<HospitalItemProps> = ({
  hospital: { image, name, address, rating, icon },
}) => (
  <div className="flex flex-col gap-3">
    <Image src={image} alt="" width={350} height={230} className="rounded-lg" />
    <h4 className="text-black font-medium text-xl">{name}</h4>
    <p className="text-grey text-sm">{address}</p>
    <p className="text-black font-medium text-sm flex flex-row gap-2">
      {icon}
      {rating}
    </p>
  </div>
);

const Hospitals: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProviders();
        if (response && response.status === "success" && response.data) {
          const data = response.data;
          const shuffledData = shuffleArray(data);
          const selectedHospitals = shuffledData
            .slice(0, 8)
            .map((item: any) => ({
              image: "/images/imgg.avif",
              name: item.name || "",
              address: item.address || "",
              rating: 4.5,
              icon: <Star size={20} color="#E18A31" />,
            }));
          setHospitals(selectedHospitals);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <div className="md:py-10 md:px-20 max-w-full justify-center">
      <h2 className="text-black text-2xl text-center font-bold">
        Hospitals near you
      </h2>

      {loading ? (
               <LoadingSpinner color="#0E4EE6" />

      ) : (
        <div className="grid grid-cols-4 gap-10 py-10">
          {hospitals.map((hospital, index) => (
            <HospitalItem key={index} hospital={hospital} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center">
        <button className="bg-blue text-white rounded-md m-auto h-12 w-[150px] justify-center">
        <Link
                href="/more"
                className=""
              >
                Explore More
              </Link>
        </button>
      </div>
    </div>
  );
};

export default Hospitals;
