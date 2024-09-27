import React from 'react'

const Appbar = ({user,tokenRemover}) => {
  return (
    <div className="flex justify-between items-center border-gray shadow-lg border-b-2 p-4">
      <div className="logo text-2xl font-bold">Payments App</div>
      <div className="text-slate-600 font-semibold flex gap-4 justify-center items-center">
        Hello, {user}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      <button className='cursor-pointer bg-slate-800 text-white px-2 py-1 rounded-lg hover:bg-slate-600' onClick={()=>{
        tokenRemover();
        
      }}>Logout</button>
      </div>
    </div>
  );
}

export default Appbar