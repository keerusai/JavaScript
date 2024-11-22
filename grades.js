//write a code which can give grades to students according to their scores
// -> 80-100 ,A
// ->70-89,B
// ->60-69,c
// 50-59,d
// 0-49,f

let score=70;

 if(score>=90 && score<=100){
    console.log("A");
 }
    else if(score>=70 && score<=89){
        console.log("B");
     }
     else if(score>=60 && score<=69){
        console.log("c");
     }
     else if(score>=50 && score<=59){
        console.log("D");
     }
     else if(score>=0 && score<=49){
        console.log("F");
     };
 