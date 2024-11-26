//block of code and it can be invoked when ever it is required
//note when ever we use with functions we use with the function name() to invoke them
//if they are built-in functions we dont want to use with the function keyword
//if it is user defined functions we must use as function functionname(){}
//to reduce redundency(repeating) we use the functions

//1->
function myFunction(msg){
    console.log(msg)
}

//invoke/call function
myFunction("I love JS")//i gave my msg here

//2->
function myfun(arg,n){
    //parameter->input
    console.log(arg*n)
}
//we get o/p as not a number because arg i gave as a string and n as a number so we cant multiply
myfun("I love js",10);

//3-> add 2 numbers
function sum(x,y)
{
    sum=x+y;
}
sum(2,3)
console.log(sum)

//4->arrow functions ->where we use the arrow=> ,this has been introduced in modern js
//sum function
function add(x,y)
{
    return (x+y)
}
add(2,3)
// this is how we write normal function
//in arrow function
let arradd=(a,b)=>
{
    console.log(a+b);
}
(arradd(2,3))

let arrmul=(a,b)=>
    {
        return(a*b);
    }

    



