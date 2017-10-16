/*
    Спочатку агрузимо наш json файл
    Далі отримуємо дані з localStorage
    Далі обявляємо змінну, яка буде пустою корзиною
*/

// var cart = {};
// $.getJSON('goods.json', function(data){
//     var goods = data;
//     //console.log(goods); //вигрузитьнаші обєкти
//     //І тільки тоді коли ми загрузили всі дані з json файлу, ми запускаємо ф-цію checkStorage
//     checkStorage();
//     console.log(cart);
// });


// function checkStorage(){
//     var getFromStorage = localStorage.getItem('cart');
//     if(getFromStorage != null){
//         cart = JSON.parse(getFromStorage);
//     }
// }



/** Далі працюємо за наступною схемою:
        1. ПОтрібно зчитати цей артикул, який в нас є закинутий в localStorage
        2. По цьому артикулі витягнути його з нашої змфнної goods, яка є всіма даними з json
        3. Вивести 
 */


// var cart = {};
// $.getJSON('goods.json', function(data){
//     var goods = data;
//     checkStorage();

//     //Ф-ція яка буде візуалізувати нашу корзину
//     function showCart(){
//         var out = '';
//         for(key in cart) {
//             //Отримати описи товарів, картинки... Дуже просто в нас же є артикул товарів - в нашому циклі він є [key], які зберігаються в localStorage, і також в нас є змінна goods в якій той самий приславутий артикул присутній. 
//             out+= '<p>' +  goods[key].name + '</p>';
//         }
//         $('.cart').html(out);
//     }
//     showCart();
// });
// function checkStorage(){
//     var getFromStorage = localStorage.getItem('cart');
//     if(getFromStorage != null){
//         cart = JSON.parse(getFromStorage);
//     }
// }




/*Додаємо також кнопки - додати товар в корзину, і відняти товар.
    Механізм роботи кнопки додати:
    1. Звязуємо цю кнопку з товаром в корзині, томущо на даний момент воно не має ніякого відношення до нього
        Будемо то робити додаючи кнопці артикул товару(який зберігається в циклі в змінній key), так як ми робили для попередніх кнопок, 
*/
// var cart = {};
// $.getJSON('goods.json', function(data){
//     var goods = data;
//     checkStorage();

//     function showCart(){
//         var out = '';
//         for(key in cart) {
//             out+= '<div class="cart-container">';
//             out+= '<button class="btn-del"  data-art="'+key+'">x</button>';
//             out+= '<p>' +  goods[key].name + '</p>';
//             out+= '<img src="' + goods[key].image + '">';
//             out+= '<button class="btn-minus" data-art="'+key+'">-</button>';
//             out+= '<p> Amount: ' +  cart[key] + '</p>';
//             out+= '<button class="btn-plus" data-art="'+key+'">+</button>';
//             out+= '<p> Prise: ' +  goods[key].cost*cart[key] + '</p>';
//             out+= '</div>'
//         }
//         $('.cart').html(out);
//         $('.btn-plus').on('click', plusGoods);
//         $('.btn-minus').on('click', minusGoods);
//         $('.btn-del').on('click', deleteGoods);
//     }
//     showCart();
//     function plusGoods(){
//         //console.log(this); //<button class="btn-plus" data-art="11292">
//         // var atr = this.getAttribute('data-art');
//         // console.log(atr);
//         //Внизу те саме але на jQery

//         var btnDataAttr = $(this).attr('data-art');
//         console.log(btnDataAttr);
//         cart[btnDataAttr]++
//         //Далі те все додане потрібно вивести на сторінку (на щостя  нас ф-ція яка то робе)
//         showCart();
//         //І засетати в сховище щоб воно там і було
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }
//     function minusGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         //Для того щоб ми не заходили в мінус, нам потрібно мініпулювати обєктами, а саме їх видаляти
//         if(cart[btnDataAttr] > 1) cart[btnDataAttr]--;
//         //Далі йде проста і дуже сильна ф-ція, яка видаляє обєкти. І так просто наші товари зникають із сторінки
//         else delete cart[btnDataAttr];
//         showCart();
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }
//     function deleteGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         delete cart[btnDataAttr];
//         localStorage.setItem('cart', JSON.stringify(cart));
//         showCart();
//     }
// });

// function checkStorage(){
//     var getFromStorage = localStorage.getItem('cart');
//     if(getFromStorage != null){
//         cart = JSON.parse(getFromStorage);
//     }
// }


/*Легка оптимазація
    Щоб кожен не писати localStorage.setItem('cart', JSON.stringify(cart)). Ми можемо винести її в окрему ф-ція
*/

