// опять же, загадочное падение сложности. Надеюсь я все понял правильно
function closure() {
    let x = 42;
    return function (y) {
        return x + y;
    }
}