import React from "react";

const Image = ({ imageSrc }) => {
  return (
    <div className="">
      <img
        src={imageSrc}
        className="mb-11 ml-3 border-2 border-gray-300"
        alt=""
      />
    </div>
  );
};
export default Image;
