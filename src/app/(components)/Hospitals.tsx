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
};

type HospitalItemProps = {
  hospital: Hospital;
};

const HospitalItem: React.FC<HospitalItemProps> = ({
  hospital: { image, name, address },
}) => (
  <div className="flex flex-col gap-4 shadow-xl md:p-4 p-2 justify-center w-[350px] md:w-full rounded-xl">
    <Image src={image} alt="hospital" width={350} height={230} className="rounded-md w-[300px] m-auto" />
    <h4 className="text-black font-medium text-xl capitalize">{name}</h4>
    <p className="text-grey text-sm capitalize">{address}</p>
   
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
              image: "/images/hospital.png",
              name: item.name || "",
              address: item.address || "",
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
    <div className="md:py-10 py-5 md:px-20 px-10 max-w-full justify-center">
      <h2 className="text-black text-2xl text-center font-bold">
        Hospitals near you
      </h2>

      {loading ? (
               <LoadingSpinner color="#0E4EE6" />

      ) : (
        <div className="grid md:grid-cols-4 grid-rows-1 gap-10 py-10">
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
