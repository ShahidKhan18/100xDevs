import React from "react";

const Tailwind = () => {
  return (
    <>
      <div className="p-6">
        <Flexbox />
        <Grid />
      </div>
    </>
  );
};

const Flexbox = () => {
  return (
    <div className="m-2 flex justify-evenly border-2 border-red-400 p-2 text-white">
      <div className="bg-red-600">This is Box 1</div>
      <div className="bg-blue-600">This is Box 2</div>
      <div className="bg-green-600"> This is Box 3</div>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="m-2 grid grid-cols-12 border-2 border-red-400 p-2 text-white">
      <div className="col-span-5 bg-red-600">This is Box 1</div>
      <div className="col-span-5 bg-blue-600">This is Box 2</div>
      <div className="col-span-2 bg-green-600"> This is Box 3</div>
    </div>
  );
};

export default Tailwind;
