//maps: maps will create anew array with the result of some operation.and those callbacks used as an new array for calculations

// in these also we have three parameters arr.map(callback fun(value,index,arr))
//mostly we use only value
let num=[1,2,3,4,5];

    //num.maps(num)=>{} we write like this fo
    let newnum=num.map((val)=>
    {
        return(val)
    });
    console.log(newnum)

    //filter method:it filters all the certain true value condition and creates a new array of elements that give true for a condition
    //ex:all even numbers
    //same like maps only but where we have loop in filters

    let filnum=[1,2,3,4,5,6];
    let nfilnum=filnum.filter((val)=>{
        return(val%2===0); //note we should give val because we care comparing with values only
    });
    console.log(nfilnum)

    //reduce:where we do multiple calcualtions but atlast we need only required value so it reduces all those and gives only one answer
    //add

    let arr=[1,2,3,4,5];
        //arr.reduce(previousValue,currentvalue)=>{} where the firstly it takes 2 num inthat 1 is pre and 2 is curr both adds then pre becomes 2 and curr becomes 3 and goes on
        let newarr=arr.reduce((pre,curr)=>{
            return(pre+curr);
    });
    console.log(newarr)

