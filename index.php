<?php
ob_start();
session_start();
require_once ('php/login.php');
doLogin('rick', '111');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Wishing Pool</title>
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Yi-Shiuan Chen,yschen,yschen25,Ka,Ka Ka,陳翊萱,(https://github.com/yschen25)">
    <meta name="keywords" content="html,css,rwd,javascript,jQuery,php,sql,database,db,ui,ux,design,photoshop,illustrator,svg,animation,wishing pool,make wish,fulfill wish,traveling,website building,website designing,許願池,許願,實現願望,旅遊,旅遊規劃">
    <meta name="description" content="A wishing pool that you can see the wishes by click the coins in the pool, the different colors represent the different areas, the menu on the left side can help you select the area, and the coins every time you open the website will be random. Clicking make wish button that you can type where the area you want to go, time, wish content, etc., then click submit the sheet will transform to a coin and the color will be the area you just chose, then there will a hand appear to throw the coin into the wishing pool. Clicking fulfill wish which will show a wish sheet randomly, you can choose to fulfill the wish or report the improper contents. 一個可許願的許願池，可直接撿拾湖中的願望查看，而不同顏色的硬幣代表不同洲別，左上角的選單則可以讓你篩選現在想看的洲別，且每次頁面進來願望都為隨機的；按許下願望可以填寫想去旅遊的洲別、時間、願望內容等，且按照你所選洲別，表單會轉變成相對應顏色的硬幣並出現手將其拋進湖中；按撿拾願望則會則從池中隨機挑選一個願望，你可以選擇幫助實現，或是發現不當內容可檢舉。" />

    <link rel="stylesheet" type="text/css" href="css/cssreset.css">
    <link href="plugin/sweetalert2.min.css" rel="stylesheet" type="text/css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="plugin/sweetalert2.min.js"></script>
    <script src="plugin/anime.min.js"></script>

    <link rel="stylesheet" type="text/css" href="css/col-grid.css">
    <link rel="stylesheet" type="text/css" href="css/wishingPool.css">
    <script src="js/wishingPool.js"></script>
</head>
<body>

<header>
    <div class="logoimg col-xs-6 col-sm-4 col-lg-4">
        <img src="img/logo.svg">
    </div>
    <div class="headerRight headerTitle col-sm-4 col-lg-4">
        <span>許願池</span>
    </div>
    <div class="headerRight headerLogin col-sm-4 col-lg-4">
        <ul>
            <li id="imgBox">
                <img id="loginImg">
            </li>
            <li id="nickNameInfo"></li>
        </ul>
    </div>
    <div class="clear"></div>
</header>

<!-- ============Wishing pool=========== -->
<div class="wishingPool">
    <div class="container-fluid col-xs-12 col-sm-12 col-lg-12">
        <div class="row">

            <!-- ===============onlyWishingPool============= -->
            <div class="onlyWishingPool">
                <img src="img/onlyWishingPool.svg">
            </div>

            <!-- ===============onlyWishingPool front============= -->
            <div class="onlyWishingPool_front">
                <img src="img/onlyWishingPool_front.svg">
            </div>

            <!-- =============Coin type================ -->
            <div class="col-xs-12 col-sm-6 col-lg-5">
                <div class="row">
                    <div class="box coinBox">
                        <div class="item_all">
                            <div class="circle circleDefault"></div>
                            <p class="circlePDefault">選擇全部洲別</p>
                            <div class="clearfix"></div>
                        </div>
                        <div class="item">
                            <img id="asiaCoin" class="coinDefault" class="coinDefault" src="img/coin_asia.svg">
                            <p>亞洲</p>
                        </div>
                        <div class="item">
                            <img id="euCoin" class="coinDefault" src="img/coin_europe.svg">
                            <p>歐洲</p>
                        </div>
                        <div class="item">
                            <img id="aficaCoin" class="coinDefault" src="img/coin_africa.svg">
                            <p>非洲</p>
                        </div>
                        <div class="item">
                            <img id="oceanCoin" class="coinDefault" src="img/coin_oceania.svg">
                            <p>大洋洲</p>
                        </div>
                        <div class="item">
                            <img id="NACoin" class="coinDefault" src="img/coin_northUsa.svg">
                            <p>北美洲</p>
                        </div>
                        <div class="item">
                            <img id="SACoin" class="coinDefault" src="img/coin_southUsa.svg">
                            <p>南美洲</p>
                        </div>
                        <div class="item">
                            <img id="anatrCoin" class="coinDefault" src="img/coin_antarctica.svg">
                            <p>南極洲</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>

            <!-- ===============Button================ -->
            <div class="col-xs-12 col-sm-12 col-lg-push-3 col-lg-3">
                <div class="row">
                    <div class="wish_list">
                        <div class="wish">
                            <a id="aaa" class="makewishPopup" href="javascript:void(0);">許下願望</a>
                        </div>
                        <div class="wish">
                            <a class="achWishPopup" id="achWishPopup" href="javascript:void(0);">撿拾願望</a>
                        </div>
                        <div class="wish">
                            <a class="manaWish" href="https://github.com/yschen25" target="_blank">管理願望</a>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ===============Makewish Popup================ -->
    <form method="post" id="saveMakewish">
        <div class="col-xs-12 col-sm-6 col-lg-4">
            <div class="wishingOrder hide">
                <h2>許下願望</h2>
                <div class="place_box">
                    <select class="place region" id="region" name="region">
                        <option id="regionValue" value="<?php
                            if (isset($_REQUEST["region"])) {echo $_REQUEST["region"];} ?>" disabled selected>請選擇區域
                        </option>
                        <option value="1">亞洲</option>
                        <option value="2">歐洲</option>
                        <option value="3">非洲</option>
                        <option value="4">大洋洲</option>
                        <option value="5">北美洲</option>
                        <option value="6">南美洲</option>
                        <option value="7">南極洲</option>
                    </select>
                    <input type="text" name="city" class="place city" id="city" placeholder="城市" value="<?php if (isset($_REQUEST["city"])) {echo $_REQUEST["city"];} ?>" }>
                    <div class="clearfix"></div>
                </div>
                <div class="type_boxup">
                    <label class="aColor" id="label0" for="cate_1">展演</label>
                    <label class="aColor" id="label1" for="cate_2">吃貨</label>
                    <label class="aColor" id="label2" for="cate_3">購物</label>
                    <label class="aColor" id="label3" for="cate_4">景點</label>
                </div>
                <div class="type_boxdown">
                    <label class="aColor" id="label4" for="cate_5">文化</label>
                    <label class="aColor" id="label5" for="cate_6">冒險</label>
                    <label class="aColor" id="label6" for="cate_7">宗教</label>
                    <label class="aColor" id="label7" for="cate_8">放鬆</label>

                    <input type="checkbox" class="category" name="category" value="1" id="cate_1" style="display: none;">
                    <input type="checkbox" class="category" name="category" value="2" id="cate_2" style="display: none;">
                    <input type="checkbox" class="category" name="category" value="3" id="cate_3" style="display: none;">
                    <input type="checkbox" class="category" name="category" value="4" id="cate_4" style="display: none;">
                    <input type="checkbox" class="category" name="category" value="5" id="cate_5" style="display: none;">
                    <input type="checkbox" class="category" name="category" value="6" id="cate_6" style="display: none;">
                    <input type="checkbox" class="category" name="category" value="7" id="cate_7" style="display: none;">
                    <input type="checkbox" class="category" name="category" value="8" id="cate_8" style="display: none;">
                </div>
                <div class="clearfix"></div>
                <div class="type_box">
                    <input placeholder="開始日期" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" name="date" class="type">
                    <input type="number" id="day" name="day" min="1" class="type date day" placeholder="天數">
                    <input type="number" id="money" name="money" min="50" class="type date money" placeholder="預算">
                    <div class="clearfix"></div>
                    <input type="number" id="people" name="people" min="1" class="type number" placeholder="填寫完人數後可選類型喔">
                    <div class="member-group">
                        <label class="control member_checkbox" for="memType1">小孩
                            <input type="checkbox" name="memberType" id="memType1" value="1">
                            <div class="control__indicator"></div>
                        </label>
                        <label class="control member_checkbox" for="memType2">老人
                            <input type="checkbox" name="memberType" id="memType2" value="2">
                            <div class="control__indicator"></div>
                        </label>
                        <label class="control member_checkbox" for="memType3">孕婦
                            <input type="checkbox" name="memberType" id="memType3" value="3">
                            <div class="control__indicator"></div>
                        </label>
                        <label class="control member_checkbox" for="memType4">其他
                            <input type="checkbox" name="memberType" id="memType4" value="4">
                            <div class="control__indicator"></div>
                        </label>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <textarea id="message" name="message" maxlength="100" class="message" placeholder="許下你的願望.."></textarea>
                <?php $memIdMake = isset($_SESSION['memId']); ?>
                <a class="button" id="makewish_button" title="<?php echo $memIdMake == null ? 1 : $_SESSION['memId']; ?>">送出願望</a>
                <a class="button cancel">取消</a>
                <div class="clearfix"></div>
            </div>
        </div>
    </form>

    <!-- ===============Achievewish Popup============= -->
    <?php
    try {
        require_once("php/connectBooks.php");
        $sql = "select * from wishing_pool order by rand() limit 1";
        $wishes = $pdo->query($sql);
        while ($wishRow = $wishes->fetch(PDO::FETCH_ASSOC)){
    ?>
        <form method="post" id="achieveWish">
            <div class="col-xs-12 col-sm-6 col-lg-4">
                <div class="achieveWish hide">
                    <a class="reportButton">檢舉</a>
                    <h2>撿拾願望</h2>
                    <div class="place_box">
                        <input type="hidden" id="aw_wishno" name="wishNo" value="<?php echo $wishRow["wishNo"]; ?>">
                        <input type="text" id="aw_region" name="region" class="place region" value="<?php echo $wishRow["w_area"]; ?>">
                        <input type="text" id="aw_city" name="city" class="place city" value="<?php echo $wishRow["cityName"]; ?>">
                        <div class="clearfix"></div>
                    </div>
                    <div class="type_boxup">
                        <a class="aColor" id="label_21">展演</a>
                        <a class="aColor" id="label_22">吃貨</a>
                        <a class="aColor" id="label_23">購物</a>
                        <a class="aColor" id="label_24">景點</a>
                    </div>
                    <div class="clearfix"></div>
                    <div class="type_boxdown">
                        <a class="aColor" id="label_25">文化</a>
                        <a class="aColor" id="label_26">冒險</a>
                        <a class="aColor" id="label_27">宗教</a>
                        <a class="aColor" id="label_28">放鬆</a>
                        <input type="checkbox" class="category" name="category[]" value="1" style="display: none;">
                        <input type="checkbox" class="category" name="category[]" value="2" style="display: none;">
                        <input type="checkbox" class="category" name="category[]" value="3" style="display: none;">
                        <input type="checkbox" class="category" name="category[]" value="4" style="display: none;">
                        <input type="checkbox" class="category" name="category[]" value="5" style="display: none;">
                        <input type="checkbox" class="category" name="category[]" value="6" style="display: none;">
                        <input type="checkbox" class="category" name="category[]" value="7" style="display: none;">
                        <input type="checkbox" class="category" name="category[]" value="8" style="display: none;">
                    </div>
                    <div class="clearfix"></div>
                    <div class="type_box">
                        <input type="text" id="aw_date" name="date" class="type" value="<?php echo $wishRow["w_date"]; ?>">
                        <input type="text" id="aw_day" name="date" class="type date" value="<?php echo $wishRow["w_day"]; echo ' 天'; ?>">
                        <input type="text" id="aw_money" name="money" class="type date" value="<?php echo $wishRow["w_budget"]; echo ' 元'; ?>">
                        <div class="clearfix"></div>
                        <input type="text" id="aw_people" name="people" class="type date number" value="<?php echo $wishRow["w_peopleNum"]; echo ' 人'; ?>">
                    </div>
                    <textarea type="text" id="aw_remarks" name="message" class="message"><?php echo $wishRow["w_remarks"]; ?></textarea>
                    <a class="button signUp">實現願望</a>
                    <a id="random" class="button cancel">放棄</a>
                    <div class="clearfix"></div>
                </div>
            </div>
        </form>
    <?php

        $dbCategory = $wishRow["category"];
        $dbMemberType = $wishRow["w_member"];

        $_SESSION["wishNo"] = $wishRow["wishNo"];
        } //while

        } catch (PDOException $ex) {
            echo "錯誤原因 : ", $ex->getMessage(), "<br>";
            echo "錯誤行號 : ", $ex->getLine(), "<br>";
        }
    ?>
    <script>
        var Cate = "<?php echo $dbCategory; ?>";
        var Cate_array = Cate.split(',');
        for (var i = 0; i < Cate_array.length; i++) {
            document.getElementById("label_2" + Cate_array[i]).classList.add('aClick');
        }

        var Mem = "<?php echo $dbMemberType; ?>";
        var Mem_array = Mem.split(',');

        for (var i = 0; i < Mem_array.length; i++) {
            $('#label3' + Mem_array[i]).addClass('ggg');
        }
    </script>

    <!-- ===============Female============= -->
    <div class="wishingPool_female"></div>

    <!-- ===============Female============= -->
    <div class="wishingPool_man"></div>

    <!-- ===============Date Popup============= -->
    <form id="saveDate">
        <div class="col-xs-12 col-sm-5 col-lg-4">
            <div class="achDate hide">
                <div class="aaa">
                    <p>預估完成天數</p>
                    <input type="number" min="1" id="achDate" name="achDate" style="text-align: center">
                    <span><p>天</p></span>
                    <div class="clearfix"></div>
                    <?php $planIdDate = isset($_SESSION['plannerNo']); ?>
                    <input type="hidden" id="dateButton"
                           value="<?php echo $planIdDate == null ? 1 : $_SESSION['memId']; ?>">
                    <a id="date_button" class="button">確定報名</a>
                    <a class="button cancelachDate">取消報名</a>
                </div>
            </div>
        </div>
    </form>

    <!-- ===============Report Popup============= -->
    <form id="saveReport" method="post" action="php/saveReport.php">
        <div class="col-xs-12 col-sm-5 col-lg-4">
            <div class="report hide">
                <div class="aaa">
                    <select name="reportReason" class="reportSelect">
                        <option value="內容為廣告/推銷訊息" selected>內容為廣告/推銷訊息</option>
                        <option value="內容包含暴力、色情訊息">內容包含暴力、色情訊息</option>
                        <option value="內容包含人身攻擊及不實資訊">內容包含人身攻擊及不實資訊</option>
                    </select>
                    <div class="clearfix"></div>
                    <?php $memIdReport = isset($_SESSION['memId']); ?>
                    <input type="hidden" id="reportWish"
                           value="<?php echo $memIdReport == null ? 1 : $_SESSION['memId']; ?>">
                    <a id="report_button" class="button">送出</a>
                    <a class="button cancelReport">取消</a>
                </div>
            </div>
        </div>
    </form>

    <!-- ===============Animation============= -->
    <div class="animation_container">
        <div class="hand">
            <img class="coin_asia_throw">
        </div>
    </div>
</div>

</body>
</html>