<?php
try {
    require_once("connectBooks.php");
    $sessId = $_REQUEST["sessId"];
    if ($sessId == '1') {
        echo 'NOT';
    } else {
        echo 'OK';
    }
} catch (PDOException $ex) {
    echo "錯誤原因 : ", $ex->getMessage(), "<br>";
    echo "錯誤行號 : ", $ex->getLine(), "<br>";
}