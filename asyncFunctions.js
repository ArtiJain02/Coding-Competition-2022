//"cerner_2tothe5th_2022"
// Function to execute an array of asynchronous functions one after the other using callback

function firstCall(callback) {
    setTimeout(() => {
        console.log('Completed firstCall');
        callback();
    }, 3000);
}

function secondCall(callback) {
    setTimeout(() => {
        console.log('Completed secondCall');
        callback();
    }, 2000);
}

function thridCall(callback) {
    setTimeout(() => {
        console.log('Completed thridCall');
        callback();
    }, 1000);
}

function callbackManager(asyncFunction) {
    function nextFunctionExecutor() {
        const nextAsyncFunction = asyncFunction.shift();
        if (nextAsyncFunction && typeof nextAsyncFunction === 'function') {
            nextAsyncFunction(nextFunctionExecutor, asyncFunction);
        }
    }
    nextFunctionExecutor();
}

// Execution code
callbackManager([firstCall, secondCall, thridCall]);