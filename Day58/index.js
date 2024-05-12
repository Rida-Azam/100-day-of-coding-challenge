////////////// DAY 58///////////////////

///////////Logical Operator////////////

//////   || (OR)    ///////

alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

let hour = 9;

if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

let hour1 = 12;
let isWeekend = true;

if (hour1 < 10 || hour1 > 18 || isWeekend) {
  alert("The office is closed."); // it is the weekend
}

//  OR "||" finds the first truthy value

alert(1 || 0); // 1 (1 is truthy)

alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)

alert(undefined || null || 0); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

//Short-circuit evaluation.

// Another feature of OR || operator is the so-called “short-circuit” evaluation.

true || alert("not printed");
false || alert("printed");

///////////////   && (AND)  ////////////

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let hour3 = 12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
  alert("The time is 12:30");
}

//  AND “&&” finds the first falsy value

// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

alert(1 && 2 && null && 3); // null

alert(1 && 2 && 3); // 3, the last one

//////////    ! (NOT)

alert(!true); // false
alert(!0); // true

alert(!!"non-empty string"); // true
alert(!!null); // false

alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false



////////////   Tasks     ////////////

//What is the code below going to output?

alert( null || 2 || undefined ); //2


//What will the code below output?

alert( alert(1) || 2 || alert(3) ); //1 and 2


//What is this code going to show?

alert( 1 && null && 2 ); //null

// What is the result of AND'ed alerts?
// What will this code show?

alert( alert(1) && alert(2) ); //1 and undefined

//What will the result be?

alert( null || 2 && 3 || 4 );  //3

//Write an if condition to check that age is between 14 and 90 inclusively.

if( age>=14 && age <=90)


//Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.


//first One
if(!(age>=14 && age<=90))

//Second one

if(age < 14 && age> 90)

// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); //-1
if (-1 && 0) alert( 'second' );//0
if (null || -1 && 1) alert( 'third' );//-1 && 1



// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the
//  input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

let userName = prompt("Who's there?", '');
if (userName === 'Admin') {

    let pass = prompt('Password?', '');
  
    if (pass === 'TheMaster') {
      alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
      alert( 'Canceled' );
    } else {
      alert( 'Wrong password' );
    }
  
  } else if (userName === '' || userName === null) {
    alert( 'Canceled' );
  } else {
    alert( "I don't know you" );
  }



