function isStrangeNum(num) {
    // создаем пустые массив и переменную
    let arr = [];
    let sum = 0;
    // в цикле все целые делители аргумента записываем в массив
    for (let i = 1; i < num; i++) if (num % i === 0) arr.push(i);
    // в цикле перебираем массив с делителями и записываем их сумму в переменную sum
    for (let x = 0; x < arr.length; x++) sum += arr[x];
    // сравниваем аргумент и sum, если они совпадают - возвращаем true, если нет - false
    if (sum === num) return true;
    else return false;
}