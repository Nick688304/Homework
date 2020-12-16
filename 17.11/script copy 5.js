var x = prompt('Введите скорость км/ч', '1');

var result = (384400 / x);
    result = Math.ceil(result);

alert('приблизительно' + ' ' + result + " " + 'часов');