function getTotal(numbers) {
    return numbers.reduce(function (acc, items) {
        return acc + items;
    }, 0);
}
console.log(getTotal([1, 23, 34, 53]));