//"cerner_2tothe5th_2022"
// A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk.

const area = (x, y) => x * y;
const thunk = () => area(5, 6);
thunk(); // 30

// Async Thunk Functions

function fetchData(data) {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => data(json));
}

const asyncThunk = function () {
    return fetchData(function getData(data) {
        console.log(data);
    });
};

asyncThunk();

