//usually we used to have a 3 types of dom tree nodes :text nodes, comment, documents.
//and we usually ignore text and comment nodes and mainly prefer element nodes

//firstly in that dom tree we will again have a parent, child,and sibling nodes
//firstchild access
//mainly we use this things for the navigation of the flow nodes
let fchild=document.querySelector("div")
console.dir(fchild)

//we can even change our data using innerhtml
let heading=document.querySelector("h3")
console.dir(heading)