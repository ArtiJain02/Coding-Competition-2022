
//"cerner_2tothe5th_2022"

// Proper tail calls (PTC) is a programming language feature that enables memory-efficient recursive algorithms.
// Tail call optimization is where you can avoid allocating a new stack frame for a function because the calling
// function will simply return the value it gets from the called function.

// Regular implementation of returning factorial of a number
function factorial(n) {
  if (!n)
    return 1;
  return n * factorial(n - 1);
}
// PTC way of returning factorial of a number

function factorial(number, partialFactorial = 1) {
  if (number === 0) {
    return partialFactorial;
  }
  return factorial(number - 1, number * partialFactorial);
}
console.log(factorial(5)); //720

