var currency = prompt('Введите валюту которую желаете приобрести', 'USD/UAH'),
    sum = +prompt('Введите сумму которую нужно обменять','100'),
    course = 28.24,
    result;

switch (currency) {
    case 'UAH': result = sum + ' UAH = '+(sum/course).toFixed(2)+' USD'; break;
    case 'USD': result = sum + ' USD = '+(sum*course)+' UAH'; break;
    
}

alert(result);

//Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. Используя switch, рассчитайте результат конвертации. Результат выведите его в alert.