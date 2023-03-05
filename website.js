const { Console } =require('console'); 
const http=require('http');

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
   res.statusCode=200;
   res.setHeader('Content-Type','text/html')
   // res.end('<h1>this is tanvi!!!</h1>');
   console.log(req.url)
   if(req.url=='/'){
      res.end('<h1>This is Tanvi </h1> <p>Hey this is the way to rock!!');
   }
   else if(req.url=='/about'){
      res.statusCode=200;
      res.end('<h1>About  Tanvi </h1> <p>Hey this is the way to know ABOUT tanvi!!');
   }
   else if(req.url=='/hello'){
      res.statusCode=200;
      const data=fs.readFileSync('index.html');
      res.end(data.toString());
      //res.end('<h1>me  Tanvi </h1> <p>Hey this is the way to know ABOUT Ekta!!');
   }
   else{
      res.statusCode=404;
      res.end('<h1>Dekha nhi mila na?</h1>');
   }
})
server.listen(port,()=>{
   console.log(` server is listening on port ${port}`);
})