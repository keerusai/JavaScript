//for a given array with marks of students->[85,97,44,37,76,60]
//find the average marks of the entire class

//hint:1->firstly find sum of all the marks
//     2->then divide all those sum%number of elements

let marks=[80,75,79,90,87,89]
let sum=0;
for(i of marks){
   sum=sum+i;
   console.log(sum)
}
let avg=sum/marks.length;
console.log("avg marks of the class:",avg)