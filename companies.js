/*create an array to store companies->microsoft,uber,google,IBM,netflix
a->removes the first company from the array
b->removes uber & add ola in its place
c->add amazon at the end*/

let comp=["microsoft","uber","google","IBM","netflix"]
console.log(comp.shift())
console.log(comp)
//after this there will be no microsoft
console.log(comp.splice(0,1,"ola"))//replace
console.log(comp)

console.log(comp.push("Amazon"))
console.log(comp)