import dotenv from "dotenv";
import { Client } from "pg";
import { mySecretPassword } from "./constant";
dotenv.config();

const client = new Client({
  host:"localhost",
  port:5432,
  database:"100xdev",
  user:"postgres",
  password:mySecretPassword
});

const createUserTable = async () => {
  try {
    await client.connect();
    const result = await client.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`);
    console.log(result);
  } catch (error) {
    console.log("Error : Create User Table",error);
  }
};

const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  await client.connect();
  try {
    const insertQuery = `
     INSERT INTO users (username,email,password) VALUES
     ($1,$2,$3);
    `;
    const values = [username, email, password];
    const result = await client.query(insertQuery, values);
    console.log(result);
  } catch (error) {
    console.log("Error : ", error);
  } finally {
    await client.end();
  }
};

const getUserData = async (email: string) => {
  await client.connect();
  try {
    const getQuery = `
     SELECT * from users WHERE email=$1;
    `;
    const values = [email];
    const result = await client.query(getQuery, values);
    if (result.rows.length > 0) {
      console.log("UserFound : ", result.rows[0]);
    } else {
      console.log("No User Found with the given Email : ", email);
      return null;
    }
  } catch (error) {
    console.log("Error : ", error);
  } finally {
    await client.end();
  }
};

//  createUser("shahil","shahil@gmail.com","shahil@123");
// getUserData("shahil@gmail.com");

createUserTable()
