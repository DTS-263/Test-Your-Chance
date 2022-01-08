var num1 = Math.random();
num1 = Math.floor(num1*6) + 1;
var num2 = Math.random();
num2 = Math.floor(num2*6) + 1;

var randomDiceImage1 = "dice" + num1 + ".png";
var randomDiceImage2 = "dice" + num2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(num1 > num2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if(num2 > num1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw !!";
}
