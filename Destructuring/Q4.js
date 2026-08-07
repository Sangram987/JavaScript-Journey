//Q4:- Use a default value in object destructuring.
const user = {
    name: "Rahul",
};

const {
    name, 
    age = 20
} = user;
console.log(name);
console.log(age)