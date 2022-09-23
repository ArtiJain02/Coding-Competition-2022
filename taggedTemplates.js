//"cerner_2tothe5th_2022"

// Tagged templates are the advanced form of templates in which tags allow you to parse template literals with a function.

var userA = "Amy Santiago";
var skillA = "Java";
var experienceA = 10;

var userB = "Jake Peralta";
var skillB = "Python";
var experienceB = 5;

infoDetails = (strings, user, experience, skill) => {
    var str0 = strings[0]; // "Mr/Ms. "
    var str1 = strings[1]; // " is a/an "
    var str2 = strings[2]; // "in"

    var expertiseString;
    if (experience > 10) {
        expertiseString = "expert developer";
    } else if (experience > 5 && experience <= 10) {
        expertiseString = "senior developer";
    } else {
        expertiseString = "junior developer";
    }

    return `${str0}${user}${str1}${expertiseString}${str2}${skill}`;
}

infoDetails`Mr/Ms. ${userA} is a/an ${experienceA} in ${skillA}`; // Mr/Ms. Amy Santiago is a/an senior developer in Java
infoDetails`Mr/Ms. ${userB} is a/an ${experienceB} in ${skillB}`; // Mr/Ms. Kane is a/an junior developer in Python
