<?php

/*
    Для початку, ми нам потрібно прочитати json файл. Томущо нам приходить тільки артикул товару без ніякої додаткової інфи. 

*/
$json = file_get_contents('../goods.json');
//Декодуємо його в масив
$json = json_decode($json, true);
//Створюємо лист

$message = '';
$message .= '<h1>Order in shop</h1>';
$message .= '<p>Phone: '.$_POST['phone'].'</p>';
$message .= '<p>Email: '.$_POST['email'].'</p>';
$message .= '<p>Name: '.$_POST['name'].'</p>';
//Далі ми працюємо з к-стю товарів
$cart = $_POST['cart'];
$sum = 0;
foreach($cart as $articul=>$count){
    $message .= $json[$articul]['name'].' --- '; //виводимо імя товарів
    $message .= $count.' --- '; 
    $message .= $count*$json[$articul]['cost'];
    $message .= '<br>';
    $sum = $sum + $count*$json[$articul]['cost'];
}
$message .= 'Total: ' .$sum;
// print_r($message);

//Далі відправляємо листа
    //Вказуємо кому ми, будемо відпавляти листа, і також той самий адрес, який вказав користувач у формі
$to = 'nazariymurall@gmail.com'.',';
$to = $_POST['email'];
$spectext = '<!DOCTYPE HTML><html>
<head><title>Order</title></head><body>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Order in shop', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}
