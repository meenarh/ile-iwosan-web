"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { fetchProviders } from "@/api/hospitals"; // Import the fetchProviders function from the separate file
import { CSVLink } from "react-csv";
import LoadingSpinner from "@/components/LoadingSpinner";
import Papa from "papaparse";

type Provider = {
  name: string;
  address: string;
};

const ExploreMore = () => {
  const [loading, setLoading] = useState(true);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const providersPerPage = 12;
  const pageDisplayLimit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProviders();

      if (response && response.status === "success" && response.data) {
        const data = response.data;
        const fetchedProviders: Provider[] = data.map((item: any) => ({
          name: item.name || "",
          address: item.address || "",
        }));
        setLoading(false);

        setProviders(fetchedProviders);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProvider = currentPage * providersPerPage;
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage;
  const currentProviders = filteredProviders.slice(
    indexOfFirstProvider,
    indexOfLastProvider
  );

  const totalPages = Math.ceil(filteredProviders.length / providersPerPage);

  const renderPageButtons = () => {
    const pageButtons = [];

    if (totalPages <= pageDisplayLimit) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`px-3 py-2 rounded-lg mx-2 ${
              i === currentPage
                ? "bg-blue text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      const maxPages = Math.min(pageDisplayLimit, totalPages);
      const halfDisplayLimit = Math.floor(pageDisplayLimit / 2);

      if (currentPage <= halfDisplayLimit) {
        for (let i = 1; i <= maxPages; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`px-3 py-2 rounded-lg mx-2 ${
                i === currentPage
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
        pageButtons.push(
          <button
            key={maxPages + 1}
            className="px-3 py-2 rounded-lg mx-2 bg-gray-200 text-gray-600"
            disabled
          >
            ...
          </button>
        );
      } else if (currentPage > totalPages - halfDisplayLimit) {
        pageButtons.push(
          <button
            key={1}
            className="px-3 py-2 rounded-lg mx-2 bg-gray-200 text-gray-600"
            disabled
          >
            ...
          </button>
        );
        for (let i = totalPages - maxPages + 1; i <= totalPages; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`px-3 py-2 rounded-lg mx-2 ${
                i === currentPage
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        pageButtons.push(
          <button
            key={1}
            className="px-3 py-2 rounded-lg mx-2 bg-gray-200 text-gray-600"
            disabled
          >
            ...
          </button>
        );
        for (
          let i = currentPage - halfDisplayLimit;
          i <= currentPage + halfDisplayLimit;
          i++
        ) {
          pageButtons.push(
            <button
              key={i}
              className={`px-3 py-2 rounded-lg mx-2 ${
                i === currentPage
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
        pageButtons.push(
          <button
            key={totalPages}
            className="px-3 py-2 rounded-lg mx-2 bg-gray-200 text-gray-600"
            disabled
          >
            ...
          </button>
        );
      }
    }

    return pageButtons;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleExport = () => {
    const csvData = currentProviders.map((provider) => ({
      Name: provider.name,
      Address: provider.address,
    }));

    const csvHeaders = [
      { label: "Name", key: "Name" },
      { label: "Address", key: "Address" },
    ];

    const csv = Papa.unparse({
      fields: csvHeaders.map((header) => header.label),
      data: csvData,
    });

    const csvDataUri = encodeURI("data:text/csv;charset=utf-8," + csv);

    const link = document.createElement("a");
    link.href = csvDataUri;
    link.target = "_blank";
    link.download = "providers.csv";
    link.click();
  };

  const handleShare = () => {
    const emailSubject = "Check out these healthcare providers";
    const emailBody = `Here are some healthcare providers you might be interested in: \n\n${currentProviders
      .map((provider) => `${provider.name} - ${provider.address}`)
      .join("\n")}`;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-full justify-center">
        <div className="flex flex-col gap-3 bg-[url(/images/header.png)] bg-cover bg-center bg-no-repeat h-full md:pt-32 md:pb-[200px] py-10 px-2">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search by name or address"
              value={searchTerm}
              onChange={handleSearch}
              className="md:w-[650px] w-[450px] rounded-2xl m-auto py-6 px-8 top-10 bg-white shadow-md placeholder:text-sm placeholder:text-deep-gray placeholder-opacity-50 placeholder:first-letter:font-normal placeholder:font-normal placeholder:pl-2 outline-none"
            />
          </div>
        </div>
      </div>
      <div className="px-[5rem]">
        {loading && <LoadingSpinner color="#0e4ee6" />}
        <div className={`grid md:grid-cols-4 grid-rows-1 mt-[3%] gap-5`}>
          {currentProviders.map((provider, index) => (
            <div
              className="p-4 shadow-xl rounded-xl h-min[25%] flex flex-col gap-5"
              key={index}
            >
              <div>
                <Image
                  src="/images/hospital.png"
                  alt="hospital"
                  width={100}
                  height={100}
                  className="w-full h-[55%] object-cover rounded-md"
                />
                <h3 className="text-xl font-medium mt-2 text-black capitalize">
                  {provider.name}
                </h3>
                <p className="mt-1 text-grey text-sm capitalize">
                  {provider.address}
                </p>
              </div>
              <div className="w-full flex gap-5">
                <button
                  className="bg-blue text-white px-4 py-2 basis-1/2 rounded-xl"
                  onClick={handleExport}
                >
                  Export
                </button>
                <button
                  className="text-white bg-black px-4 py-2 basis-1/2 rounded-xl"
                  onClick={handleShare}
                >
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 w-full">
          {currentPage > 1 && (
            <button
              className="px-3 py-2 rounded-lg mx-2 bg-blue text-white"
              onClick={handlePreviousPage}
            >
              Previous
            </button>
          )}
          {renderPageButtons()}
          {currentPage < totalPages && (
            <button
              className="px-3 py-2 rounded-lg mx-2 bg-blue text-white"
              onClick={handleNextPage}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
