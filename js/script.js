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

var password = name + surname + favoriteColor + number;
var identity = name + " " + surname;

/*
console.log(password);
console.log(identity);
*/

document.getElementById("user_identity").innerHTML = identity;
document.getElementById("user_password").innerHTML = password;