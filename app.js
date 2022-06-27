// -----------------------------------------------------
// Name: Jimmy Klein
// Abstract: Arrow Function Exercises 
// -----------------------------------------------------

// ES5 Callback 
function double (array) {
    return array.map(function(value) {
        return value * 2;
    });
}

// Redo in Functions shorthand to use two arrow functions. Turn it into a one-liner.
// const double = array => array.map(value => value * 2);

// Refactor the following function to use arrow functions: 
// Replace ALL functions with arrow functions: 

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
// const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)