//5. Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS или jQuery).


const person = {
    name: 'John',
    age: '20',
    job: 'unemployed',
    
}

const $dl = $('<dl>').appendTo('body');

for (let key in person) {
    
    $('<dt>')
        .appendTo($dl)
        .text(key || 'Key');

    $('<dd>')
        .appendTo($dl)
        .text(person[key] || '-');

   
}


//6. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...). Добавьте этот гаджет персоне, созданной ранее. После этого создайте независимую копию объекта person, не используя встроенный метод Object.assign и JSON.parse, то есть перебором свойств.


const phone = {};

phone.brand = prompt('Введите бренд');
phone.model = prompt('Введите модель');
phone.resolution = prompt('Введите разрешение');
phone.color = prompt('Введите цвет');

person.phone = phone;


const personIndependentCopy = {}

for (let key in person) {
    personIndependentCopy[key] = person[key];
}


delete person.name;
personIndependentCopy.name = 'George';


console.log(person)
console.log(personIndependentCopy)


//7. С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget. Добавьте поля объекта gadget в созданный ранее список <dl>


let {phone: gadget} = personIndependentCopy;


console.log(gadget)


for (let key in gadget) {
    
    $('<dt>')
        .appendTo($dl)
        .text(key || 'Key');

    $('<dd>')
        .appendTo($dl)
        .text(gadget[key] || '-');

   
}