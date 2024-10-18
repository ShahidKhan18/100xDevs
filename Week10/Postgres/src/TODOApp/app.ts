import { updateUser } from "../CRUDAPP/user";
import { createUser,createTodoByUserId,deleteTodoById,getTodoByUserId,getUserByEmail,getUserById,getUsers, markTodoCompletedById } from "./todo";

const runApp=async()=>{
   try {
    //   const response=await createUser(
    //     {email:"shahil@gmail.com",password:"shailvk18"});
    //     console.log("Data Inserted into table", response);
    let userID:number=1

    // const response =await createTodoByUserId(userID,{
    //     title:"Go to College",
    //     description:"Submit your research paper and Project Report",
    //     done:false
    // })

    // const users=await getUsers()
    // console.log(users);

    // const user=await getUserById(1)
    // console.log(user);
    
    // console.log(await getUserByEmail("sid@gmail.com"));

    // await markTodoCompletedById(1)
    // const todos=await getTodoByUserId(userID)
    // console.log(todos);

    


    // console.log("TODO added successfully for user ID :", userID);
   } catch (error:any) {
     console.log("Error : ",error.message)
     console.log(error)
   }
}

runApp();