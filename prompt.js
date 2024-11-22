// get user to input a number using prompt("enter a number").check if the number is a multiple of 5 or not
//note: promt is a kind of display method just like alert but in prompt we can even get i/p from the user

let num=prompt("Enter the number:");
if(num %5 ===0){
    console.log(num,"divisible");
}
else{
    console.log(num,"not divisible");
};

