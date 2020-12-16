// Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

// console.log( sum(1, 2, 3, 4, 5) ); // 15


function sum(...args) {
    if (args.length > 0) {
        return args[0] + sum(...args.slice(1));
    }

    return 0;
}

console.log( sum(1, 2, 3, 4, 5) ); // 15