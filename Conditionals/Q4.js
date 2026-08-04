//Q4:-mmConvert marks into grades (A, B, C, D, F).
let mark = 74;

if(mark >= 90) {
    console.log("Grade: A");
}
else if(mark >= 75 && mark < 90) {
    console.log("Grade: B");
}
else if(mark >= 60 && mark < 75) {
    console.log("Grade: C")
}
else if(mark >= 40 && mark < 60) {
    console.log("Grade: D")
}
else {
    console.log("Grade: F (Fail)")
}