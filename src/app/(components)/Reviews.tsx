"use client";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  rating: JSX.Element | string | number;
  comment: string;
};

type ReviewItemProps = {
  image: string;
  name: string;
  rating: JSX.Element | string | number;
  comment: string;
};

const ReviewItem: React.FC<ReviewItemProps> = ({
  image,
  name,
  rating,
  comment,
}) => (
  <div className="flex flex-col gap-3 w-[370px] h-fit p-5 bg-primary rounded-2xl">
    <div className="flex flex-row gap-3">
      <Image
        src={image}
        alt=""
        width={46}
        height={46}
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <h4 className="text-black font-bold text-lg">{name}</h4>
        <p className="text-orange font-normal text-sm flex flex-row gap-2">
          {rating}
        </p>
      </div>
    </div>
    <p className="text-black font-normal text-sm">{comment}</p>
  </div>
);

const Reviews: React.FC = () => {
  const reviews: Props[] = [
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
  return (
    <div className="flex flex-col gap-10 py-10">
      <h4 className="px-20 text-black text-2xl font-bold">
        Customer Reviews
      </h4>

      <div className="flex flex-row gap-5">
        {reviews.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
