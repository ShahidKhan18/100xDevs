import { query,pool } from "./db";

interface User{
    id?:number,
    email:string,
    password:string
}

interface Todo{
    id?:number,
    title:string,
    description:string,
    user_id?:number,
    done:boolean
}

type SafeUser= Omit<User,"password">

// =====================================================

export const getUsers = async (): Promise<SafeUser[]> => {
  const queryText = `
  SELECT * from usersTODO;
  `;
  const users = await query(queryText);
  return users.map((user:User)=>{
    const {password,...safeUser}=user;
    return safeUser
  })
};

export const getUserById=async(userId:number):Promise<SafeUser>=>{
    const queryText=`
      SELECT * from usersTODO
      where id=$1;
    `;
    const user=await query(queryText,[userId]);
    const {password,...safeUser}=user[0];
    return safeUser;
}
export const getUserByEmail=async(email:string):Promise<SafeUser>=>{
    const queryText=`
      SELECT * from usersTODO
      where email=$1;
    `;
    const user=await query(queryText,[email]);
    const {password,...safeUser}=user[0];
    return safeUser;
}


export const getTodoByUserId=async(userId:number):Promise<Todo[]>=>{
 const queryText=`
   SELECT * from todos
   WHERE user_id=$1;
 `;
  const todos=await query(queryText,[userId]);
  return todos;
}

// =====================================================

export const createUser=async(user:User):Promise<User>=>{
    const queryText=`
     INSERT into usersTODO (email,password)
     VALUES ($1,$2);
    `;
    const res=await query(queryText,[user.email,user.password]);

    return res;
}

export const createTodoByUserId=async(userId:number,todo:Todo):Promise<Todo>=>{
    const queryText=`
     INSERT into todos (title,description,user_id,done)
     VALUES ($1,$2,$3,$4);
    `;
    const res=await query(queryText,[todo.title,todo.description,userId,todo.done])
    return res;
}


// =====================================================

export const markTodoCompletedById=async(TodoId:number):Promise<Todo>=>{
    const queryText=`
       UPDATE todos SET done=$1 
       WHERE id=$2;
    `;
    const res=await query(queryText,[true,TodoId]);
    return res;
}

// =====================================================

export const deleteTodoById = async (TodoId: number): Promise<Todo> => {
  const queryText = `
       DELETE FROM todos 
       WHERE id=$1;
    `;
  const res = await query(queryText, [TodoId]);
  return res;
};















