// Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.


function remove(arr) {
    let newArr = [];

    for (let i=1; i<arr.length; i++) {
        newArr[i-1] = arr[i];
    }

    return newArr;
}

console.log(remove([1,2,3,4,5]));

