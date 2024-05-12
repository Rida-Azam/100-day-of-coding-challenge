// /////////  Loops: while and for  //////////

// ///The “while” loop

// let i = 0;
// while (i < 3) {
//   // shows 0, then 1, then 2
//   alert(i);
//   i++;
// }

// ///The “do…while” loop

// let a = 0;
// do {
//   alert(a);
//   a++;
// } while (a < 3);

// // The “for” loop

// for (let i = 0; i < 3; i++) {
//   // shows 0, then 1, then 2
//   alert(i);
// }

// //Breaking the loop

// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", "");

//   if (!value) break; // (*)

//   sum += value;
// }
// alert("Sum: " + sum);

// // Continue to the next iteration

// for (let i = 0; i < 10; i++) {
//   // if true, skip the remaining part of the body
//   if (i % 2 == 0) continue;

//   alert(i); // 1, then 3, 5, 7, 9
// }

// // Labels for break/continue

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// alert("Done!");




//          /////////// TASK  /////////////////

// // Last loop value
// // What is the last value alerted by this code? Why?

// let i = 3;

// while (i) {
//   alert( i-- );  //1
// }

// // Which values does the while loop show?
// // For every loop iteration, write down which value it outputs and then compare it with the solution.
// // Both loops alert the same values, or not?
// // The prefix form ++i:

// let i = 0;
// while (++i < 5) alert( i );  //1 to 4

// // The postfix form i++

// let i = 0;
// while (i++ < 5) alert( i );  //1 to 5

// // Which values get shown by the "for" loop?
// // For each loop write down which values it is going to show. Then compare with the answer.

// // Both loops alert same values or not?

// // The postfix form:

// for (let i = 0; i < 5; i++) alert( i ); //0 to 4

// // The prefix form:

// for (let i = 0; i < 5; ++i) alert( i ); //0 to 4


// // Output even numbers in the loop
// // Use the for loop to output even numbers from 2 to 10.

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }


// //   Replace "for" with "while"
// // Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// // for (let i = 0; i < 3; i++) {
// //   alert( `number ${i}!` );
// // }

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// // Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// // The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);


// // Output prime numbers

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }