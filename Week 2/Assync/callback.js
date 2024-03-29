const sqr =n=>n*n;
const cube =n=>n*n*n;

cons t sumOfAnyThing=(a,b,callback)=>{
    let val1=callback(a);
    let val2=callback(b);

    return val1+val2;
}

console.log(sumOfAnyThing(2,3,sqr));
console.log(sumOfAnyThing(2,3,cube));