<?php
$token = "1401503798:AAFATQtrCO2IxAJrjGE0TI4p_AQnsym5mh8";
$chat_id = "31433485";
// $message = "Пользователь запросил комерческое предложение!";
// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}","r");

  $name = $_POST['name'];
  $phone = $_POST['number'];
  $message = "Новая заявка с сайта!" . "%0AИмя: " . $name . "%0AНомер телефона: " . $phone;

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}","r");
  echo 'success';

//
// $proxy = "67.154.111.452:3128";
// $ch = curl_init();
// curl_setopt($ch, CURL_SSL_VERIFYPEER, 0);
// curl_setopt($ch, CURL_SSL_VERIFYHOST, 0);
// curl_setopt($ch, CURLOPT_PROXY, $proxy);
// curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt($ch, CURLOPT_HEADER, 1);
// $curl_scrapped_page = curl_exec($ch);
// curl_close($ch);
?>
