
// generating a random number for each dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6 for first dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6 for second dice

// adding numbers to dice to make it work in any condition
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png for first dice
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png for second dice

// adding location 
var randomImageSource1 =  "images/" + randomDiceImage1; // images/dice1.png - images/dice2.png for first dice
var randomImageSource2 =  "images/" + randomDiceImage2; // images/dice1.png - images/dice2.png for second dice

// selecting the first and second instance of image in index.html
var image1 = document.querySelectorAll("img")[0]; // first instance
var image2 = document.querySelectorAll("img")[1]; // second instance

// chaging dice to random dice number
image1.setAttribute("src", randomImageSource1); // first dice
image2.setAttribute("src", randomImageSource2); // second dice


// Deciding who won by using 
// comparative operators
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎌Player 1 Wins!" // code for the first player winning
}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🎌"; // code for second player winning
}else {
    document.querySelector("h1").innerHTML = "DRAW!" // Code for draw
}

