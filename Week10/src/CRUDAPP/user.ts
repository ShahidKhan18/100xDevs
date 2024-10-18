import { query } from "./db";

interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  created_at?: Date;
}

type SafeUser=Omit<User,"password">;

export const createUser = async (user: User): Promise<User> => {
  const queryText = `
  INSERT INTO users (username,email,password) VALUES
  ($1,$2,$3);
  `;
  const result = await query(queryText, [
    user.username,
    user.email,
    user.password,
  ]);
  return result;
};

export const getUserById = async (userId: number): Promise<SafeUser | null> => {
  const queryText = `
    SELECT * FROM users WHERE 
    id=$1;
    `;
  const result = await query(queryText, [userId]);
  const user=  result.length > 0 ? result[0] : null;
  if(!user) return null;

  const {password,...safeUser}=user;
  return safeUser;
};
export const getAllUsers = async (): Promise<SafeUser[] | null> => {
  const queryText = `
    SELECT * FROM users ;
    `;
  const result = await query(queryText);
  const user=  result.length > 0 ? result : null;
  if(!user) return null;

  return user?.map((u:User)=>{
    const {password,...safeUser}=u;
    return safeUser;
  })
};

export const updateUser = async (userId: number, user: User): Promise<User> => {
  const queryText = `
   UPDATE users SET username=$1,email=$2 WHERE id=$3  RETURNING * ;
    `;
  const result = await query(queryText, [user.username, user.email, userId]);
  return result[0];
};

export const deleteUser = async (userId: number): Promise<void> => {
  const queryText = `
    DELETE from users WHERE id=$1;
    `;
  await query(queryText, [userId]);
};
