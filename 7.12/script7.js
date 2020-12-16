// “История в картинках”. Создайте массив тематически связанных строковых картинок. Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива (одну из картинок). Тема - свободная, ограничена только набором доступных строковых картинок.

let arrPicture = ['Once upon a time in a magic forest','🌳🌲🌴','🚶‍♂️','🧎‍♂️','🕵️‍♂️','🍄', '🤔', '🤤','🤭', '🚶‍♂️', '🐿', '😊', '🐇', '🤗', '🦔', '😍', '🤡', '🤨', '😣', '😧', '🐒', '😃', '🚶‍♂️', '🦄', '😲', '🧜', '😨', '🧞‍♂️', '🤦‍♂️', '👯‍♀️','😏', '🤷‍♂️', '🤪', '🥳🦄🕺💃🧞‍♂️🧜👯‍♀️', '🧍‍♂️💞👯‍♀️', '😄', '🕐', '🤨', '🕐', '😴', '😞', '🙁', '😯', '🥺', '😠', '🚶‍♂️', '👷', '🕵', '💩', '😡', '🤬', 'The end'];


let divNode = document.createElement('div');
document.body.appendChild(divNode);
divNode.style.cssText = 'font-size: 150px; text-align: center; padding: 20px;font-family: Grandstander, cursive;'; 

let i = 0;
setInterval(function() {
	divNode.innerText = arrPicture[i];
	i++;
	if (i === arrPicture.length) i = 0;
}, 1000);