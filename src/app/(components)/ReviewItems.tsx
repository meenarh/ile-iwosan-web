import React from "react";
import Image from "next/image";

type ReviewItemProps = {
  image: string;
  name: string;
  rating: JSX.Element | string | number;
  comment: string;
};

const ReviewItems: React.FC<ReviewItemProps> = ({
  image,
  name,
  rating,
  comment,
}) => {
  return (
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
};

export default ReviewItems;
