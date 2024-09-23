import React from 'react'

const User = ({name}) => {
  return (
    <div className="user flex justify-between items-center ">
      <div className="profile flex gap-4 items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <div>{name || "User 1"}</div>
      </div>
      <button className="bg-slate-800  text-white px-4 rounded-md outline-none border-none py-1 shadow-md  hover:bg-slate-600 ease-in-out delay-75  focus:ring-0 focus:outline-red-800">
        Send Money
      </button>
    </div>
  );
}

export default User