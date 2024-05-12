// // The "switch" statement

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Too small");
//     break;
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }

// // Grouping of “case”

// switch (a) {
//   case 4:
//     alert("Right!");
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert("Wrong!");
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert("The result is strange. Really.");
// }

// //Type matters

// let arg = prompt("Enter a value?");
// switch (arg) {
//   case "0":
//   case "1":
//     alert("One or zero");
//     break;

//   case "2":
//     alert("Two");
//     break;

//   case 3:
//     alert("Never executes!");
//     break;
//   default:
//     alert("An unknown value");
// }

//////////////     TASK     //////////////

// Rewrite the "switch" into an "if"
// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// Rewrite "if" into "switch"
// Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);

    break;

  case 1:
    alert(1);

    break;

  case 2:
  case 3:
    alert('2,3');

    break;
}
