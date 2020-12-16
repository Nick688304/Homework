// Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.


function add(arr) {
    let nawArr = [6,7,8,9,10];

    for (let i = 0; i < nawArr.length; i++) {
      arr[arr.length] = nawArr[i];
    }

    return arr;
  }

  console.log(add([1,2,3,4,5]));