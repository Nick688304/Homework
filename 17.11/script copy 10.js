var x = prompt('колонка 1', '10px');
var y = prompt('колонка 2', '10px');
var z = prompt('колонка 3', '10px');

var x = parseInt(x)
var y = parseInt(y)
var z = parseInt(z)


alert('Наиболее высокая колонка равна' + ' ' + Math.max(x, y, z)+'px')