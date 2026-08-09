//Q5:- Create a multiplier function using closur.
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(10)); 