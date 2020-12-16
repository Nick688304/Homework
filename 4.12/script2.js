// Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их 

// var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
// console.log( result ); // "542 -214"


function highAndLow(args) {
    let x = args.split(' ');

    let lowest = x[0]; 
    let highest = x[0];

    for (let i = 1; i < x.length; i++) {
        if (+x[i] < lowest){
            lowest = x[i];
        }
         
        if (+x[i] > highest){
            highest = x[i];
        }
         
    }

    return `"${highest} ${lowest}"`;
}

var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log( result ); // "542 -214"


