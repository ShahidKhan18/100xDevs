import { createUser,updateUser,deleteUser,getUserById } from "./user";

import { closePool } from "./db";

const runApp=async()=>{
try {
    const newUser=await createUser({
        username:"shahid",
        email:"shahid@gmail.com",
        password:"sidvk18"
    })

    console.log("New user Create : ",newUser)
} catch (error:any) {
    const { message, detail } = error;
    console.error("Error : ", message);
    console.error("Details : ", detail);
} finally {
  await closePool();
}
}
runApp();



