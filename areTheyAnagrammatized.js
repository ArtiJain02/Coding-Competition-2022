//"cerner_2tothe5th_2022"

// Check whether a particular string is an anagram or not.

const isItAnagrammatized = (string1, string2) => {
  const arrangeAlphabetically = string => string
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '') // remove all the symbols and keep numbers and letters
    .split('')
    .sort()
    .join('');
  return arrangeAlphabetically(string1) === arrangeAlphabetically(string2);
};

isItAnagrammatized("vacation time ", " I am not active.") // true
isItAnagrammatized("a gentleman", "elegant man") // true

// P.S. Anagram is the words that can be rephrased to make another word
