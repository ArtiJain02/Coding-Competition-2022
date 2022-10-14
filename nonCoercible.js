//"cerner_2tothe5th_2022"
// Non-coercible objects: Program to get rid of type coercion

makeNonCoercible = (value) => {
    if (value == null) {
        throw TypeError("makeNonCoercible shouldn't be called with null or undefined");
    }
    const result = Object(value);
    result[Symbol.toPrimitive] = () => {
        throw TypeError('Trying to coerce non-coercible object');
    }
    return result;
};

// Objects
const associateDetails = makeNonCoercible({ name: "Jenny" });
associateDetails * 10; // throws TypeError: Trying to coerce non-coercible object
associateDetails + 'evil'; // throws TypeError: Trying to coerce non-coercible object
makeNonCoercible(['name'])[0];

// Strings
const associateName = makeNonCoercible('HAYLEY');
associateName + '1';  // throws TypeError: Trying to coerce non-coercible object
associateName.toString() + 1; // HAYLEY1  
associateName === 'HAYLEY'; // false
associateName.toString() === 'HAYLEY'; // true
associateName == 'HAYLEY'; // throws TypeError: Trying to coerce non-coercible object

// Numbers
const one = makeNonCoercible(1);
one == 1; // throws TypeError: Trying to coerce non-coercible object
one === 1; // false
one.valueOf() === 1; // true

// Cast value using `toString` or `valueOf` while using it with primitive types and nonCoercible always returns an object.