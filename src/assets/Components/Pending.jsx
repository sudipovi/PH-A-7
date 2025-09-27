import React from "react";

const Pending = () => {
  return (
    <div>
      <div className="rounded-md shadow-md md:w-[500px] w-[400px] h-[100px] p-3 mb-5">
        <h1 className="font-bold text-xl mb-1"></h1>
        <button className="btn bg-green-600 text-white w-[100%]">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Pending;
