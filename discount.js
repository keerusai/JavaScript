// for a given array with prices of 5 items->[250,645,200,799,50] all items have an offer of 10% off on them.change the array to store final price after applying offer.

let price=[250,645,300,900,50]
let bfprice=console.log("before price",price)
for(i=0;i<price.length;i++){
    let offer=items[i]/10;
    price[i]-=offer;
}
console.log(price);