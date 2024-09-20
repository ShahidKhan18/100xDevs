import { useState } from 'react'
import Tailwind from './Components/Tailwind'
import RevenueCard from './Components/RevenueCard'


function App() {
  

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 p-6">
      <RevenueCard title={"Amount Pending"} amount={"₹92,312.20"} countOrders={13} />
    </div>
  );
}

export default App
