"use client";
import React from "react";
import ReviewSlider from "@/components/ReviewSlider";

const reviews = [
  {
    image: "/images/review.png",
    name: "Jamie Frost",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Eget tempus et viverra nec facilisi diam faucibus augue lacus. Luctus et aliquet est vitae donec et. Sagittis natoque nunc non volutpat sed bibendum turpis. Senectus in nisl commodo feugiat non amet sem. Nunc hendrerit commodo nunc mollis tempus. Aenean egestas sociis libero orci lobortis nec accumsan pellentesque eget. Suspendisse eget mauris lacinia tellus nunc enim est habitasse aliquet.",
  },
  {
    image: "/images/review.png",
    name: "Jamie Frost",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Eget tempus et viverra nec facilisi diam faucibus augue lacus. Luctus et aliquet est vitae donec et. Sagittis natoque nunc non volutpat sed bibendum turpis. Senectus in nisl commodo feugiat non amet sem. Nunc hendrerit commodo nunc mollis tempus.",
  },
  {
    image: "/images/review.png",
    name: "Jamie Frost",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Eget tempus et viverra nec facilisi diam faucibus augue lacus. Luctus et aliquet est vitae donec et. Sagittis natoque nunc non volutpat sed bibendum turpis. Senectus in nisl commodo feugiat non amet sem. Nunc hendrerit commodo nunc mollis tempus. Aenean egestas sociis libero orci lobortis nec accumsan pellentesque eget. Suspendisse eget mauris lacinia tellus nunc enim est habitasse aliquet.",
  },
  {
    image: "/images/review.png",
    name: "Jamie Frost",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Eget tempus et viverra nec facilisi diam faucibus augue lacus. Luctus et aliquet est vitae donec et.",
  },
];


const Reviews: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 py-10">
      <h4 className="px-20 text-black text-2xl font-bold">
        Customer Reviews
      </h4>

      <div className="flex flex-row gap-5 px-20">
          <ReviewSlider reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;
