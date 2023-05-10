//Знайти елемент із найбільшою частотою повторень
const arr = [1, 2, 3, 3, 6, 6, 1, 1, 3, 4, 2, 5, 2, 6, 3, 6];
function mostFrequent(arr) {

    return arr.reduce((a, b) =>
        (arr.filter(v => v === a).length >= arr.filter(v => v === b).length) ? a : b
    );
}

console.log(mostFrequent(arr));
