//"cerner_2tothe5th_2022"

// Usually plain objects are not iterable. But it can be achieved by using Symbol.iterator property
// Used Generator functions to achieve it.

const collection = {
    firstValue: 11,
    secondValue: 32,
    thirdValue: 93,
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield this[key];
        }
    },
};
const iterator = collection[Symbol.iterator]();
iterator.next(); // {value: 11, done: false}
iterator.next(); // {value: 32, done: false}
iterator.next(); // {value: 93, done: false}
iterator.next(); // {value: undefined, done: true}

