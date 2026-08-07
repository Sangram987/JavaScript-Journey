//Q5:- Destructure nested objects.
const student = {
    name: "Sangram",
    age: 19,
    address: {
        city: "Jajpur"
    }
};

const {
    address: { city }
} = student;
console.log(city);