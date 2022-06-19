<?php
$_POST = json_decode(file_get_contents("php://input", true));
$_POST = (array) $_POST;
echo var_dump($_POST);