import  {readFile } from "fs/promises";
const profile={
    name: "Shahid",
    age: 22,
    city: "Jaipur",
    prof: "Software Engineer",

}
try {
    const filePath=new URL("./index.html", import.meta.url);
    let contents=await readFile(filePath, "utf-8");
    console.log(contents);
    for(const [key,value] of Object.entries(profile)){
        contents=contents.replace(`{${key}}`, value);
    }
    console.log(contents);
} catch (error) {
    confirm.error("Error reading file:", error);
}