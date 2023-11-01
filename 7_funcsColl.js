// Не совсем понял задание. Функции в массиве могут быть разными, принимать разное, возвращать разное. 
// Что касается последовтельности, то код и так выполняется последовательно, построчно
// Написал несколько вариантов, но не один не универсален, просто, что бы показать, что можно реализовать по разному
function runSequentiallyFor(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i]();
        console.log(i);
    }
}

function runSequentiallyRecursy(arr, i = 0) {
    if (i >= arr.length) {
        return;
    }
    arr[i]();
    console.log(i)
    runSequentiallyRecursy(arr, i + 1);
}

function runSequentiallyPromise(arr) {
    if (functions.length === 0) {
        return Promise.resolve();
    }
    const [currentFn, ...remainingFunctions] = functions;
    return new Promise((resolve, reject) => {
        currentFn().then(() => {
            executeFunctionsSequentially(remainingFunctions)
                .then(resolve)
                .catch(reject);
        }).catch(reject);
    });
}