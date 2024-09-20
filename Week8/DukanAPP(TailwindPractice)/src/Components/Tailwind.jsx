import React from "react";

const Tailwind = () => {
  return (
    <>
      <div className="h-screen w-full p-6 overflow-hidden ">
        {/* <Flexbox />
        <Grid /> */}
        <ResponsiveBrePoints />
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

const ResponsiveBrePoints = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="res w-full bg-red-500">Box 1</div>
        <div className="res w-full bg-blue-500">Box 1</div>
        <div className="res w-full bg-yellow-500">Box 1</div>
      </div>
    </>
  );
};

export default Tailwind;
