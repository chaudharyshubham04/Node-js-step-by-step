In this exercise, you will learn about writing Node applications using JavaScript and also learn about the basics of Node modules. At the end of this exercise, you will be able to:

Write a simple Node application in JavaScript.


Understand the basics of Node modules and write simple file-based Node modules


Starting a Node Application


Go to a convenient location on your computer and create a folder named NodeJS. Then move to this folder.


Now create a folder named node-examples and then move into this folder.


At the prompt, type the following to initialize a package.json file in the node-examples folder:

npm init

Accept the standard defaults suggested and then update the package.json file until you end up with the file containing the following:

Create a file named index.js and add the following code to this file:

```
var rect = {
	perimeter: (x, y) => (2*(x+y)),
	area: (x, y) => (x*y)
};

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
```

To run the Node application, type the following at the prompt:

node index.js

A Simple Node Module


Now, create a file named rectangle.js, and add the following code to it:

```
exports.perimeter =  (x, y) => (2*(x+y));

exports.area = (x, y) => (x*y);
```

Then, update index.js as follows:

```
var rect = require('./rectangle');

. . .
```
