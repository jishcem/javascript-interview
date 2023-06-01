function getEvenNumbersSum(numbers) {
    return numbers
        .filter(num => num % 2 === 0)                   // filter the even numbers 
        .reduce((acc, curr) => acc + curr, 0);          // use Array.reduce method to find the sum
}


const sumEven = getEvenNumbersSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sumEven);