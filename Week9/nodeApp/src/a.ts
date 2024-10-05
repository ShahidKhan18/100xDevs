// let x:number=1;
// x=2.343
// console.log(x)

import { set } from "mongoose";

const greets=(name:string)=>{
  console.log("Hello "+name)
}

// greets("Shahid");
// greets(1);

const sum=(a:number,b:number):number=>{
    return a+b;
}

// console.log(sum(2,1))

const isLegal=(user:User)=>{
    return user.age>=18
}

console.log(isLegal({
    firstName:"shahid",
    lastName:"Khan",
    age:19
}))

const fun1=(fun2:()=>void)=>{
     setTimeout(fun2,1000)
}

const fun2=()=>{
    console.log("From function 2")
}


interface User {
 firstName:string,
 lastName:string,
 age:number
}

