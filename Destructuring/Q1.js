//Q1:- Extract name and age from an object using destructuring.
const student = {
    name: "Sangram",
    age: 19,
    address: {
        city: "Jajpur"
    }
};

const {
    name,
    age
} = student;
console.log(name);
console.log(age);