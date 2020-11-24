var today = new Date();
var hourNow = today.getHours();
var greeting;

let firstname = prompt("We're pleased to have you! What can we call you? ");

if (hourNow > 18) {
  greeting = "Good Evening! "+firstname;
} else if (hourNow > 12) {
  greeting = "Good Afternoon! "+firstname;
} else if (hourNow > 0) {
  greeting = "Good Morning! "+firstname;
} else {
  greeting = "Welcome! "+firstname;
}
document.write(" <h1>" + greeting + " </h1> ");
