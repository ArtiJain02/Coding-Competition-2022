//"cerner_2tothe5th_2022"

//Program to check if an object is a Promise or not

isPromise = (value) => {
  return Boolean(value && typeof value.then === "function");
}
var one = 1;
var newPromise = new Promise((resolve, reject) => {
  resolve();
});

console.log(isPromise(one)); // false
console.log(isPromise(newPromise)); // true