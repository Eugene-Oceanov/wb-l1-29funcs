// экспортируем модуль. Признаться, не знаю, верно ли это, никогда не писал библиотеки (только вот такие). Но для моих учебных целей данный способ был вполне удобен. Если бы на боевой работе была такая задача - так бы и сделал. Буду рад, если поправите
module.exports = {
    // функция для нахождения заданного числа в последовательности Фибоначчи
    getNthFib: function () {
        // создаем переменную кэша, в которую будем записывать значения
        let cache = {};
        // создаем рекурсивную функцию, которая замкнется на переменной кэша
        function calcFibonacci(n) {
            // прописываем условие выхода из рекурсии
            if (n <= 1) return n;
            // если заданное значение уже есть в кэше, предотвращаем лишние расчеты и забивание стека
            if (cache[n]) return cache[n];
            // рекурсивно вызываем функцию, стандартное упражнение по рекурсии
            cache[n] = calcFibonacci(n - 1) + calcFibonacci(n - 2);
            // возвращаем искомое число
            return cache[n];
        }
        // возвращаем рекурсивную функцию, замкнутую на переменной кэша
        return calcFibonacci;
    },
    // функция для выстраивания последовательности Фибоначчи до заданного индекса
    getFibSequenceTo: function () {
        // создаем замыкаемый массив
        let fibSequence = [];
        // рекурсивная функция
        function calculateFibonacci(n) {
            // условие выхода из рекурсии
            if (n <= 0) return;
            // если заданные числа равны 1 и 2, то в целом нет смысла считать
            else if (n === 1) {
                fibSequence.push(0);
                return;
            } else if (n === 2) {
                fibSequence.push(0, 1);
                return;
            } else { // ну а если заданное число больше, то рекурсивно вызываем функцию и пушим в массив элементы последовательности 
                calculateFibonacci(n - 1);
                let nextFibonacci = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
                fibSequence.push(nextFibonacci);
            }
            return fibSequence; // возвращаем массив с последовательностью
        }
        return calculateFibonacci; // возвращаем функцию
    },
    // функция, возвращающая заданное число из последовательности простых чисел
    getNthPrime: function () {
        // создаем массив, на котором потом замкнемся
        let primesSequence = [];
        // внутренняя функция
        function calculateNthPrime(n) {
            // счетчик цикла и начальное значение цикла (простые числа начинаются с 2)
            let count = 0;
            let number = 2;
            // в цикле проверяем "простоту" числа с помощью функции, написанной ниже. Пушим его в массив, если оно простое
            while (count < n) {
                if (this.isPrimeNum(number)) {
                    primesSequence.push(number);
                    count++;
                }
                number++;
            }
            return primesSequence[n - 1];
        }
        return calculateNthPrime;
    },

    getPrimeSequenceTo: function (n) {
        let primes = [];
        function calculatePrimes() {
            for (let i = 2; i < N; i++) {
                if (this.isPrimeNum(i)) {
                    primes.push(i);
                }
            }
            return primes;
        }
        return calculatePrimes;
    },
    // вспомогательная функция для определения простого числа
    isPrimeNum: function (n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
}