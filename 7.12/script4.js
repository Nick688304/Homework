// Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

// console.log( cube(2) ); // 8


function cubeWayA(numb) {
    let result = numb;

    for(let i=1; i<3; i++) {
        result *= numb;
    }
    return result
}

console.log( cubeWayA(2) ); // 8

function cubeWayB(numb, pow = 3) {
    if (pow == 1) {
      return numb;
    } else {
      return numb * cubeWayB(numb, pow - 1);
    }
  }

  console.log( cubeWayB(2) ); // 8
