const { performance } = require('perf_hooks');
const start = performance.now();

// isPrime function.
// Number.prototype.isPrime = function() {
//     let sqrt = Math.sqrt(this)
//     for (let i = 2; i < sqrt; i++) {
//         if ( this % i === 0 ) {
//             return false
//         }
//     }
//     return true
// }

// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e6 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 1,000,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// recursive

// function rFib( n ) {
//         if ( n < 2 ) {
//             return n;
//         }
//         return rFib( n-1 ) + rFib( n-2 );
//     }
// rFib(20);
// iterative

// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }
// console.log(rFib(20));
// console.log(`This took ${performance.now() - start} milliseconds to run`);
// ITERATIVE IS FASTER BY 2 MS
