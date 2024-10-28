interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

//+ Pick
//? type AgeSum=Pick<User, 'name' | 'age'>
//+Partial
type AgeSum = Partial<Pick<User, "name" | "age">>;
const sumOfAge = (user1: AgeSum, user2: AgeSum): number => {
  return (user1.age || 0) + (user2.age || 0);
};

console.log(
  sumOfAge(
    {
      name: "User1",
      age: 20,
    },
    {
      name: "User2",
      age: 30,
    }
  )
);

//+ Record And Map

//- Easy way

type Users1 = { [key: string]: AgeSum };

const users1: Users1 = {
  abc1: {
    name: "abc1",
    age: 20,
  },
  abc2: {
    name: "abc2",
    age: 20,
  },
};

//- Using Records

type Users2 = Record<string, AgeSum>;

const users2: Users2 = {
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

const userMap = new Map<string, AgeSum>();

userMap.set("abc1", { name: "abc1", age: 20,});
userMap.set("abc2", { name: "abc2", age: 30,});

console.log(userMap.get("abc1")?.name)
