//Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.


for (let i = 0, result = 0; ; i++) {
    let x = prompt('Введите число');

    if (x === null) {
        alert('Количество введенных чисел: ' +i+ ' \nОбщая сумма: '+result+ '\nСреднее арифметическое: '+ (result/i))
    break;
    }

    result += +x;

}