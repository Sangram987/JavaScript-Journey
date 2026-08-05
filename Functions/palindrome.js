function isPalindromeNumber(num) {
    if (typeof num !== "number" || !Number.isInteger(num)) {
        throw new Error("Input must be an integer.");
    }


    if (num < 0) return false;

    const strNum = num.toString();
    const reversedStr = strNum.split("").reverse().join("");

    return strNum === reversedStr;
}

const number = 121;
if (isPalindromeNumber(number)) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}