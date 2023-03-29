const a = [1, 65, 3, 25, 93, 28];

let TSLNBN = () => {
    let sln = -1;
    let sbn = a[0];
    for (let item of a) {
        if (sln < item) {
            sln = item;
        }
        if (sbn > item) {
            sbn = item;
        }
    }
    return { sln, sbn };
}

let numberThanTen = () => {
    let numbers = [];
    a.forEach(item => {
        if (item >= 10) {
            numbers.push(item);
        }
    });
    return numbers;
}

let sumArray = () => {
    return a.reduce((a, b) => a + b, 0);
}

console.log(TSLNBN());
console.log(numberThanTen());
console.log(sumArray());


