var rect={
	perimeter: (x,y)=>(2*(x+y)),
	area: (x,y)=>(x*y)
}

function solverect(a,b){
	if(a<=0||b<=0){
		console.log('the dimension value of a and b should be greater than zero')

	} else {
		console.log(`The area of the rectangle is ${rect.area(a,b)}`)
		console.log(`The perimeter of the rectangle is ${rect.perimeter(a,b)}`)

	}
}
solverect(3,5);
solverect(0,1);
solverect(-1,0);