//Q1:- Convert a string to uppercase.
let name = "I love JavaScript";
name.toUpperCase();
console.log(name);


//Q2:- Count the number of characters in a string.
console.log(name.length);


//Q3:-check whether a string contains JavaScript.
console.log(name.includes("JavaScript"));


//Q4:- Reverse a string.
let rev = name.split("").reverse().join("");
console.log(rev);

//or

for (i = 17; i >= 1; i--) {
    console.log(name[i])
}

//Q5:- Count the number of vowels in a string.
let count = (name.match(/[aeiou]/gi) || []).length;
console.log(count);