<?php
require_once("connectBooks.php");
ob_start();
session_start();

try {
    $sql = "insert into report(wishReNo, memberNo, wishNo, wp_info)values(null, :memberNo, :wishNo,:wp_info)";
    $wish = $pdo->prepare($sql);
    $wish->bindValue(":memberNo", $_SESSION['memberNo']);
    $wish->bindValue(":wishNo", $_SESSION["wishNo"]);
    $wish->bindValue(":wp_info", $_REQUEST["reportReason"]);
    $wish->execute();
    header("Location:../index.php");
} catch (PDOException $e) {
    echo "資料庫操作失敗,原因：", $e->getMessage(), "<br>";
    echo "行號：", $e->getLine(), "<br>";
}
