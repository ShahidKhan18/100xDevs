//? 1 --> Without using Promiss It does not returned any thing

//* We can not create directly a assunc function so we use wrapper function where we call built in assync function like setTimeout etc...


const myOwnSetTimeOut=(cb,duration)=>{
     console.log("From own Assync Function");
     setTimeout(cb,duration);
}

myOwnSetTimeOut(function(){
  console.log("Calling from callback ");
},1000)


//? 2 --> Using Prommise it also returned promisse


const promissifiedMyOunSetTimeout=(duration)=>{
    let p=new Promise(function(resolve){
        setTimeout(resolve,duration);
        //  or
        //* setTimeout(function(){
        //*    resolve();
        //* },1000)
    });
  return p;
}

const ans=promissifiedMyOunSetTimeout(1000);
ans.then(function(){
    console.log("From Set TimeOut ")
})


//!  by using promissified we create a prommise and returned the promisse which is called after after resolves 


