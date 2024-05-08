///////////////Comparisons///////////////////

// Boolean is the result

alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

// String comparison

alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

// Comparison of different types

alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

alert(true == 1); // true
alert(false == 0); // true

// Strict equality

alert(0 == false); // true

alert("" == false); // true

// Comparison with null and undefined

// For a strict equality check ===

alert(null === undefined); // false

// For a non-strict check ==

alert(null == undefined); // true

// For maths and other comparisons < > <= >=

//Strange result: null vs 0

alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

/* An incomparable undefined */

alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

////////////// TASK  ////////////

alert(5 > 4); //true
alert("apple" > "pineapple"); //false
alert("2" > "12"); //true
alert(undefined == null); //true
alert(undefined === null); //false
alert(null == "\n0\n"); //false
alert(null === +"\n0\n"); //false



/////////  Conditional branching: if, '?'  ////////////

// The “if” statement

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );


// The “else” clause

let year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year1 == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

//Several conditions: “else if”

let year3 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year3 < 2015) {
  alert( 'Too early...' );
} else if (year3 > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

//Conditional operator ‘?’


let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);


// Multiple ‘?’

let age1 = prompt('age?', 18);

let message = (age1 < 3) ? 'Hi, baby!' :
  (age1 < 18) ? 'Hello!' :
  (age1 < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

           ///////////////  TASK   ////////////


if ("0") {
    alert( 'Hello' );
  } /// Hello


//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”  

let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? ECMAScript!");
}