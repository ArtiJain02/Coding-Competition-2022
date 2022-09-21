//"cerner_2tothe5th_2022"

// Infinite functions is a concept in js, where we can pass n number of arguments using spread operator

const addition = (...input) => {
    let sum = 0;
    for (let i of input) sum += i;
    return sum;
}
addition(1, 2, 3); // Output: 6
addition(43, 23, 31, 5, 54); // Output: 156
