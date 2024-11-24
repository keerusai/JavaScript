
//for of loops: it will be used for the arrays and strings where it performs tasks on each string letter or array

let str="keeru";
for (let i of str){
    console.log("i=",i);
}

//for-in-loop: it will be used for objects
 let student={name:"keeru",age:23};
 for(let i in student){
    console.log(i);
    console.log(student[i]);
 }

 //strings
 let s1= "keeru";
 let s2='keeru';
 console.log(s1);
 console.log(s2);

 //string.length

 console.log(s1.length);

 //string indices(indices is plural form of index)
console.log(s1[2])//e

//template literals: these are the backtick string ` ` where we write string within backticks so that we can even add expressions along with string but we should use $()
//mostly it is used in objects
let names ={
    fname:"keerthana",
    nname:"keeru",
    aage:23,
};
let output=`the ${names.fname} nick name is ${names.nname} and age is ${names.aage} and ${3+7+4}`;
console.log(output);
console.log(typeof(output));

//escape character:\n to get in next line
 let nfullname=`sai\nkeerthana`;
 console.log(nfullname);
//tab space :gives tab space where ever required
 let tfullname=`sai\tkeerthana`;
 console.log(tfullname);
 console.log(tfullname.length);//it consider both \t or \n as only one character

 //string methods:->built in ,->used to manipulate a string
//toUpperCase
 let ucase="hello";
  ucase=ucase.toUpperCase();
 console.log(ucase);

 //toLowerCase
 let lowcase="HELLO"
 locase=lowcase.toLowerCase();
 console.log(locase)

 //trim->removes whitespaces in word front and last
 let str1="             keeru        ";
 console.log(str1.trim());

 //slice->gives a certain part from string
 let str2="keerthana";
 console.log(str2.slice(1,4))//where 1 is the start point and 5 is the end point

 //concat->combination of 2 strings
 let a="sai";
 let b="keeru";
 let c=a+b; // or let c=b+a;
//let d = a.concat(b);
 console.log(c);

 //replace->remember it replaces only once
 let a1="hello";
 console.log(a1.replace('h','y'))//replaces h with y

 //replaceAll->remember it replaces only once
 let a2="hello hii";
 console.log(a2.replaceAll('h','y'))//replaces h with y









