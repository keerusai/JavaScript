//comments
 // note: for single line comments we use // and for multi line comments /*    */
//hiii
/*hii
iam keeru*/

//operators
//operators are used to perform some operations on the data

//method 1
const arthi=function(a,b){
    return(a+b);
}
console.log(arthi(2,3));

//method 2
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // modulus-> where we get the remainder of an 2 numbers as a result(10%20=10)
console.log(a**b);//exponent-> which means power of that is here 10^20 like 2^2=4 ,2^4=16(2*2*2*2)
console.log(a++);//10(post)
console.log(b--);//20(post)
console.log(+a);//10+1=11(pre)
console.log(--b);//20-2=18(pre)

//unary operator->which works on single operand
let x=2;
let y=2;
console.log(x++);//2(post)
console.log(y--);//2(post)
console.log(+x);//2+1=3(pre)
console.log(--y);//2-2=0(pre)

//assignment operators->which is used for assignment
// hint: use left:right method 
let x1=10;
let y1=10;
console.log(x1=y1);//assignment
console.log(x1+=y1);//add +assign =>x1=x1+y1
console.log(x1-=y1);//sub +assign =>x1=x1-y1
console.log(x1*=y1);//mul +assign =>x1=x1*y1
console.log(x/=y1);//div +assign =>x1=x1/y1
console.log(x1**=y1);//^ +assign =>x1=x1**y1

//comparison operators->used for comparison and we get result in binary
let a1=5;
let a2=5;
console.log(a1==a2);//true
console.log(a1===a2);
console.log(a1!==a2);
console.log(a1!=a2);
console.log(a1>a2);
console.log(a1>=a2);
console.log(a1<a2);
console.log(a1<=a2);

//logical operator-> and ,or ,not
let b1=true;
let b2=false;
console.log(b1&&b2);//and
console.log(b1||b2);//or
console.log(!b1);//not



//conditional statements
let age=25;
if(age>18){
    console.log("you can vote");//answer
}
else
{
    console.log("you can't vote");
}

//ex-2
//note: for elseif we must give space to else and if 1
let mode="white";
let color;

if(mode=="dark"){
    console.log(color="dark");
}
    else if(mode=="white"){
    console.log(color="white");
}
else if(mode=="pink"){
    console.log(color='pink');
}
else{
    console.log(color="orange");
};

//imp:
//ternary operator-> which contains 3 conditions i.e..condition?true output:false output

//ex:
let ages =18;
let result = ages >=18 ? "adult" :"not adult";
console.log(result);









