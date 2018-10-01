<?php
require_once("connectBooks.php");
ob_start();
session_start();

try {
    $sql = "insert into wishing_pool(wishNo, memberNo, w_area, w_date, w_day, w_peopleNum, w_member, w_budget, w_remarks, cityName, category, w_endday)values(null, :memberNo, :w_area, :w_date, :w_day, :w_peopleNum, :w_member, :w_budget, :w_remarks, :cityName, :category, :w_endday)";

    // Save the category and memberType to string
    $allCategory = implode(",", $_REQUEST["_category"]);
    $allMemberType = implode(",", $_REQUEST["_memberType"]);

    $date = empty($_REQUEST["_date"]) ? date("Y-m-d", strtotime("+1 day")) : $_REQUEST["_date"];
    $wish = $pdo->prepare($sql);
    $wish->bindValue(":memberNo", empty($_SESSION['memberNo']) ? 001 : $_SESSION['memberNo']);
    $wish->bindValue(":w_area", $_REQUEST["_region"]);
    $wish->bindValue(":cityName", $_REQUEST["_city"]);
    $wish->bindValue(":w_date", $date);
    $wish->bindValue(":w_day", empty($_REQUEST["_day"]) ? 1 : $_REQUEST["_day"]);
    $wish->bindValue(":w_peopleNum", empty($_REQUEST["_people"]) ? 1 : $_REQUEST["_people"]);
    $wish->bindValue(":w_member", empty($allMemberType) ? '0' : $allMemberType);
    $wish->bindValue(":w_budget", empty($_REQUEST["_money"]) ? 50 : $_REQUEST["_money"]);
    $wish->bindValue(":category", $allCategory);
    $wish->bindValue(":w_remarks", $_REQUEST["_message"]);
    $wish->bindValue(":w_endday", date("Y-m-d", strtotime("$date +30 day")));   // Start date plus 30 days
    $wish->execute();
} catch (PDOException $e) {
    echo "資料庫操作失敗,原因：", $e->getMessage(), "<br>";
    echo "行號：", $e->getLine(), "<br>";
}
