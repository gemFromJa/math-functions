function primeFactors(n) {
    let factors = [];

    function pollardRho(n) {
        let x = 2; // random number between 1 and n
        let y = x;
        let c = 1; // random constant
        let d;

        function f(x) {
            return (x * x + c) % n;
        }

        while (true) {
            x = f(x);
            y = f(f(y));
            d = gcd(Math.abs(x - y), n);
            if (d > 1) {
                break;
            }
        }

        if (d === n) {
            return pollardRho(n);
        } else {
            return d;
        }
    }

    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    while (n > 1) {
        let factor = pollardRho(n);
        factors.push(factor);
        n = n / factor;
    }
    return factors;
}
