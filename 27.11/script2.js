//Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

var today = new Date(),
    xDay = prompt('Введите дату в формате (yyyy-MM-dd)','2020-11-27');

let dates = {}

dates.dayBefore = new Date(today.setDate(today.getDate() - 2 )).toDateString();
console.log(dates.dayBefore)

dates.yearBefore = new Date(today.setFullYear(today.getFullYear() -1 )).toDateString();
console.log(dates.yearBefore)


if (+new Date(xDay) <= +new Date(dates.dayBefore) && +new Date(xDay) >= +new Date(dates.yearBefore)) {
    alert('Дата в диапазоне');
} else {
    alert('Дата вне диапазона');
}