// var cart = {};
// $.getJSON('goods.json', function(data){
//     var goods = data;
//     checkStorage();

//     function showCart(){
//         var out = '';
//         for(key in cart) {
//             out+= '<div class="cart-container">';
//             out+= '<button class="btn-del"  data-art="'+key+'">x</button>';
//             out+= '<p>' +  goods[key].name + '</p>';
//             out+= '<img src="' + goods[key].image + '">';
//             out+= '<button class="btn-minus" data-art="'+key+'">-</button>';
//             out+= '<p> Amount: ' +  cart[key] + '</p>';
//             out+= '<button class="btn-plus" data-art="'+key+'">+</button>';
//             out+= '<p> Prise: ' +  goods[key].cost*cart[key] + '</p>';
//             out+= '</div>'
//         }
//         $('.cart').html(out);
//         $('.btn-plus').on('click', plusGoods);
//         $('.btn-minus').on('click', minusGoods);
//         $('.btn-del').on('click', deleteGoods);
//     }

//     showCart();
//     function plusGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         console.log(btnDataAttr);
//         cart[btnDataAttr]++
//         showCart();
//         saveToLocalSt()
//     }
//     function minusGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         if(cart[btnDataAttr] > 1) cart[btnDataAttr]--;
//         else delete cart[btnDataAttr];
//         showCart();
//         saveToLocalSt()
//     }
//     function deleteGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         delete cart[btnDataAttr];
//         saveToLocalSt()
//         showCart();
//     }
// });

// function checkStorage(){
//     var getFromStorage = localStorage.getItem('cart');
//     if(getFromStorage != null){
//         cart = JSON.parse(getFromStorage);
//     }
// }
// function saveToLocalSt(){
//     localStorage.setItem('cart', JSON.stringify(cart));
// }






// function getAttr(atr){
//         // console.log(this);
//         var btnDataAttr = $(this).attr(atr);
//         return console.log(btnDataAttr);
//         // return function(atr){
//         //     var btnDataAttr = $(this).attr(atr);
//         //         return btnDataAttr;
//         // }
//     // function getAtr(atr){
//         // var btnDataAttr = $(this).attr(atr);
//     //     return btnDataAttr;
//     // }
// }




// var attr;
// var btns = document.querySelectorAll('button');
// for(var i = 0; i < btns.length; i++){
//     btns[i].onclick = function(event){
//         // console.log(event.target);
//         var target = event.target;
//         attr = target.getAttribute('data-art');
//         return attr; 
//     };
// }
// console.log(attr);





/**
    Додамо, напис пуста корзина 
        Зробимо це в ф-ція яка і візуалізує нашу корзину showCart - в jQery є ф-ція isEmptyObject, яка повертає true коли обєкт пустий

    Добавимо поля для того щоб можна було б відправляти закази, і зчитуємо value з них 
 */

// var cart = {};
// $.getJSON('goods.json', function(data){ 
//     var goods = data;
//     checkStorage();

//     function showCart(){
//         if ( $.isEmptyObject(cart) ) {
//             //коли корзина пуста
//             var out = 'Cart is empty.<br> Add products to cart <a href="index.html">Main page</a>';
//             $('.cart').html(out);
//         }
//         else {
//             var out = '';

//             for(key in cart) {
//                 out+= '<div class="cart-container">';
//                 out+= '<button class="btn-del"  data-art="'+key+'">x</button>';
//                 out+= '<p>' +  goods[key].name + '</p>';
//                 out+= '<img src="' + goods[key].image + '">';
//                 out+= '<button class="btn-minus" data-art="'+key+'">-</button>';
//                 out+= '<p> Amount: ' +  cart[key] + '</p>';
//                 out+= '<button class="btn-plus" data-art="'+key+'">+</button>';
//                 out+= '<p> Prise: ' +  goods[key].cost*cart[key] + '</p>';
//                 out+= '</div>'
//             }
//             $('.cart').html(out);
//             $('.btn-plus').on('click', plusGoods);
//             $('.btn-minus').on('click', minusGoods);
//             $('.btn-del').on('click', deleteGoods);
//         }
//     }

//     showCart();
//     function plusGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         // console.log(btnDataAttr);
//         cart[btnDataAttr]++
//         showCart();
//         saveToLocalSt()
//     }
//     function minusGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         if(cart[btnDataAttr] > 1) cart[btnDataAttr]--;
//         else delete cart[btnDataAttr];
//         showCart();
//         saveToLocalSt()
//     }
//     function deleteGoods(){
//         var btnDataAttr = $(this).attr('data-art');
//         delete cart[btnDataAttr];
//         saveToLocalSt()
//         showCart();
//     }
// });

