//Написати функцію, яка поверне кількість днів для заданого місяця та року
function getDaysInMonth(month, year) {
    let date = new Date(year, month, 0);
    return date.getDate();
}
console.log(getDaysInMonth(12,2018))
