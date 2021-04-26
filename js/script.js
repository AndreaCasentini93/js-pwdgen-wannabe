var name = prompt("Write your name, please.");
var surname = prompt("Write your surname, please.");
var favoriteColor = prompt("Write your favorite color, please.");
var number = "21";

/*
console.log(name);
console.log(surname);
console.log(favoriteColor);
console.log(number);
*/

var userPassword = name + surname + favoriteColor + number;

// console.log(userPassword);

document.getElementById("user_password").innerHTML = userPassword;