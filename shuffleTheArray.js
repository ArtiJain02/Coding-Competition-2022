//"cerner_2tothe5th_2022"

// Program to generate an array and shuffle it
generateArray = (start = 1, end = 0) => {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

const generatedArray = generateArray(5, 15); // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
generatedArray.sort(() => 0.5 - Math.random()); // [10, 9, 15, 7, 8, 14, 12, 11, 13, 5, 6]
