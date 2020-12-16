var month = new Date(),
    result,
    month = month.getMonth();


console.log(month)

switch (month) {
    case 0: 
    case 1: 
    case 11: result = 'Winter'; break;
    case 2: 
    case 3: 
    case 4: result = 'Spring'; break;
    case 5: 
    case 6: 
    case 7: result = 'Summer'; break;
    case 8: 
    case 9: 
    case 10: result = 'Autumn'; break;
}

alert(result);

//В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).