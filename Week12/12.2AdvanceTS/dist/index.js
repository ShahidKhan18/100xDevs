"use strict";
var _a;
const sumOfAge = (user1, user2) => {
    return (user1.age || 0) + (user2.age || 0);
};
console.log(sumOfAge({
    name: "User1",
    age: 20,
}, {
    name: "User2",
    age: 30,
}));
const users1 = {
    abc1: {
        name: "abc1",
        age: 20,
    },
    abc2: {
        name: "abc2",
        age: 20,
    },
};
const users2 = {
    abc1: {
        name: "abc1",
        age: 20,
    },
    abc2: {
        name: "abc2",
        age: 20,
    },
};
//- And Best Way to That Using Map
const userMap = new Map();
userMap.set("abc1", { name: "abc1", age: 20, });
userMap.set("abc2", { name: "abc2", age: 30, });
console.log((_a = userMap.get("abc1")) === null || _a === void 0 ? void 0 : _a.name);
