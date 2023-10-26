module.exports = {
    getNthFib: function () {
        let cache = {};
        function calcFibonacci(n) {
            if (n <= 1) return n;
            if (cache[n]) return cache[n];
            cache[n] = calcFibonacci(n - 1) + calcFibonacci(n - 2);
            return cache[n];
        }
        return calcFibonacci;
    },

    getFibSequenceTo: function (n) {
        let sequence = [];
        function calculateFibonacci(n) {
            if (n <= 0) return;
            else if (n === 1) {
                sequence.push(0);
                return;
            }
            else if (n === 2) {
                sequence.push(0, 1);
                return;
            }
            else {
                calculateFibonacci(n - 1);
                let nextFibonacci = sequence[sequence.length - 1] + sequence[sequence.length - 2];
                sequence.push(nextFibonacci);
            }
        }
        calculateFibonacci(n);
        return sequence;
    },

    getNthPrimeNum: function (n) {
        let primes = [];
        function calculateNthPrime() {
            let count = 0;
            let number = 2;
            while (count < n) {
                if (this.isPrimeNum(number)) {
                    primes.push(number);
                    count++;
                }
                number++;
            }
        }
        calculateNthPrime();
        return primes[n - 1];
    },

    getPrimeSequenceTo: function (n) {
        let primes = [];
        function calculatePrimes() {
            for (let i = 2; i < N; i++) {
                if (this.isPrimeNum(i)) {
                    primes.push(i);
                }
            }
        }
        calculatePrimes();
        return primes;
    },

    isPrimeNum: function (n) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
}