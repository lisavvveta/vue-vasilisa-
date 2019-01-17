<?php

require_once('PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];

$mail->isSMTP();
$mail->Host = 'vasilisa.mebel.18';
$mail->SMTPAuth = true;
$mail->Username = 'dzharuzov@mail.ru'; // почта откуда отправляется
$mail->Password = '$RKmFeyQM7TJv9Az'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;  // этот порт может отличаться у других провайдеров

$mail->setFrom('vasilisa.mebel.18'); // от кого будет уходить письмо?
$mail->addAddress('korol_lev38@mail.ru');     // Кому будет уходить письмо

$mail->isHTML(true);

$mail->Subject = 'Заявка на звонок с сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. 'и почта' $email;
$mail->AltBody = '';


