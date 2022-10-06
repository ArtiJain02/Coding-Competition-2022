//"cerner_2tothe5th_2022"
// Program to check if local storage is enabled or not

const isLocalStorageEnabled = () => {
    try {
        const key = `local_storage`;
        window.localStorage.setItem(key, null);
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};
isLocalStorageEnabled(); // true
