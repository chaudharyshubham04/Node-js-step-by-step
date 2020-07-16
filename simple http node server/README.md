In this lesson you will learn more about the Node HTTP core module. You will create a simple HTTP server using the Node HTTP module and serve HTML files from a public folder. Along the way you will learn about the fs and path Node core modules. At the end of this lesson, you will be able to:

Create a simple HTTP server using the Node HTTP core module


Create a web server to serve static HTML files from a folder

A Simple HTTP Server


Create a folder named node-http in the NodeJS folder and move into the folder.


In the node-http folder, create a subfolder named public.


At the prompt, type the following to initialize a package.json file in the node-examples folder:

npm init

Create a file named index.js and add the following code to it:

```
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Start the server by typing the following at the prompt:

node index.js

Then you can type http://localhost:3000 in your browser address bar and see the result.


You can also use postman chrome extension to send requests to the server and see the response. Alternately, you can download the stand-alone Postman tool from http://getpostman.com and install it on your computer.


