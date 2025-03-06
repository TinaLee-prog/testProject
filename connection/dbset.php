<?php
//PDO sql連線指令
$dsn="mysql:host=localhost;dbname=lincan;charset=utf8";
$user="sales";
$password="123456";
$link=new PDO($dsn,$user,$password);
//5.3.6以前的版本要寫這個
$link->exec("SET NAMES UTF8");
?>