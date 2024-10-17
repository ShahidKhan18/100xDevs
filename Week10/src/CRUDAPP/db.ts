import { Pool } from "pg";
import { mySecretPassword } from "../constant";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "100xdev",
  user: "postgres",
  password: mySecretPassword,
});

export const query=async(queryText:string,prams:any[]=[]):Promise<any> =>{
    try {
        const res=await pool.query(queryText,prams);
        return res.rows;
    } catch (error) {
        console.error("DB query Error",error)
        throw error;
    }
}

export const closePool=async():Promise<void>=>{
    await pool.end();
}