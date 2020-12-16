// Создайте массив со значениями: ‘Angular’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

const arr = ['Angular', 'jQuery'];

arr.unshift('Backbone.js')
arr.push('ReactJS', 'Vue.js')
arr.splice(1, 0, 'CommonJS')

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'jQuery') {
        alert(arr[i] + ' - это здесь лишнее');
        delete arr[i];  
    }
}

console.log(arr);