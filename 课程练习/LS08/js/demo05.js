/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //
console.log(typeof foo); //
console.log(foo instanceof Object); //
console.log(foo instanceof Function); //
console.log(foo === window.foo); //


console.log(typeof Function);//
console.log(typeof Array);	 //
console.log(typeof Date);	 //
console.log(typeof Error); 	 //
console.log(typeof Math);	 //
console.log(typeof JSON);	 //


//思考：
console.log(typeof new Function());// function or object
console.log(typeof new Array());	 // function or object
console.log(typeof new Date());	 // function or object

//补充思考：
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

