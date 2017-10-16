// $('document').ready(function(){ //ця ф-ція запускається тільки тоді коли html є завантажений
//     loadGoods();
// });

// function loadGoods(data) {
//     $.getJSON('goods.json', function(data){ //в змінній data будуть зберігаттся наші дані з json
//         var out = ''; //допоміжна змінна
//         for(var key in data) {
//             // console.log(data);
//             // console.log(data[key]);
//             // console.log(data[key].name);
//             out += '<div class="container">';
//             out += '<h3>' + data[key].name + '</h3>';
//             out += '<p>' + data[key]['cost'] + '</p>';
//             out += '<img src="' + data[key].image + '">';
//             out += '<button>Buy</button>';            
//             out += '</div>';
//         }
//         $('#content').html(out);
//     })
// }

/*
Робимо корзину

    Робимо обрробник подій для того щоб при натиску на копку товар додавався в корзину
        Зараз наші кнопки всі одинакові. Для того щоб їх відрізняти, ми кожнай з них добавимо артикул товару через data атрибуті
*/
// var cart = {}; //корзина
// $('document').ready(function(){ 
//     loadGoods();
// });
// function loadGoods(data) {
//     $.getJSON('goods.json', function(data){ //в змінній data будуть зберігаттся наші дані з json
//         var out = ''; //допоміжна змінна
//         for(var key in data) {
//             // console.log(data);
//             // console.log(data[key]);
//             // console.log(data[key].name);
//             out += '<div class="container">';
//             out += '<h3>' + data[key].name + '</h3>';
//             out += '<p>' + data[key]['cost'] + '</p>';
//             out += '<img src="' + data[key].image + '">';
//             out += '<button class="addToCart" data-article="' + key + '">Buy</button>';            
//             out += '</div>';
//         }
//         $('#content').html(out);
//         //далі вішаємо подію на кнопки
//         $('.addToCart').on('click', addToCart);
//     });
// }
// function addToCart(){
//     /*добавляємо товар в localStorage до корзини
//         для цього ств. глобальну змінну в яку ми і будемо зберігати дані назвем її cart
//     */
//     /*Нам потрібно зчитати дані з кнопки
//         для цього нам потрібно, вик this (який буде вказувати саме на кнопку яку натснули) і зчитати тоді з неї атрибут data
//             для зручності все це збережем в змінну
//                 console.log($(this).attr('data-article')); 11294....
//     */ 
//     var btnData = $(this).attr('data-article');
//     //cart[btnData] = 1; //одиничка - це кількість товарів
//     //console.log(cart);
//     //Далі нам потрібно зробити перевірку про те чи є вже такий товар в корзині якщо є то інкрементувати. Якщо ні то відповідно товар, нажатий тільки один раз, тому cart[btnData] = 1;
//     if(cart[btnData] != undefined) { 
//         cart[btnData]++;
//     }
//     else{
//         cart[btnData] = 1;
//     }
//     console.log(cart);
// }


/* 
Далі нам необхідно цю інформацю записати в localStorage
    Для того щоб нам зберігати нам потрібно первести наш обєкт cart в строку

*/

// var cart = {}; //корзина
// $('document').ready(function(){ 
//     loadGoods();
//     //Після завантаження товарів перевірити корзину
//     checkStorage();
//     showMiniCart();
// });
// function loadGoods(data) {
//     $.getJSON('goods.json', function(data){ 
//         var out = ''; 
//         for(var key in data) {
//             out += '<div class="container">';
//             out += '<h3>' + data[key].name + '</h3>';
//             out += '<p>' + data[key]['cost'] + '</p>';
//             out += '<img src="' + data[key].image + '">';
//             out += '<button class="addToCart" data-article="' + key + '">Buy</button>';            
//             out += '</div>';
//         }
//         $('#content').html(out);
//         $('.addToCart').on('click', addToCart);
//     });
// }
// function addToCart(){
//     var btnData = $(this).attr('data-article');
//     if(cart[btnData] != undefined) cart[btnData]++;
//     else {
//         cart[btnData] = 1;
//     }
//     var jsonStr = JSON.stringify(cart); //переводимо в строку
//     localStorage.setItem('cart', jsonStr);
//     showMiniCart();
// }

// function checkStorage(){
//     //первірка наявносіт товарів в локалстоедж
//     var getFromStorage = localStorage.getItem('cart');
//     // console.log(getFromStorage);
//     /*
//         Ми тут перевіряємо, чи є якісь дані в localstorage, якщо є то присвоюємо нашій змінній cart те що ми насетали в localstorage попередньо. 
//     */
//     if(getFromStorage != null){
//         cart = JSON.parse(getFromStorage);
//     }
//     // else{
//     //     $('.miniCart').html('dddd')
//     // }
// }
// /*
//     Ця ф-ція буде виводити cart на сторінку, вона буде запускатися коден раз на після document.ready. А також кожен раз після натискання кнопки(в даному випадку то при запуску ф-ції addToCart)
// */ 
// function showMiniCart(){
//     var out = '';
//     for(var key in cart){
//         out += key + ' - this article of goods, and this are amount of them: ' + cart[key] + '<br>';
//     }
//     $('#miniCart').html(out);
// }





var cart = {}; //корзина
$('document').ready(function(){ 
    loadGoods();
    checkStorage();
    showMiniCart();
});
function loadGoods(data) {
    $.getJSON('goods.json', function(data){ 
        var out = ''; 
        
        for(var key in data) {
            out += '<div class="container">';
            out += '<h3>' + data[key].name + '</h3>';
            out += '<p>' + data[key]['cost'] + '</p>';
            out += '<img src="' + data[key].image + '">';
            out += '<button class="addToCart" data-article="' + key + '">Buy</button>';            
            out += '</div>';
        }
        $('#content').html(out);
        $('.addToCart').on('click', addToCart);
    });
}
function addToCart(){
    var btnData = $(this).attr('data-article');
    if(cart[btnData] != undefined) cart[btnData]++;
    else {
        cart[btnData] = 1;
    }
    var jsonStr = JSON.stringify(cart); 
    localStorage.setItem('cart', jsonStr);
    showMiniCart();
}

function checkStorage(){
    var getFromStorage = localStorage.getItem('cart');
    if(getFromStorage != null){
        cart = JSON.parse(getFromStorage);
    }
}

function showMiniCart(){
    var out = '';
    for(var key in cart){
        out += key + ' - this article of goods, and this are amount of them: ' + cart[key] + '<br>';
    }
    // out+= '<a href="cart.html">Go to cart</a>';
    // $('#miniCart').html(out);
}



























// var request = new XMLHttpRequest();
// //ф-ція яка завантажує товари на сторінку 



// request.open('get', goods.json); //для того щоб відкрити новий ріквест
// //Далі ми призначаємо нашому ріквесту тип - json. Щоб XHR знав, що сервер поверне json
// request.responseType = 'json'; 
// //Далі ми надсилаємо ріквест використовуючи send() method:
// request.send();

// //Ф-ція, яка запускається коли XHR, 

// request.onload = function(){
    
//     }