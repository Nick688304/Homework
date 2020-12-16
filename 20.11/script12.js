var x = +prompt('x', '0');
var error;


switch (String(x)) {
    case '0': error = 'На ноль делить нельзя'; break;
    case '1': error = 'На единицу делить бессмысленно'; break; 
    case 'NaN': error = 'Не математическая операция'; break; 
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}

console.log(typeof x);

// Найдите и исправьте ошибки в коде: