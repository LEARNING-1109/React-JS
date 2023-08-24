// How to import & use imported function and variable

// import { hello } from './sell.js';
// hello();

// import { data } from './sell.js';
// console.log(data);

// Change the variable name of data as da
// import { data as da } from './sell.js';
// console.log(da);

// import multiple file & variable at one time rather than discrete
// import { hello, data as da } from './sell.js';


// import all files as  a property of the object
import * as bundle from './sell.js';

bundle.hello();
console.log(bundle.data);


// importing default exported person object form customer.js
// import person from './customer.js';
// console.log(person);

// importing default exported person object as new name 'ps'
import ps from './customer.js'
console.log(ps);


// CLASSES & OBJECT ✨✨
/*
Property means creating variable.
Method means creating variable.
*/
class Customer{
    constructor(n) {
        this.name = "Hare Krishna";
        this.name = n;
    }

    age = 28

    // creating method
    buy() {
        console.log("Hello Learner");
        console.log(this.name);
    }

    buy2 = () => {
        console.log("Hello Learner");
        console.log(this.name);
    }

}

// Inheriting property of Customer in the GuestCustomer class
class GuestCustomer extends Customer{
    hello() {
        console.log("hello");
    }
}

// creating object of class
let customer1 = new Customer("Ayush ...");
customer1.buy();
console.log(customer1);

let customer2 = new GuestCustomer("Ayush ...");
customer2.buy();
console.log(customer2);


// ✨ Spread and rest operator (...)
let list = ["Audi", "honda", "BMW"];

// let newList = [...list, "newFerrari"];
let newList = ["newFerrari", ...list];
console.log(newList);

// creating a object
let person = {
    name: "HP Laptop"

}

// creating another object
let newPerson = {
    ...person,
    city: "Bhopal",
}

console.log(newPerson);


// REST Operator 👇
function hello(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
hello(1, 2, 3);


// using rest operator all parameter will be passed as array
function hello2(...myall) {
    console.log(myall);
}
hello2(1, 2, 3);


// ✨ Array Destructing
let list2 = ["Audi", "BMW", "Honda"];
console.log(list2[1]);
console.log(list2[2]);

// Creating separate variable for each value of array
// let [car1, car2, car3] = list2;
// let [car1, car2] = list2;
let [car1, ,car2] = list2;

console.log(car2);


// ✨ Object Destructing

const person3 = {
    name: "Google",
    age: 60
}

console.log(person3.age);

let {name, age} = person3;
// now(Object_Destructing) directly accessing the age without using person3.age
console.log(age);

// Reference(array, object) and Primitive Type (String, number)

// Primitive Type : 👇
let num1 = 100;
let num2 = num1;

console.log(num1);
console.log(num2);

// Reference type 👇
let person4 = {
    name: "LG Monitor W1943",
}

// This one not copied, but person5 is pointing to person4
// let person5 = person4;

// if you want to copy then use Spread operator (...)
let person5 = {
    ...person4
}


person5.name = "Sony LED Monitor";

console.log(person4);
console.log(person5);


// ✨ Map function 
let array1 = [2, 5, 7, 10];
console.log(array1);

// let array2 = array1.map( function(x) {
//     return x*2;
// } );

// using array function (shortcut)
// let array2 = array1.map( (x) => {
//     return x*2;
// } );

// using shortest arrow function ✅
let array2 = array1.map( x => x*2 );


console.log(array2);


// filter function
// write condition inside the filter function which will be returned
let array3 = array1.filter( x => x%2==0 )
console.log(array3);

// writing  filter function anonymous
let array4 = array1.filter( function(x) {
    if(x%2 ==0){
        return x;
    }
} )
console.log(array4);



/* React JS
 Anything which is used many times either in same page or different page then make it as component.


Benefits of Component :-
- Reusability
- Help in maintaining code


Note : ✨
Those javascript which run on your browser - Node JS
Those javascript which run on your computer - Node JS

*/
