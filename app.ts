import { log } from "console";

// // Question 22:
let userName : string[] = ["Shafaq", "Nabeel","Aliza"," Rose"];
console.log(userName[7]); //  Rong lenght of array 
console.log(userName.length);  //lenght of array
console.log(userName[3]); //correct calling of array

// Question 23:
// test 1
let gravity :number = 9.81;

    
console.log("the correct number" ,gravity === 9.81 ); //condition ture
console.log("the correct number " ,gravity === 9.92 ); //condition false


// test 2
let num : number = 2 
console.log(num  == 2); //condition ture
console.log(num == 76);//condition false
console.log(num);

// test 3
let messge : string = "Ali wants to learn  typeScript";
console.log(messge == "Ali wants to learn  typeScript"); // Condition true
console.log(messge == "Ali wants to learn  javaScript"); // Condition false
console.log(messge);

// test 4
let friut : string = "Mangoes is seasonal fruit"
console.log(friut == "Mangoes is seasonal fruit"); //true
console.log(friut == "Mangoes is  not seasonal fruit");  // false

// test 5
let number: number = 2 + 10 -5; 

let number0 = number ; 
console.log(number); //sum of this equation

console.log("Tha value is " ,number0 === number); //true
console.log("The value is ", number === 2 + 10 + 65); //false


// Question 24
// check string 
// console.log("COLOR" == "color");  //false
console.log("color" ==  "color"); // true


// check uppercase 
let nam : string = "areej";
console.log(nam.toUpperCase() === "APPLE"); //true

//cheak operators

console.log(6 > 2);
console.log(18 > 78);










