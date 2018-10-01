<?php
require_once("connectBooks.php");
function doLogin($memId, $memPsw){
    global $pdo;
    try {
        $sql = "select * from member where memId=:memId and memPsw=:memPsw";
        $member = $pdo->prepare($sql);
        $member->bindValue(":memId", $memId);
        $member->bindValue(":memPsw", $memPsw);
        $member->execute();

        if ($member->rowCount() != 0) {
            $memRow = $member->fetch();
            $memberNo = $memRow["memberNo"];
            $_SESSION["memberNo"] = $memRow["memberNo"];
            $_SESSION["nickName"] = $memRow["nickName"];
            $_SESSION["memId"] = $memRow["memId"];
            $_SESSION["memPsw"] = $memRow["memPsw"];
            $_SESSION["sexuality"] = $memRow["sexuality"];
            $_SESSION["pic"] = $memRow["m_pic"];

            // 確認是否同時為規劃師
            $sqlPlan = "select * from member, planner where member.memberNo = planner.memberNo and member.memberNo = $memberNo";
            $planner = $pdo->prepare($sqlPlan);
            $planner->execute();

            if ($planner->rowCount() != 0) {
                $planRow = $planner->fetch();
                $_SESSION["plannerNo"] = $planRow["plannerNo"];
            }
        } else {
            echo "error";
        }
    } catch (PDOException $ex) {
        echo "資料庫操作失敗，原因 : ", $ex->getMessage(), "<br>";
        echo "行號 : ", $ex->getLine(), "<br>";
    }
}