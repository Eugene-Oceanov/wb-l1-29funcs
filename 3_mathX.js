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
        calculateFibonacci(N);
        return sequence;
    },

    getNthPrimeNum: function (n) {
        var primes = [];

        function isPrime(number) {
            for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }

        function calculateNthPrime() {
            var count = 0;
            var number = 2;

            while (count < N) {
                if (isPrime(number)) {
                    primes.push(number);
                    count++;
                }
                number++;
            }
        }

        calculateNthPrime();

        return primes[N - 1];
    }
}