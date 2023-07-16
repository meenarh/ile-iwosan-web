import React from "react";
import { BeatLoader } from "react-spinners";

type LoadingSpinnerProps = {
  color: string;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
    }}
  >
    <BeatLoader color={color} />
  </div>
);

export default LoadingSpinner;
