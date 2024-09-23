import React from 'react'
import Appbar from './UI/Appbar'
import Input from './UI/Input'
import Balance from './UI/Balance'
import Users from './UI/Users'

const Dashboard = () => {
  return (
    <div>
      <Appbar user={"shahid"} />
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
        <Balance balance={5000} />
        <Users
          users={[{ name: "shahid" }, { name: "shahil" }, { name: "Fareed" }]}
        />
      </div>
    </div>
  );
}

export default Dashboard