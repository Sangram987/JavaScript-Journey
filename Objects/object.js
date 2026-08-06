//Q1:- Create a student object.
const student = {
    name: "Sangram",
    city: "Jajpur",
    course: "B.Tech",
    branch: "CSE",
    sem: "5th",
    age: 19
};


//Q2:- Print the student's name.
console.log(student.name);


//Q3:- Add a new property domain.
student.domain = "Web development";
console.log(student);


//Q4:- Delete the age property.
delete student.age;
console.log(student);


//Q5:- loop through all object keys and values.
for (let key in student) {
  console.log(key, student[key]);
}