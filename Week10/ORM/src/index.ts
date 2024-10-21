import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
   const res=await  prisma.user.create({
        data:{
            email:username,
            password,
            firstname:firstName,
            lastname:lastName
        },
        select:{
            id:true,
            email:true,password:true 
        }

    })

    console.log(res);
}
// insertUser("sid@gmail.com","sid123","sid","Khan");

interface User{
  firstname:string,
  lastname:string,
}

const updateUser=async(email:string,{firstname,lastname}:User)=>{
 const res=await prisma.user.update({
    where:{email},
    data:{
        firstname,
        lastname
    }
 })
 console.log(res);
}

// updateUser("sid@gmail.com",{firstname:"shahid",lastname:"Khan"})





const getUser=async(email:string)=>{
   const res=await prisma.user.findUnique({
    where:{email}
   })

   console.log(res);
}

getUser("sid@gmail.com")





