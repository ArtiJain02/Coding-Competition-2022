//"cerner_2tothe5th_2022"
// Program to check if the brackets are balanced or not in a string

areBracketsBalanced = (string) => {
    let s = string.replace(/\s+/g, '');
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    for (let i = 0; i < s.length; i += 1) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        }
        else if (s[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(areBracketsBalanced("( {} [] ({[]}))")); // true
console.log(areBracketsBalanced("{){")); // false