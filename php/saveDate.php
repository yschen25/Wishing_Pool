<?php
require_once("connectBooks.php");
ob_start();
session_start();

try {
    $sql = "insert into apply(applyNo, wishNo, plannerNo, w_status, e_timeLimit) values(null, :wishNo, :plannerNo, :w_status, :e_timeLimit)";
    $wish = $pdo->prepare($sql);
    $wish->bindValue(":plannerNo", $_SESSION["plannerNo"]);
    $wish->bindValue(":wishNo", $_REQUEST["wishNO_"]);
    $wish->bindValue(":w_status", 0);
    $wish->bindValue(":e_timeLimit", $_REQUEST["achDate_"]);
    $wish->execute();
} catch (PDOException $e) {
    echo "資料庫操作失敗,原因：", $e->getMessage(), "<br>";
    echo "行號：", $e->getLine(), "<br>";
}
