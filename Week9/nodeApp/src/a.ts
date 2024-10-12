let x:number=1;
x=2.343
console.log(x)



const greets=(name:string):void=>{
  console.log("Hello "+name)
// !  return name can not return cause return type is void
}

greets("Shahid");
// ! greets(1);  show Error cause we pass number as argument

const sum=(a:number,b:number):number=>{
    return a+b;
}

// console.log(sum(2,1))

const isLegal=(age:number)=>{
    return age>=18
}

console.log(isLegal(12))

const fun1=(fun2:()=>void)=>{
     setTimeout(fun2,1000)
}



fun1(()=>{
    console.log("hello from 2 Function")
});

interface User {
 firstName:string,
 lastName:string,
 age:number
}

const isLegal2=(user:User):boolean=>{
 return user.age>18
}

const legal=isLegal2({
    firstName: "John",
    lastName:"Wick",
    age:18
});

console.log(legal)

//- Use of interfaces in CLASS

interface Person{
    name:string;
    age:number;
    greet(phrase:string):void;
};


class  Employee implements Person{
  name:string;
  age:number;

  constructor(n:string,a:number){
    this.name=n;
    this.age=a
 }

 greet(phrase:string){
    console.log(`${phrase} ${name}`)
 }

}


type User1 = {
  firstName: string;
  lastName: string;
  age: number;
};

//- Use of UNION

type printIdArgs=number | string;

const printId1=(id:printIdArgs)=>{
 console.log(id)
}
const printId=(id:number | string)=>{
 console.log(id)
}

printId(1)
printId("1")


//- Use of INTERSECTION

type Employee1={
    name:string,
    startDate:Date
}
type Manager={
    name:string,
    department:string
}


type TeamLead=Employee1 & Manager;

const teamLead:TeamLead={
    name:"Shahid",
    startDate:new Date(),
    department:"SDE"
}

const maxValue=(arr:number[])=>{
    let maxi=-1;
 for(let x of arr){
    maxi=Math.max(maxi,x);
 }
 return maxi;
}

maxValue([1,2,3,4,5,6,7,8])

//- Enums

enum Direction{
    Up,
    Down,
    Left,
    Right
}

const doSomeThing=(keyPressed:Direction)=>{
     if(keyPressed==Direction.Up){

     }
}


doSomeThing(Direction.Up)

//- Generics

const printSomething=<T>(x:T)=>{
   console.log(x);
}

printSomething<number>(1)
printSomething<string>("1")


function getFirstElement<T>(x:T[]){
  return x[0];
}

const el=getFirstElement<string>(["a", "b", "c"]);
console.log(el.toUpperCase())
const e2=getFirstElement<number>([1,2,3,4,5]);