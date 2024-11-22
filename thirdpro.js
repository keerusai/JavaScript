//loops
//to print hello for 5 times 
//hint in case of comparison always use with the lessse than <=
// let sum=0;
// for(i=0;i<=4;i++)
//     {
//     console.log("hello");
//     //sum of the 5 numbers
//     sum=(sum+i); 
// };
// console.log("sum=",sum);
// console.log("loop has ended")

// print 1 to 5
for(i=0;i<=4;i++)
{
    console.log("i=",i);
}

while(i<=5){
    console.log("i=",i);
    
}
//do-while will be used when there will be chances of even statement may become false

let k=20;
do{
    console.log("hello");
    k++;
}
while(k<=10); //here the condition is wrong so it executes only do part


//for of loops: it will be used for the arrays and strings where it performs tasks on each string letter or array

let str="keeru";
for (let j of str){
    console.log("j=",j);
}





