// Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

// var source = {firstname: 'Tom', age: 10}
// var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}


function extend(arr,...args){
    
    for(let i=0; i<args.length; i++){

        for(let key in args[i]){

           arr[key]=args[i][key];
        }
    }
    return arr;
}


var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

