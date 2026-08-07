//Destructuring in function parameter.
const student = {
    name: "Sangram",
    age: 19
};

function display({ name, age }) {
    console.log(name);
    console.log(age)
}
display(student)