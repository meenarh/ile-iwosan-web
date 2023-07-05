import React from "react";
import ReviewItems from "@/app/(components)/ReviewItems";

interface ReviewData {
  image: string;
  name: string;
  rating: JSX.Element | string | number;
  comment: string;
}

interface ReviewSliderProps {
  reviews: ReviewData[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-300 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ReviewItems image={review.image} name={review.name} rating={review.rating} comment={review.comment} />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className="px-4 py-2 bg-blue text-white rounded-lg"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="ml-4 px-4 py-2 bg-blue text-white rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
