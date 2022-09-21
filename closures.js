//"cerner_2tothe5th_2022"

// Closures are used for data privacy.

checkSecretPassword = () => {
    var password = 'M@niss4352**';
    return {
        guessPassword: (guess) => {
            return guess === password ? true : false;
        }
    }
}

var passwordGame = checkSecretPassword();
passwordGame.guessPassword('heyisthisit?'); // false
passwordGame.guessPassword('M@niss4352**'); // true
