<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandlerIndex;


$pp = new FormHandlerIndex(); 

$validator = $pp->getValidator();
$validator->fields(['firstname', 'email'])->areRequired()->maxLength(50);
$validator->fields(['category'])->areRequired();
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(6000);




//$pp->sendEmailTo('saidurdev@gmail.com'); // ← Your email here

$pp->sendEmailTo(['saidurdev@gmail.com', 'sean@visualpathy.com']);

echo $pp->process($_POST);