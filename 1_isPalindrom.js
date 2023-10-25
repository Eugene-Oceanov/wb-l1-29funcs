function isPalindrom(str) {
    // принимаемое значение приводим к строке (число тоже может быть палиндромом), убираем все пробелы и верхние регистры
    str = str.toString().replaceAll(" ", "").toLowerCase();
    // создаем переменную, которая принимает измененный выше аргумент, переводит в массив, разворачивает и приводит обратно к строке
    let strReverse = str.split("").reverse().join("");
    // сравниваем значения, если они совпадают - возвращаем true, если нет - false
    if (str === strReverse) return true;
    else return false;
}