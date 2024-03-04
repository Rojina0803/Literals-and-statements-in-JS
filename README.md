# Literals-and-statements-in-JS
Types of literals and types of statements injs
Tagged Templates
The code demonstrates the use of tagged templates in JavaScript. It includes an example where a template string is tagged with a function a. The function currently only returns the template string as is.

Example:

javascript
Copy code
const love = "Admiration";
console.log(`I have a great ${love} towards your work!!`);

let num = 12;
let first = "Rohan";
let rank = "NG";
let text = a`I saw ${first} scored only ${num} and his rank is ${rank}.`;
console.log(text);

function a(String, ...expressions) {
    return String;
}
Regexp Literals
This section covers the use of regular expression literals. It includes a simple pattern test and an example of the use of escape characters.

Example:

javascript

let pattern = /HELLO/;
pattern.test("Hey, I am happy to have you here");
pattern.test("HELLO, I'm going to pick you");
let cx = "\0";
console.log(cx);

const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
Control Statements
The code includes examples of control statements like if statements and switch statements.

Example:

javascript

let d = 100;
let b = 12;

// IF STATEMENTS
if (d > b) {
    console.log("I am the one");
} else {
    console.log("So what?? Huh");
}

// SWITCH STATEMENTS
let day = "Holiday";
switch (day) {
    // ... cases for each day
    default:
        console.log("Decide your diet yourself, cool person!!");
}
