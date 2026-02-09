const fizzBuzz = (x) => {
    if (x % 3 === 0 && x % 5 === 0) return `${x} FizzBuzz`;
    if (x % 3 === 0) return `${x} Fizz`;
    if (x % 5 === 0) return `${x} Buzz`;
    return x;
};

const zeroACem = () => {
    for (let i = 0; i <= 100; i++) {
        console.log(fizzBuzz(i));
    }
};
zeroACem();