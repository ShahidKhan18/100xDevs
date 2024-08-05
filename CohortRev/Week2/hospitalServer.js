const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    name: "Shahid",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy:true,
      }
    ],
  },
];

let checkUnhealthyKidneys = () => {
  for (let kid of users[0].kidneys) {
    if (!kid.healthy) return true;
  }
  return false;
};

app.get('/',(req,res)=>{
    const kidneys=users[0].kidneys;
    const healthyKidneys=kidneys.filter((kid)=>kid.healthy).length;
    const unHealthyKidneys=kidneys.length-healthyKidneys

    res.json({
        totalKidneys:kidneys.length,
        healthyKidneys,
        unHealthyKidneys
    })

})

app.post('/',(req,res)=>{
  const isHealthy=req.body.isHealthy;
  users[0].kidneys.push({
    healthy:isHealthy
  })

  res.json({
    success:"Data sent successfully"
  })
})

app.put('/',(req,res)=>{
  const allKidneys=users[0].kidneys.map((kid)=>{
      return kid.healthy?kid:{healthy:true}
  })
  
  users[0].kidneys=allKidneys;
 
  res.json({
    success:"Data updated successfully"
  })

})

app.delete('/',(req,res)=>{
  console.log(checkUnhealthyKidneys());
  if(checkUnhealthyKidneys()){
    const healtyKidneys=users[0].kidneys.filter((kid)=>kid.healthy)
    users[0].kidneys = healtyKidneys;
    res.json({success:"Data deleted successfully"})
  }else{
    res.status(404).json({ failed: "No Unhealthy Kidneys" });
  }

})



app.listen(3000, () => {
  console.log("listening on port 3000");
});
