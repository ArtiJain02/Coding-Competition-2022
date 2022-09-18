//cerner_2^5_2022

// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each 
// take a single argument. The main benefit of function currying is that when you need to call a function with the same parameters 
// repeatedly, you can reuse and refactor your code, which becomes much easier to maintain over time

const list = [
    {
        id: 1,
        name: 'Moira',
        age: 48,
    },
    {
        id: 2,
        name: 'John',
        age: 54,
    },
    {
        id: 3,
        name: 'David',
        age: 26,
    },
    {
        id: 4,
        name: 'Alexis',
        age: 22,
    },
];
const filtering = (name) => (item) => item.name !== name;

const filterByName = (list, name) => {
    return list.filter(filtering(name));
}

filterByName(list, 'John');
