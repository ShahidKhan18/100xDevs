import React from 'react'

const SiginLoader = ({msg}) => {
  return (
    <div>
      <div className="flex justify-center items-center w-full fixed inset-0 bg-opacity-30 bg-transparent backdrop-blur-sm">
        <div className="message font-extrabold text-3xl text-blue-950 uppercase animate-pulse">
         {msg}
        </div>
      </div>
    </div>
  );
}

export default SiginLoader