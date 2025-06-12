import { functionTypes } from "./basics/function";

console.log("Function Types Example Sum : ", functionTypes.basicFunction(1, 2));

functionTypes
  .promiseReturnFunction(5, 2)
  .then((result) =>
    console.log("Promise Return Function Example Sum : ", result)
  );

type dummyObje={
    id:number;
    name:string;
    description:string | null;
}

const dummyObject: dummyObje = {
  id: 1,
  name: "Sample Object",

};

console.log("Dummy object ID :", dummyObject.id);
console.log("Dummy object Name :", dummyObject.name);
console.log("Dummy object Description :", dummyObject.description?.toUpperCase());