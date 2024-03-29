// const e = require("express");
// const express =require("express");
// // const bodyParser=require("body-parser");
// const app=express();

// const users=[
//     {
//           name:"Shahid",
//           kidneys:[
//             {
//                 healthy:false
//             }
//           ]
//     },
// ]

// //! It is used to Excess Body json using Post Method
// app.use(express.json());
// app.get("/",(req,res)=>{
//     const sidKidney=users[0].kidneys;
//     const totalK=sidKidney.length;
//     const healthyK=sidKidney.filter(kid=>kid.healthy)
//     const healthykLen=healthyK.length;
//     const unhealthyK=totalK-healthykLen;

//     res.json({
//         totalK,
//         healthykLen,
//         unhealthyK
//     })
// })

// app.post("/",(req,res)=>{
//     let isHealthy=req.body.healthy;
//     users[0].kidneys.push(
//         {
//             healthy:isHealthy
//         }
//     )

//    res.json({
//     msg:"Done",
//    });

// })

// //* Change all kidneys to Healthy
// app.put("/",(req,res)=>{
//     users[0].kidneys.forEach(ked=>ked.healthy=true)
//     res.json({
//      msg:"Change to all Kedneys Healthy",
//     });
// })

// //* Removing all false kidneys
// app.delete("/",(req,res)=>{
//     const newKid=users[0].kidneys.filter(kid=>kid.healthy)
//     users[0].kidneys=newKid;

//     res.json({
//     msg:"Delete false kidneys",
//     });
// })

// app.listen(3001,()=>{
//     console.log("App started");
// })

const express = require("express");
const app = express();

const users = [
  {
    name: "Jhon",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy:true
      },
      {
        healthy:true
      },
    ],
  },
];

app.get("/", (req, res) => {
    var totalkidenys=users[0].kidneys.length;
    var healthyKidney = users[0].kidneys.filter((kid)=>kid.healthy).length;
    var unHealthyKidney=totalkidenys-healthyKidney; 
    res.json({
        totalkidenys,
        healthyKidney,
        unHealthyKidney
    })
});

// -Middlewares
app.use(express.json());
app.post("/", (req, res) => {
    const isHealthy=req.body.isHealthy;

    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Kidney Added"
    })
});


//+ Make all Kineys to Healthy
app.put("/", (req, res) => {
     const allHealthyKineys =users[0].kidneys.map((kid)=>{
        if(kid.healthy)
         return kid;
        else{
            kid.healthy = true;
            return kid;
        }
     })

     users[0].kidneys=allHealthyKineys;

     res.send({
        msg:"All Kidneys are Healthy Now"
     })
});



app.delete("/", (req, res) => {
   const onlyHealtyKidneys=users[0].kidneys.filter((kid)=>kid.healthy)
   if (users[0].kidneys.length===onlyHealtyKidneys.length)
     return res.status(401).json({error:"No any kideys are unhealthy"})
   users[0].kidneys=onlyHealtyKidneys;
     res.json({
       msg: "Deleted all Unhelthy Kidneys",
     });
});

app.listen("3000", () => {
  console.log("App started on Port 3000");
});
