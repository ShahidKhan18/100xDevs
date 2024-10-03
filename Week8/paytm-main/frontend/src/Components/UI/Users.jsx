import React, { useState } from 'react'
import User from './User';

const Users = ({ users, getUsers }) => {
  console.log(users);
  const [search, setSearch] = useState("");
  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Users</h2>
      <input
        className="border-gray border-2 w-full px-2 py-1 rounded-md font-semibold"
        type="text"
        placeholder="Search users..."
        onChange={(e)=>{
        e.target.value
          ? getUsers(
              "https://paytmbackend-ak0n.onrender.com/api/v1/user/bulk?filter=" +
                e.target.value
            )
          : getUsers(
              "https://paytmbackend-ak0n.onrender.com/api/v1/user/bulk"
            );
        }}
      />
      <div className="users mt-4 flex flex-col gap-6">
        {users.map((user, index) => (
          <User
            key={user?._id}
            name={user?.firstName + " " + user?.lastName}
            id={user?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users