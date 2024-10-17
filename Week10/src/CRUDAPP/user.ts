import { query } from "./db";

interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  created_at?: Date;
}

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

export const getUserById = async (userId: number): Promise<User | null> => {
  const queryText = `
    SELECT * FROM users WHERE 
    id=$1;
    `;
  const result = await query(queryText, [userId]);
  return result.rows.length > 0 ? result.rows[0] : null;
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
