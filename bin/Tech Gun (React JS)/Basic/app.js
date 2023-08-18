// Learn Basic of ES6

// let and constant

var myname = "Ayush";
var num = 10;

myname = "Sameer";

console.log(myname);

// function
function sayName(name2) {
  console.log("Vishwjeet " + name2);
}

sayName("Singh");

// Arrow function
let sayName3 = (name3) => {
  // console.log(name3);
  return name3;
};

sayName3("Hello World 3");
console.log(sayName3("Hello World 3"));

// Shortcut of arrow function

/* 🔷 You can remove the Parenthesis when single parameter is present
    🔷 You can remove curley braces and return keyword if only one parameter is returned
let sayName4 = (name4) => {
*/
let sayName4 = (name4) => {
  return name4;
};

let sayName5 = (name5) => name5;    // ✨ Shortest form
console.log(sayName5("Hare Krishna"));

let double = num => num*2;
console.log(double(10));


// Export and Import (Modules)

