//events are those that can change when we click them
// so the events are the change in the state of an object 
// mouse events(click,double click etc...)
//keyboard events(keypress,keyup,keydown)
//form events(submit etc...)
//print event & many more


//instead of going with multiple lines in html which is a not good manner of coding we can use like this also
let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn was clicked");
    let a=25;
    a++;
    console.log(a); //but this works only when i click on any button
}

//event2:
let div= document.querySelector("div");
div.mouseover=()=>{
    console.log=("you are inside div");//it works only after we place a arrow on over mouse
}

//we can even know the type of event
//e=>e refers to event
 btn1.onclick=(e)=>{
    console.log(e)
    console.log(e.type);//click
    console.log(e.target)//<button onclick="console.log(`button was clicked`); alert(`hello!`)">click me!</button>
}

//event listners: in this we will have event and call back(this callback is a any function which is given as a argument to the other and this are also called as handlers)
//add event: Node.addEventListener("event","callback")
//ex:btn1.addeventhandler("click",handler1){
// console.log("button was clicked")
//}
//mainly we use event listners to do mutiple tasks for the same event
//like in the above (e) event is used to print object, typeof,and target so with one event 3 tasks
//remove event: node.removeEventhandler("event","callback") note:the call back function should be same that we added with that same name
//btn1.removeeventhandler("click",handler1)