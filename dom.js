//console.log("hello");
//alert(" hello...lets learn Dom!")

//we get many window objects like alert,console,blur,prompt and many all these will be displayed on the window screen itself
window.console.log(window)

/*note:dom=>document object model
dom=> when we convert a any html file to js then it makes that html document as a object and model is where it makes that complete document into a hierarchy tree form in a model
to print object we use console.dir(window.document)
java is mainly for dynamic changes so we can change the things on window screen also
ex:if i wanted to change the background color for any color
i.e =>document.body.style.background="green";*/

//Dom Manipulation: how we can change in dom
//Selecting with Id:access and change data with id
let heading1=document.getElementById("headingID");
console.dir(heading1)// for objects we should use dir
//Selecting with class:access and change data with class
// It returns us html collection
let heading2=document.getElementsByClassName("heading2");
console.dir(heading2)
console.log(heading2)
//selecting element by tag name:we get the html of tag name
let para=document.getElementsByTagName("p");
console.dir(para)
console.log(para)
//we can even have query selector where we can pass ID/MYCLASS/TAG
let qselector=document.querySelector("#heading1");//for single thing we use queryselector
console.dir(qselector)
console.log(qselector)

//if we want to select all the tags or things we should use selectall

let qselector2=document.querySelectorAll("p");
console.dir(qselector2)
console.log(qselector2)
