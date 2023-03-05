const fs=require('fs');
// fs.readFile('fun.txt','utf8',(err,data)=>{
//    console.log(err,data)
// })
fs.writeFile('fun.txt',"this is a data",()=>{
   console.log("written on the file")
});
console.log("finished reading file")