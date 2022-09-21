//"cerner_2tothe5th_2022"

// The concept of Memorization
// Memoization is a programming technique that attempts to increase a function’s performance by caching its previously computed results.
// JavaScript objects behave like associative arrays, they are ideal candidates to act as caches.

const memoizedMultiplication = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log('Fetching from cache');
            return cache[value];
        } else {
            console.log('Calculating new results');
            let result = value * 10;
            cache[value] = result;
            return result;
        }
    }
}
// returned function from memoizedMultiplication
const newMultiplication = memoizedMultiplication();

newMultiplication(9);
// output: 
// Calculating new results
// 90

newMultiplication(9);
// output:
// Fetching from cache
// 90
