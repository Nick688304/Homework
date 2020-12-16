//Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.
//console.log( findLongestWordLength('Аргентина манит негра') ); // 9


function findLongestWordLength(str) {
    var strSplit = str.split(' ');
    var longest = 0;

    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longest){
      longest = strSplit[i].length;
       }
    }
    return longest;
  }


console.log( findLongestWordLength('Аргентина манит негра') ); // 9
