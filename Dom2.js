//attributes are those which gives extra data to the elements

let div=document.querySelector("box");
console.dir(box)

//getattribute
let id = div.getAttribute("box");
console.log(box)
//we can even set attribute values to new value 
let id2=div.setAttribute("box","square");
console.log(id2)
console.dir(id2)
//here the exisisting name is box and i changes it to square
//node.style:here we can know all the styles we have given for node
//ex:div.style =>here it gives all the style contents of div like color,font etc everything
//we can give this in the console screen only
//but for this we must have style element with properties
div.style.backgroundcolor="pink";//in js we can give even like this but this is not a recommended way
div.style.fontSize="2px";
div.style.innerText="hello!";//we use inner html to change the text ex:present we have hii and i changes to hello!
//now div content will be hello

/*Insert elements:(el refers to element)
 node.append(el)//adds at the end of node(inside) (here inside means inside the div box)
node.prepend(el)//adds at the start of node(inside)
node.before(el)//adds before the node(outside)(here outside means outside the div box)
node.after(el)//adds after the node(outside)*/

let el=document.createElement("div")
console.dir(ele)
console.log(el)

//node.remove:delete an node(we must give node name not node that is think div as node and its id is box then we must give box.remove)
box.remove()