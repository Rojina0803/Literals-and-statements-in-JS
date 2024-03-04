

//  TAGGED TEMPLATES
const love ="Admiration";
console.log(`I have a great ${love} towards your work!!`);

let num=12;
let first="Rohan";
let rank ="NG"
// console.log(`I saw ${first} scored only ${num} and his rank is ${rank}.`)
let text=a`I saw ${first} scored only ${num} and his rank is ${rank}.`
 console.log(text);
// function a(){
// function a(String, one, two, three ){
function a(String, ... expressions){
    // return "heyyy!!"; (returns heyyy!!)
    return String; }
    // return expressions;
    // return 'I hate '+ expressions.join(" and ")
//     return expressions.reduce((acc,exp,idx)=>{
//       return acc + exp+ idx;
//     }  ,String[0])
// }


// Regexp Literals
let pattern =/HELLO/;
pattern.test("Hey i am happy to have you here");
pattern.test("HELLO I'm going to pick you")
let cx="\0";
console.log(cx);

// escaping characters
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);

const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); 
//Control statements
let d=100;
let b = 12;

//  IF STATEMENTS

if(d>b){
    console.log("I am the one");
}
else{
    console.log(" So what??huh");
}
//SWITCH STATEMENTS

// Sun - oatmeal
// Mon - Honey
// Tues - Ghee
// Wed - Carrot
// Thu - Roti
// Fri - Tofu
// Sat - Homemade Udon

let day="Holiday";

switch(day){
    case'Sunday':
        console.log("Oatmeal");
        break;
    case'Monday':
        console.log("Honey");
        break;
    case'Tuesday':
        console.log("Ghee");
        break;
    case'Wednesday':
        console.log("Carrot");
        break;
    case'Thursday':
        console.log("Roti");
        break;
    case'Friday':
        console.log("Tofu");
        break;
    case'Saturday':
        console.log("Homemade Udon");
    
    default:
        console.log("Decide your diet yourself cool person!!")
        
}