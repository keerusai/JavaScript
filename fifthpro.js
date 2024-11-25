//arrays store the same kind of info with same variable name
//create
let marks=[90,80,70,80];
console.log(marks)
//access indices
console.log(marks[2]);
//replace
console.log(marks[1]=95)//here i replaced 80 with 95 we just give with index and value to replace
console.log(marks)

//note:v.imp:  where the arrays are mutable where we can change our data
//             whereas the strings are immutable where we can"t change

//looping over an array
//note: index starts from 0 whereas the length starts from 1

//for loop: here we use index instead of i and length of an array
//for(ind=0; ind<arr.length;i++)

//ex:prints all elements from an array

for(i=0;i<marks.length;i++){
    console.log("marks:",marks[i])
}

let cities=['delhi','hyd','bnglr','mumbai','pune'];
for(i=0;i<cities.length;i++){
    console.log("city",cities[i])

}

//array methods
//push->add to end
let snacks=["chocolate","biscuits","fruits","chips"]
let veggies=["carrot",'beetroot','cucumber']
console.log(snacks.push("burger"))
console.log(snacks)

//pop->deletes a last item
console.log(snacks.pop)
console.log(snacks)

//tostring->which converts array in to string
console.log(snacks.toString())
//note we will get string in white color array in blue
console.log(snacks.concat(veggies))

//unshift->is like push but it add in first of an array
console.log(veggies.unshift("brinjal"))
console.log(veggies)

//shift->is like pop but it add in first of an array
console.log(veggies.shift())
console.log(veggies)

//slice->returns apiece of the array
console.log(veggies.slice(0,3))

//splice->we change a original array(we can do add,remove, and even replace)
//splice will have 3 conditions 1->startindex 2->delvaluecount(i.e how many values we want to delete count) 3->newelements(if we want to add any elements to these array we can add)
//note:if we dont have anything to add then give as 0 same even for delete

console.log(veggies.splice(1,0,0))//here i added 0
console.log(veggies)
console.log(veggies.splice(1,0,1))//here i added 1
console.log(veggies)
