var day = new Date(),
    notification,
    day = day.getDay();

switch (day) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: notification='Сегодня нужно идти на работу!'; break;
    case 6: 
    case 0: notification='Сегодня выходной'; break;
}

alert(notification);

//В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.