let arr = [
    45, 23, 31
];

let a = arr.map((value , index, array)=>{
    if(value > 40){
        console.log(value) //it return value of array
    }
   else if(value > 30) {
    console.log(index) //it return index of an array
   }
   else {
    console.log(array) //it return original array
   }
});



//another example.
const b = [
    32, 45, 67, 89
];

let c = b.map((value , index, array) =>{
    console.log(value , index, array);
    return value+1; //it return value of array with add 1 with each array
});
console.log(c)