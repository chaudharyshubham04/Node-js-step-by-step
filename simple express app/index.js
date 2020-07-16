const express=require('express')
const app=express();
var host='localhost';
const port =3000;
app.get('/',(req,res)=>{
	console.log(req.headers)
	res.statusCode=200;
	res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>Hello World</h1></body></html>');
})

app.listen(port,host,()=>{
	console.log(`Server is running at port http://${host}:${port}/`)
})