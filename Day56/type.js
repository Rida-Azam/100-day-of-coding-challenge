                                        //   Type Conversions

// String Conversion

// let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value);

// //Numeric Conversion

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number

// //Boolean Conversion

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false


//                            Basic operators, maths


// //Terms: “unary”, “binary”, “operand”

// //unary

// let x = 1;

// x = -x;
// alert( x ); // -1, unary negation was applied


// //binary
// let x = 1, y = 3;
// alert( y - x ); // 2, binary minus subtracts values


// //           Maths


// //Remainder %


// alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
// alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// //Exponentiation **

// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16

// //String concatenation with binary +

// let s = "my" + "string";
// alert(s); // mystring

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); // "41" and not "221"

// //Numeric conversion, unary +


// let apples = "2";
// let oranges = "3";

// // alert( apples + oranges ); 


// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5


// //Assignment

// let x = 2 * 2 + 1;

// alert( x ); // 5


// //Assignment = returns a value

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0


// //Chaining assignments


// let a, b, c;

// a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4


// // Modify-in-place


// let n = 2;
// n = n + 5;
// n = n * 2;

// //Increment/decrement


// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3


// let count = 2;
// count--;        // works the same as counter = counter - 1, but is shorter
// alert( count); // 1



////        Task        ////


// The postfix and prefix forms

let a = 1, b = 1;

let c = ++a; 
let d = b++; 

alert(c ); // 2, prefix form returns the new value
alert( d); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

// Assignment result

let a = 2;

let x = 1 + (a *= 2);

alert(a)
alert(x)

//Type conversions

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)


//Fix the addition

// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12


let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

// Or in the alert:

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3