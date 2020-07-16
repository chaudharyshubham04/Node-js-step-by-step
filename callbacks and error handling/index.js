var rect=require('./rectangle')

function solverect(a,b){
	rect(a,b,callback(err,rectangle)=>{
		if(err){
		 	console.log(`Error : ${err.message}`)
		}else {
		console.log(`The area of the rectangle is ${rect.area(a,b)}`)
		console.log(`The perimeter of the rectangle is ${rect.perimeter(a,b)}`)

	}
})

	 
solverect(3,5);
solverect(0,1);
solverect(-1,0);