const fs =require('fs');
// + Reading text files

// fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Text file data: ',data)
// });


//+ Writing into the file

// const content="Hello Shahid!"

// fs.writeFile('abc.txt',content,'utf-8',(err)=>{
//    if (err) {
//      console.error(err);
//      return;
//    }
//    console.log("Text file written successfully");  
// })

// -fs.appendFile (To add data into existing file)

// -fs.rename (To rename existing file)

// -fs.unlink (To remove existing file)

//+ Working with Directories

// fs.mkdir('newDir',{recursive:true},(err)=>{
//   if (err) {
//     console.error("Error creating directory:", err);
//     return;
//   }
//   console.log("Directory created successfully.");
// })


// fs.readdir('Files',(err,files)=>{
//     if (err) {
//       console.error("Error reading directory:", err);
//       return;
//     }
//     console.log("Directory contents:", files);
// })


//+ Path module

const path=require("path");

