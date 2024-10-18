import { createUser,updateUser,deleteUser,getUserById, getAllUsers } from "./user";

import { closePool } from "./db";

const runApp=async()=>{
try {
    // const newUser=await createUser({
    //     username:"shahil",
    //     email:"shahil@gmail.com",
    //     password:"sidvk18"
    // })

    // console.log("New user Create : ",newUser)

    let userById=await getUserById(1);
    console.log(userById)
    let allUsers = await getAllUsers();
    console.log(allUsers);

} catch (error:any) {
    const { message, detail } = error;
    console.error("Error : ", message);
  detail?  console.error("Details : ", detail):console.error(error)
} finally {
  await closePool();
}
}
runApp();



