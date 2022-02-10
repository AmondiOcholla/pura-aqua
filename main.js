// Variable and function names written as camelCase
// Global variables written in UPPERCASE
// Constants (like PI) written in UPPERCASE

//method is
day = "Wednesday";
day = "Thursday";
alert(day);
var date = 14;
alert("Today is " + day + " and the date is " + date + "th.");
//alert(today)
console.log("output in the console");

function outputName() {
  alert("Wangari Maathai inspired this");
}
outputName();
var rmName = "Wangari Maathai",
  rmCareer = "Environmental Conservation ",
  //   rmCar = "Engineer",
  rmAge = "Deceased";
function outputMsg(name, career, car, age) {
  alert(
    "My role model is " + name + " she was into " + career
    //   " and he is an " +
    //     car
  );
}
outputMsg(rmName, rmCareer, rmCar, rmAge);

// function is a block of code designed to perform a particular task. it is executed when it is invoked or called
function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}
document.getElementById("demo").innerHTML = myFunction(4, 3);

let a = Number(prompt("pick a number")); //or you can input a specific number directly that you ant, eg let a=6;
console.log("Your number is the squareroot of " + a * a);
