// Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением - определяет callback

// ask('How old are you?', '10', function(response) {
// 	console.log(response);
// });


function ask( question, defaultValue, callback) {
    let value = prompt(question, defaultValue);
    callback (value);
}


ask('How old are you?', '10', function(response) {
	console.log(response);
});
