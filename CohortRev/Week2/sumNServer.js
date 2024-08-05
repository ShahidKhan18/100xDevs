const express=require('express');

const app=express();

const sumN=(n)=>{
    let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}

app.get('/',(req,res)=>{
    const n=req.query.n;
    const sum=sumN(n);
    res.send(`<b>${sum.toString()}</b>`);
})

app.listen(3000,()=>{
    console.log('listening on port 30000'); 
})