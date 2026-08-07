//Q1:- Select the h1 element.
document.getElementById("title");


//Q2:-Change its text to Welcome Sangram.
title.textContent = "Welcome Sangram";


//Q3:- Change its color to blue.
title.style.color = "blue";


//Q4:-Add a click event to the button.
document.getElementById("title").addEventListener("mouseover", () => {
    alert("You clicked the text.")
})


//Q5:- When clicked, change the background color of the page.
document.getElementById("btn").addEventListener("click", () => {
    document.body.style.background = "yellow";
})

