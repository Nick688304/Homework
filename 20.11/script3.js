var x = prompt('Сколько у меня денег в евриках?', ''),
    y = prompt('Сколько денег у кента, соответсвенно тоже в евриках?', ''),
    possibility = (+x + +y);

if (possibility>3000) {
    alert('Катим тусить на Мальту')
} else {
    alert('Чилим в падике')
}

//У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
