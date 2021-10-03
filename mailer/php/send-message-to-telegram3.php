<?php
// Автор: Дмитрий Давыдов
// Материал с сайта https://smartlanding.biz/otpravka-dannyx-formy-v-telegram.html
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $token = "2038813429:AAHkGGTM_TiOBO0TEOLf7o_bWRDD4vMlA90";
    $chat_id = "914778219";

    if (!empty($_POST['phone']) && !empty($_POST['name'])){
        
      if (isset($_POST['name'])) {
        if (!empty($_POST['name'])){
          $name = "Имя написавшего: " . strip_tags($_POST['name']) . "%0A";
        }
      }

      if (isset($_POST['phone'])) {
        if (!empty($_POST['phone'])){
          $phone = "Телефон: " . "%2B" . strip_tags($_POST['phone']) . "%0A";
        }
      }
      if (isset($_POST['message'])) {
        if (!empty($_POST['message'])){
          $text = "Комментарий к заявке: " . strip_tags($_POST['message']) . "%0A";
        }
      }
      $theme = "Заявка с сайта!" . "%0A";
      // Формируем текст сообщения
      $txt = $theme . $name . $phone .$text;

        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
          return true;
        } else {
            $msgs['err'] = 'Ошибка. Сообщение не отправлено!';
            echo json_encode($msgs);
            die('Ошибка. Сообщение не отправлено!');
        }

    } else {
        $msgs['err'] = 'Ошибка. Вы заполнили не все обязательные поля!';
        echo json_encode($msgs);;
    }
} else {
  header ("Location: /");
}
?>