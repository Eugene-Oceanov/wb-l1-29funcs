function closure() {
    let x = 42;
    return function(y) {
        return x + y;
    }
}