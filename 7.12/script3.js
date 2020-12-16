// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:	
// Отфильтруйте пользователей младше 18 лет
// Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
// Сформируйте новый массив, который содержит только полное имя пользователей


const users = [
    {firstname: "Heorhii", lastname: 'Bushchan', age: '26'},
    {firstname: "Oleksandr", lastname: 'Karavaev', middlename:'Karavay', age: '28'},
    {firstname: "Iliia", lastname: 'Zabarnyi', age: '18'},
    {firstname: "Vitalii", lastname: 'Mykolenko', middlename:'Mykola', age: '21'},
    {firstname: "Eduard", lastname: 'Sobol', age: '25'},
    {firstname: "Serhii", lastname: 'Sydorchuk', middlename:'Sidor', age: '29'},
    {firstname: "Evhenii", lastname: 'Makarenko', age: '16'},
    {firstname: "Mykola", lastname: 'Shaparenko', age: '22'},
    {firstname: "Andrii", lastname: 'Yarmolenko', age: '31'},
    {firstname: "Roman", lastname: 'Yaremchuk', age: '15'},
    {firstname: "Victor", lastname: 'Tsyhankov', age: '23'},
];

let younger = users.filter(user => +user.age < 18);

let modifiedUsers = users.map(user=> {
    
    if(user.middlename) {
            user.fullName = user.firstname + ' ' + user.lastname + ' ' +  user.middlename;
        } else {
            user.fullName = user.firstname + ' ' + user.lastname;
        }
        return user;
});


let fullnameUsers = [];
modifiedUsers.forEach(item => fullnameUsers.push(item.fullName));

console.log('Младше 18: ',younger)
console.log(fullnameUsers);

