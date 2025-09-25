import React from "react";

const Managment = () => {
  return (
    <div>
      <div className="container mx-auto my-9 grid grid-cols-2 gap-10">
        <div className="rounded-md bg-purple-500 h-[200px] text-white flex flex-col justify-center items-center">
          <p className="text-3xl mb-3">In-progress</p>
          <p className="text-5xl font-bold">0</p>
        </div>

        <div className="rounded-md bg-green-500 h-[200px] text-white flex flex-col justify-center items-center">
          <p className="text-3xl mb-3">Resolved</p>
          <p className="text-5xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Managment;
