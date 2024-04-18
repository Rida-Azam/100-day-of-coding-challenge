//Question 146: Show an example of a callback function used to filter an array of numbers.
//define array
var numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
var filteredNumbers = numbers.filter(function (number) { return number > 8; });
console.log(filteredNumbers); // Outputs: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
