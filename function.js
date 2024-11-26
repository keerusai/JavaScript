//create a function using the "function keyword that takes astring as an argument & returns the number of vowels in the string0

//it means what ever we give string as i/p it should return how many vowels are in it
function countVowels(str){
    let count=0;
    for(const char of str){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
            
    }return(count);
}
