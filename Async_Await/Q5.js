//Q5:- Create a async function that returns a number and await it.
async function number() {
    let num = 50;
    let wait = await num;
    console.log(wait)
}
number()