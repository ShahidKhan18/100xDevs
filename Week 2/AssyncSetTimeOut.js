//!Assync Behavior of JS using setTimeOut()

console.log("Script Start");


//? setTimeOut --> callback function is called in WebAPIs and it's returned to Callback queue after 1 sec of completion it's Execution , now eventloop watch is JS thread is free or not if thred is free then callback queue funtion goes inside the stack and called there. 



// setTimeout(()=>{
//     console.log("Callback Function of SetTimeOut")
// },1000)

// console.log("Script End");
// debugger;    

console.log("Hii");

// setTimeout(() => {
//   console.log("Inside 1st setTimeOut");
//   setTimeout(() => {
//     console.log("Inside 2nd setTimeOut");
//   }, 1000);
// }, 2000);

// console.log("Script Start");
// setTimeout(function a() {
//   console.log("From a");
// }, 1000);
// setTimeout(function b() {
//   console.log("From b");
// }, 1000);
// setTimeout(function c() {
//   console.log("From c");
// }, 1000);

// setTimeout(function d() {
//   console.log("From d");
// }, 1000);
// console.log("Script End");

console.log("Script Start");
setTimeout(function a() {
  console.log("From a");
  setTimeout(function b() {
    console.log("From b");
    setTimeout(function c() {
      console.log("From c");
      setTimeout(function d() {
        console.log("From d");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log("Hello");