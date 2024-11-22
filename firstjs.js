ffullname="keeru";
//null(where the null we know that we don't have a value)
llastname=null;
//undefined(in case of undefined we know that there is some value but we don't know what that value is)
aage=undefined;
console.log(llastname);
//boolean
isfollow=true;
console.log(isfollow);

//variables

//variables are 3 types(let,var and const)

//var->it is outdated because when we declare any variable it can be redeclared and updated
var name="keeru";
var name="sai";
console.log("name");
//here var doesn't give any error due to i gave same variable it gives the last name that is here sai

//let->let can be updated but not redeclared
//if we want we can redefine in another block
let fullname="keerthana";
fullname="saikeerthana";//it is updated not redeclared if we use again let fullname in these line then we get an error
console.log(fullname);

//const-> const variables can't be redefined or updated
const lastname="sai";
console.log(lastname);


//data types: primitive datatypes->which are fixed in that lang
let kname="keeru;"//string
let age=23;//number
let isfemale=true;//boolean
let x=undefined;//undefined
let y = null;  //null will be a object so we get its datatype as a object
let x1=BigInt("123"); //bigint  //123n is o/p
let y2=Symbol("hello!"); //symbol

//non-primitive: objects-arrays,
//in these we use key:value method 
//note:if we are declaring for objects we shouldn't use = we should use :
const student={
    studentname:"keeru",
    sage :23,
    cgpa :9.4,
};
console.log(student);
console.log(student.sage+1);//to access object and we can even increment


