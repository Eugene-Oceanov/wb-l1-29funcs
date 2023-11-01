// Сортировка пузырьком. Не лучший метод, но почему то всем нравится
function sortByAge(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i].age > arr[i + 1].age) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            } else if (arr[i].age === arr[i + 1].age) {
                if (arr[i].name > arr[i + 1].name) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
        }
    }
    return arr;
}