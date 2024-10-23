import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstname: firstName,
      lastname: lastName,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });

  console.log(res);
}
// insertUser("sid@gmail.com","sid123","sid","Khan");

interface User {
  firstname: string;
  lastname: string;
}

const updateUser = async (email: string, { firstname, lastname }: User) => {
  const res = await prisma.user.update({
    where: { email },
    data: {
      firstname,
      lastname,
    },
  });
  console.log(res);
};

// updateUser("sid@gmail.com",{firstname:"shahid",lastname:"Khan"})

const getUser = async (email: string) => {
  const res = await prisma.user.findUnique({
    where: { email },
  });

  console.log(res);
};

// getUser("sid@gmail.com")
interface Todo {
  id?: number;
  title: string;
  description: string;
  done?: boolean;
  userId: number;
}

const createTodo = async ({ title, description, userId }: Todo) => {
  const res = await prisma.todos.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(res);
};

// createTodo({
//   title: "go to gym",
//   description: "go to gym and do 10 pushups",
//   userId: 1,
// });

const getTodos=async (userId:number)=>{
   const res=await prisma.todos.findMany({
    where:{userId}
   })
   console.log(res);
}
// getTodos(1);

const getTodosAndUserDetails=async (userId:number)=>{
  const res=await prisma.user.findFirst({
    where:{id:userId},
    select:{
      email:true,
      firstname:true,
      lastname:true,
      todos:true
    }
  })
  console.log(res);
}

getTodosAndUserDetails(1);