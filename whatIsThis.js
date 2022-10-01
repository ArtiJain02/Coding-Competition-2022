//"cerner_2tothe5th_2022"

// Creating string using special characters in js

const huh1 = (![] + [])[+!+[] + !+[] + !+[]] + (![] + [])[+!+[] + !+[] + !+[] + !+[]] + (![] + [])[+!+[] + !+[]] + (![] + [])[+[]];
const huh2 = (![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]];

console.log(huh1, huh2); // self fail 

// Oh! you don't believe it :P . Let's check how!

/**  
Few strings can be formed with the combination of []()!+ characters. Remember following rules
1. Since Arrays are truthful values, negating the arrays will produce false: ![] === false
2. As per JavaScript coercion rules, the addition of arrays together will stringify (toString) them: [] + [] === ""
3. Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1
4. ![] + []; // -> 'false'
    ![]; // -> false
    "false"[0]; // -> 'f'
5. Using such a concept the above strings are derived.    
**/
