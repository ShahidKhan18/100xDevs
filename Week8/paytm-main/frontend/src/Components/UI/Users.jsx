import React from 'react'
import User from './User';

const Users = ({users}) => {
    console.log(users)
  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Users</h2>
      <input
        className="border-gray border-2 w-full px-2 py-1 rounded-md font-semibold"
        type="text"
        placeholder="Search users..."
      />
      <div className="users mt-4 flex flex-col gap-6">
        {users.map((user,index) => (
          <User key={index} name={user?.name} />
        ))}
      </div>
    </div>
  );
}

export default Users