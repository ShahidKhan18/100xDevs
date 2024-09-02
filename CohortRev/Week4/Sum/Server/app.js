const express=require('express');
const cors=require('cors')

const app=express();

app.use(cors())
app.get('/sum',(req,res)=>{
    const a=req.query.a;
    const b=req.query.b;
    const sum = parseInt(a) + parseInt(b);
    console.log(sum)
    res.json({sum})
})

app.get("/simpleInterest/:principle/:rate/:time", (req, res) => {
    
    const principle=parseFloat(req.params.principle);
    const rate=parseFloat(req.params.rate);
    const time=parseFloat(req.params.time);
    const interest=(principle*rate*time)/100;
    const totalAmount = interest + principle;
    console.log(principle, interest,rate)

    res.json({
        interest,
        totalAmount
    })
});

app.listen(3000,()=>{
    console.log('listening on port 3000')
})
