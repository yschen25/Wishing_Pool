<?php
require_once("connectBooks.php");

try {
    $sql = "select * from wishing_pool where w_area = :w_area order by rand() limit 1";
    $wishes = $pdo->prepare($sql);
    $wishes->bindValue(":w_area", $_REQUEST["_getArea"]);
    $wishes->execute();
    $wishRow = $wishes->fetch(PDO::FETCH_ASSOC);

    $arr = array();
    $arr[0] = $wishRow["wishNo"];
    $arr[1] = $wishRow["memberNo"];
    $arr[2] = $wishRow["w_area"];
    $arr[3] = $wishRow["w_date"];
    $arr[4] = $wishRow["w_day"];
    $arr[5] = $wishRow["w_peopleNum"];
    $arr[6] = $wishRow["w_member"];
    $arr[7] = $wishRow["w_budget"];
    $arr[8] = $wishRow["w_remarks"];
    $arr[9] = $wishRow["cityName"];
    $arr[10] = $wishRow["category"];

    echo json_encode($arr);

} catch (PDOException $e) {
    echo "資料庫操作失敗,原因：", $e->getMessage(), "<br>";
    echo "行號：", $e->getLine(), "<br>";
}
