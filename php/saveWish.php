<?php
ob_start();
session_start();

try {
    require_once("connectBooks.php");
    $sql = "insert into wish(wishNo, memberNo, w_area, w_date, w_day, w_peopleNum, w_member, w_budget, w_remarks, cityName, category, w_endday)values(null, :memberNo, :w_area,:w_date, :w_day, :w_peopleNum, :w_member, :w_budget, :w_remarks, :cityName, :category, :w_endday)";

    // Save the category date to a string
    $category = $_REQUEST["_category"];
    $allCategory = implode(",", $category);
    $memberType = $_REQUEST["_memberType"];
    $allMemberType = implode(",", $memberType);

    // Start date plus 30 days
    $date = $_REQUEST['_date'];
    $wish = $pdo->prepare($sql);
    if (empty($allMemberType)) $wish->bindValue(":w_member", '0');
    else $wish->bindValue(":w_member", $allMemberType);
    $wish->bindValue(":memberNo", $_SESSION['memberNo']);
    $wish->bindValue(":w_area", $_REQUEST["_region"]);
    $wish->bindValue(":w_date", $_REQUEST["_date"]);
    $wish->bindValue(":w_day", $_REQUEST["_day"]);
    $wish->bindValue(":w_peopleNum", $_REQUEST["_people"]);
    $wish->bindValue(":w_budget", $_REQUEST["_money"]);
    $wish->bindValue(":w_remarks", $_REQUEST["_message"]);
    $wish->bindValue(":cityName", $_REQUEST["_city"]);
    $wish->bindValue(":category", $allCategory);
    $wish->bindValue(":w_endday", date("Y-m-d", strtotime("$date +30 day")));
    $wish->execute();
} catch (PDOException $e) {
    echo "資料庫操作失敗,原因：", $e->getMessage(), "<br>";
    echo "行號：", $e->getLine(), "<br>";
}
