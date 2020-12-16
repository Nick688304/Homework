//Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.

const person = {
    name: 'John',
    age: '20',
    job: 'unemployed',
    phone: 911
}
var key = person.job

while (true) {
    var x = prompt('Введите значение: ','delete/update');
    

    if (x === null) { 
        break;
    
    }else if (x === 'update') {
        var y = prompt('Введите свойство для изменения: ');
        var z = prompt('Добавить значение:');
            if(y in person){
                person[y] = z

            } else {
                person[y] = z
            }

    } else if (x === 'delete'){
        var y = prompt('Введите свойство для удаления: ');
        delete person[y]
    }
    
}

console.log(person)
