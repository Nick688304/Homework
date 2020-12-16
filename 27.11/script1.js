//Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов jQuery|браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.

//<img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" alt="" style="border: 1px solid #ccc" width="200" />



let htmlImg = {
    src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
    alt: "",
    style: "border: 1px solid #ccc",
    width: 200
};


console.log(htmlImg)
let $img = $('<img>').appendTo('body');

for (let key in htmlImg) {
    $img.attr(key, htmlImg[key]);
    
}

