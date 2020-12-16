let $table =$('table');
let table = document.querySelector('table');

$table.css({
    margin: '0 auto',
    'border-collapse': "collapse",

});



$('table tr td').css({
    
    width: '10px',
    height: '10px', 
    background: '#eee',
    border: '1px solid #000'
    
});



$('table tr:first-child td').css({
    background: '#106B63'
});

$('table tr:first-child ~tr td').css({
    background: '#106B63'
});

$('table tr:nth-child(6) ~tr td').css({
    background: '#E7C610'
});
$('table tr:nth-child(9) ~tr td').css({
    background: '#C64A08'
});
$('table tr:nth-child(12) ~tr td').css({
    background: '#B43100'
});
$('table tr:nth-child(15) ~tr td').css({
    background: '#102173'
});

$('table tr .none').css({
    background: 'none',
    border: 'none'
});

/*
Используя поиск по селекторам из раздела “Селекторы” справочника и jQuery-функцию css, задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. Последовательность команд:


Таблица расположена посредине страницы, расстояния между ее ячейками нет
Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
Фон в ячейках первых шести строк –#106B63
Фон в ячейках строк 7-9 –#E7C610
Фон в ячейках строк 10-12 – #C64A08
Фон в ячейках строк 13-15 –#B43100
Фон в ячейках всех оставшихся строк –#102173
У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет
*/