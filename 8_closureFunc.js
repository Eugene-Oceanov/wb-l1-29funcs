function closure() {
    const strArr = [];
        return function(arr) {
            arr.forEach(item => strArr.push(item()));
            return strArr;
        }
}