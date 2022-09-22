//"cerner_2tothe5th_2022"

//Check whether a user is browsing using a mobile or not

detectMobileBrowser = () => {
    if (
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)
    ) {
        return true;
    } else {
        return false;
    }
}