// function checkStorage(){
//     var getFromStorage = localStorage.getItem('cart');
//     if(getFromStorage != null){
//         cart = JSON.parse(getFromStorage);
//     }
// }
// function saveToLocalSt(){
//     localStorage.setItem('cart', JSON.stringify(cart));
// }
// $('.sendEmail').on('click', sendEmail); //відправити лист із ізамовленням

// function sendEmail(){
//     var nameField = $('#name').val();
//     var emailField = $('#email').val();
//     var phoneField = $('#phone').val();

//     if(nameField != '' && emailField !='' && phoneField !=''){
//         //Якщо користувач заповнив всі поля, нам ж також потрібно перевірити чи є в корзині товар.
//         if(!isEmptyCart(cart)) { //Якщо значення не true
//             alert('Cart is empty')
//         }
//         else{
//             alert('Your order was sent');
//         }
//     }
//     else{
//         alert('Please fill all fields');        
//     }
// }

// //Створюємо ф-цію, яка б перевіряла нашу корзину на наявність властивостей. Повертає false, якщо є вл. і true, якщо немає. ЇЇм ибудемо ередавати куди небуть.
// function isEmptyCart(obj){
//     for(var key in obj) {
//         if(obj.hasOwnProperty(key)){
//             // console.log(key);
//             return true;
//         }
//         else{
//             console.log('false');
//             return false;
//         }
//     }  
// }



/*
    Якщо ж корзина пуста, ми будемо відправляти ajax запит на сервер.
*/
jQuery.support.cors = true;
var cart = {};
$.getJSON('goods.json', function(data){ 
    var goods = data;
    checkStorage();

    function showCart(){
        if ( $.isEmptyObject(cart) ) {
            var out = 'Cart is empty.<br> Add products to cart <a href="index.html">Main page</a>';
            $('.cart').html(out);
        }
        else {
            var out = '';

            for(key in cart) {
                out+= '<div class="cart-container">';
                out+= '<button class="btn-del"  data-art="'+key+'">x</button>';
                out+= '<p>' +  goods[key].name + '</p>';
                out+= '<img src="' + goods[key].image + '">';
                out+= '<button class="btn-minus" data-art="'+key+'">-</button>';
                out+= '<p> Amount: ' +  cart[key] + '</p>';
                out+= '<button class="btn-plus" data-art="'+key+'">+</button>';
                out+= '<p> Prise: ' +  goods[key].cost*cart[key] + '</p>';
                out+= '</div>'
            }
            $('.cart').html(out);
            $('.btn-plus').on('click', plusGoods);
            $('.btn-minus').on('click', minusGoods);
            $('.btn-del').on('click', deleteGoods);
        }
    }

    showCart();
    function plusGoods(){
        var btnDataAttr = $(this).attr('data-art');
        cart[btnDataAttr]++
        showCart();
        saveToLocalSt()
    }
    function minusGoods(){
        var btnDataAttr = $(this).attr('data-art');
        if(cart[btnDataAttr] > 1) cart[btnDataAttr]--;
        else delete cart[btnDataAttr];
        showCart();
        saveToLocalSt()
    }
    function deleteGoods(){
        var btnDataAttr = $(this).attr('data-art');
        delete cart[btnDataAttr];
        saveToLocalSt()
        showCart();
    }
});

function checkStorage(){
    var getFromStorage = localStorage.getItem('cart');
    if(getFromStorage != null){
        cart = JSON.parse(getFromStorage);
    }
}
function saveToLocalSt(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
$('.sendEmail').on('click', sendEmail);

function sendEmail(){
    var nameField = $('#name').val();
    var emailField = $('#email').val();
    var phoneField = $('#phone').val();

    if(nameField != '' && emailField !='' && phoneField !=''){
        if(!isEmptyCart(cart)) { 
            alert('Cart is empty')
        }
        else{
            $.post( //відправка аякс запиту 
                "core/main.php", //куда ми відправляємо
                //далі йде те, що ми будемо відправляти
                {
                    "name": nameField,
                    "email": emailField,
                    "phone": phoneField,
                    "cart": cart
                },
                //У разі успішної відправки, ми отримаємо ф-цію 
                function(data){
                    console.log(data);
                }
            );
        }
    }
    else{
        alert('Please fill all fields');        
    }
}
function isEmptyCart(obj){
    for(var key in obj) {
        if(obj.hasOwnProperty(key)){
            // console.log(key);
            return true;
        }
        else{
            console.log('false');
            return false;
        }
    }  
}

