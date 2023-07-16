import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";

type Props = {};

const Book = (props: Props) => {
  return (
    <div className="max-w-full justify-center overflow-x-hidden">
      <NavBar />
      <div className="flex flex-row">
        <Image
          src="/images/signup.png"
          alt=""
          width={700}
          height={850}
          className="hidden md:block"
        />

        <div className="p-10">
          <h3 className="text-black font-bold text-4xl">
            Book an appointment with some of our best doctors
          </h3>
          <form action="" className="flex flex-col gap-6 pt-10">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-black font-medium text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g John Doe"
                  className="p-4 rounded-lg border-2 border-gray w-[291px] placeholder:text-sm placeholder:text-gray placeholder:font-normal outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black font-medium text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="p-4 rounded-lg border-2 border-gray w-[291px] placeholder:text-sm placeholder:text-gray placeholder:font-normal outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-medium text-sm">
                Choose Hospital
              </label>
              <select className="p-4 rounded-lg border-2 border-gray md:w-[608px] w-[300px] outline-none">
               <option value="" className="text-gray font-normal text-sm">
               Select Hospital
               </option>
               <option value="" className="text-gray font-normal text-sm">Sheldon Health Center</option>
               <option value="" className="text-gray font-normal text-sm">Seidman Cancer Center</option>
               <option value="" className="text-gray font-normal text-sm">Chinook  Regional Hospital</option>
               <option value="" className="text-gray font-normal text-sm">Mayo Clinic</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-medium text-sm">
              Choose Department
              </label>
              <select className="p-4 rounded-lg border-2 border-gray md:w-[608px] w-[300px] outline-none">
               <option value="" className="text-gray font-normal text-sm">
               Select Department
               </option>
               <option value="" className="text-gray font-normal text-sm">Radiology</option>
               <option value="" className="text-gray font-normal text-sm">Pediatrics</option>
               <option value="" className="text-gray font-normal text-sm">Maternity</option>
               <option value="" className="text-gray font-normal text-sm">Dentistry</option>
              </select>
            </div>

            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-black font-medium text-sm">
                Date
                </label>
                <input
                  type="date"
                  placeholder="e.g John Doe"
                  className="p-4 rounded-lg border-2 border-gray w-[291px] placeholder:text-sm placeholder:text-gray placeholder:font-normal outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black font-medium text-sm">
                  Time
                </label>
                <input
                  type="time"
                  placeholder="example@gmail.com"
                  className="p-4 rounded-lg border-2 border-gray w-[291px] placeholder:text-sm placeholder:text-gray placeholder:font-normal outline-none"
                />
              </div>
            </div>

            <div className="flex items-start pt-10">
              <button className="bg-blue text-white font-medium text-lg py-4 px-8 rounded-lg">
              Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
