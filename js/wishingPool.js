$(function () {

    // Remove 000webhost logo
    $('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').parent().remove();

    function $id(id) {
        return document.getElementById(id);
    }

    // Check is login
    window.addEventListener("load", function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var arr = xhr.responseText.split(",");
                    if (xhr.responseText != "not") {
                        $id("nickNameInfo").innerHTML = arr[0];
                        $id("loginImg").src = "img/member/" + arr[1];
                    }
                } else {
                    console.log(xhr.status);
                }
            }
        };
        var url = "php/isLogin.php";
        xhr.open("get", url, true);
        xhr.send(null);
    }, true);

    // Console style
	var consoleStyle1 = "margin: 2px 10px; font-size: 20px;";
	var consoleStyle2 = "font-size: 220px; background: url(https://i.imgur.com/1w7qsMY.png) no-repeat;";
	console.log("%c In The Memory Of My Deepest Love Hamster", consoleStyle1);
	console.log("%c Less Sugar (2016 - 2018.11.06)", consoleStyle1);
	console.log("%c       ", consoleStyle2);

// ==========================COIN AND POPUP=================================

    // Change the coin's brightness when click the open/close all button
    $(".item_all .circle").click(function () {

        if (!$(this).hasClass("circleChange")) {
            $(".item_all p").addClass("circleP");
            $(".coin_pool").addClass("hide");
            $(this).addClass("circleChange");
            $(".item img").addClass("coinChange");
        } else {
            $(".item_all p").removeClass("circleP");
            $(".coin_pool").removeClass("hide");
            $(this).removeClass("circleChange");
            $(".item img").removeClass("coinChange");
        }
    });

    // Change the coin's brightness when click the coin
    $(".item img").click(function () {
        $(this).toggleClass("coinChange");
        if ($(this).attr('id') == 'asiaCoin') $(".coin_pool.asiaCoin").each(function () { $(this).toggleClass('hide'); });
        else if ($(this).attr('id') == 'euCoin') $(".coin_pool.euCoin").each(function () { $(this).toggleClass('hide'); });
        else if ($(this).attr('id') == 'aficaCoin') $(".coin_pool.aficaCoin").each(function () { $(this).toggleClass('hide'); });
        else if ($(this).attr('id') == 'oceanCoin') $(".coin_pool.oceanCoin").each(function () { $(this).toggleClass('hide'); });
		else if ($(this).attr('id') == 'NACoin') $(".coin_pool.NACoin").each(function () { $(this).toggleClass('hide'); });
		else if ($(this).attr('id') == 'SACoin') $(".coin_pool.SACoin").each(function () { $(this).toggleClass('hide'); });
		else if ($(this).attr('id') == 'anatrCoin') $(".coin_pool.anatrCoin").each(function () { $(this).toggleClass('hide'); });

        // Change open/close all btn color
        // if ($(".item img").hasClass("coinChange")) {
        //     $(".item_all .circle").addClass("circleChange");
        //     $(".item_all p").addClass("circleP");
        // } else {
        //     $(".item_all .circle").removeClass("circleChange");
        //     $(".item_all p").removeClass("circleP");
        // }

    });

    // Change the type button color when click the button
    $(".type_boxup label, .type_boxdown label").click(function () { $(this).toggleClass("aClick"); });

    // Show the makewish popup when click the makewish button
    $(".makewishPopup").click(function () {
        $(".wishingPool .wishingOrder").toggleClass("show");
        $("header, .container-fluid, .onlyWishingPool, .wishingPool_female, .wishingPool_man, .coin_pool").toggleClass("coinChange");
        $(".achWishPopup, .makewishPopup, .manaWish, .item_all p, .item img, .item_all .circle, .coinBox").addClass("disable");
        coin_dark();
    });

    // Show the achievewish popup when click the achievewish button
    $(".achWishPopup").click(function () {
        $(".wishingPool .achieveWish").toggleClass("show");
        $("header, .container-fluid, .onlyWishingPool, .wishingPool_female, .wishingPool_man, .coin_pool").toggleClass("coinChange");
        $(".achWishPopup, .makewishPopup, .manaWish, .item_all p, .item img, .item_all .circle, .coinBox").addClass("disable");
        coin_dark();
    });

    // Close makewish and achievewish popup
    $(".cancel").click(function () {
        $(".wishingPool .achieveWish, .wishingPool .wishingOrder").removeClass("show");
        $("header, .container-fluid, .onlyWishingPool, .wishingPool_female, .wishingPool_man, .coin_pool").toggleClass("coinChange");
        $(".coin_pool, .coin_pool2").removeClass("coinChange");
        $(".achWishPopup, .makewishPopup, .manaWish, .item_all p, .item img, .item_all .circle, .coinBox").removeClass("disable");
        coin_bright();
    });

    // Disable the achievewish's input
    $('.achieveWish input, .achieveWish .message').attr('disabled', 'disabled');

    // Show the date popup
    $(".signUp").click(function () {
        $(".wishingPool .achDate").toggleClass("show");
        $(".wishingPool .achieveWish").toggleClass("coinChange");
        $(".signUp, .cancel").addClass("disable");
    });

    // Close the date popup
    $(".cancelachDate").click(function () {
        $(".wishingPool .achDate").removeClass("show");
        $(".wishingPool .achieveWish").toggleClass("coinChange");
        $(".signUp, .cancel").removeClass("disable");
    });

    // Show the report popup
    $(".reportButton").click(function () {
        $(".wishingPool .report, .wishingPool .achDate").toggleClass("show");
        $(".wishingPool .achieveWish").toggleClass("coinChange");
        $(".signUp, .cancel, .reportButton").addClass("disable");
    });

    // Close the report popup
    $(".cancelReport").click(function () {
        $(".wishingPool .report, .wishingPool .achDate").toggleClass("show");
        $(".wishingPool .achieveWish").toggleClass("coinChange");
        $(".signUp, .cancel, .reportButton").removeClass("disable");
    });

    var background_change = false;
	function coin_dark() { background_change = true; }
	function coin_bright() { background_change = false; }

// ============================MAKE WISH===================================

    // Check the checkForm form by makewish_button
	window.onload = function init() {
	    $id("makewish_button").onclick = checkForm;
	}

    // Verify the makewish popup colume when submit
    function checkForm() {

        var region = $id("region").value;
        var city = $id("city").value;
        var categoryrArray = [];
        var date = $id("date").value;
        var day = $id("day").value;
        var people = $id("people").value;
        var memberArray = [];
        var money = $id("money").value;
        var message = $id("message").value;
        $('.wishingOrder input:checkbox[name=category]:checked').each(function () { categoryrArray.push($(this).val()); });
        $('.wishingOrder input:checkbox[name=memberType]:checked').each(function () { memberArray.push($(this).val());});

        if (region == '') {
            swal({
	                title: '請選擇洲別',
	                html: '<span style="color:#515151;font-size:18px">有沒有想過到歐洲看看呢</span>',
	                confirmButtonText: '返回',
	                confirmButtonColor: '#E74C3C',
	                width: 500
            });
            $id("region").focus();
            return;
        }
        if (categoryrArray.length == 0) {
            swal({
	                title: '請填寫類別',
	                html: '<span style="color:#515151;font-size:18px">吃貨、購物與景點是前三受歡迎的選項</span>',
	                confirmButtonText: '返回',
	                confirmButtonColor: '#E74C3C',
	                width: 500
            });
            $id("categorySum").focus();
            return;
        }
        if (message == '') {
            swal({
	                title: '請填寫許願內容',
	                html: '<span style="color:#515151;font-size:18px">許下願望，大家都願意竭盡全力幫你實現願望</span>',
	                confirmButtonText: '返回',
	                confirmButtonColor: '#E74C3C',
	                width: 500
            });
            $id("message").focus();
            return;
        } else {
            if ($('#region').val() == 1) $('.coin_asia_throw').attr('src', 'img/coin_asia.svg').addClass('asiaCoin');
            else if ($('#region').val() == 2) $('.coin_asia_throw').attr('src', 'img/coin_europe.svg').addClass('euCoin');
            else if ($('#region').val() == 3) $('.coin_asia_throw').attr('src', 'img/coin_africa.svg').addClass('aficaCoin');
            else if ($('#region').val() == 4) $('.coin_asia_throw').attr('src', 'img/coin_oceania.svg').addClass('oceanCoin');
            else if ($('#region').val() == 5) $('.coin_asia_throw').attr('src', 'img/coin_northUsa.svg').addClass('NACoin');
            else if ($('#region').val() == 6) $('.coin_asia_throw').attr('src', 'img/coin_southUsa.svg').addClass('SACoin');
            else if ($('#region').val() == 7) $('.coin_asia_throw').attr('src', 'img/coin_antarctica.svg').addClass('anatrCoin');
        }

        transformToCoin();

        $.post("php/saveWish.php",
            {
                _region: region,
                _city: city,
                _category: categoryrArray,
                _date: date,
                _day: day,
                _people: people,
                _memberType: memberArray,
                _money: money,
                _message: message
            },
            function (data, status) {
                // console.log("Data: " + data + "\nStatus: " + status);
            });

        $id("saveMakewish").reset();
        $(".wishingOrder .aClick").each(function () { $(this).removeClass('aClick'); });
    }

    // Make wish animation
	var wishingOrder_ani, hand_ani, coin_ani;
	function transformToCoin() {

	    $("header, .container-fluid, .onlyWishingPool, .wishingPool_female, .wishingPool_man, .coin_pool").toggleClass("coinChange");
	    coin_bright();

	    wishingOrder_ani = anime({
	        targets: '.wishingOrder',
	        translateX: '58%',
	        easing: 'linear',
	        rotate: 450,
	        scale: 0.001
	    });

	    hand_ani = anime({
	        targets: '.hand',
	        top: '3vw',
	        easing: 'easeInOutCirc',
	    });

	    coin_ani = anime({
	        targets: '.coin_asia_throw',
	        opacity: 1,
	        offset: 1000,
	        easing: 'linear',
	        complete: function () {
	            $('.coin_asia_throw').addClass('coinThrow');
	            $('.coin_asia_throw').removeClass('coin_asia_throw');
	            arc();
	        }
	    });
	}

	function arc() {
	    let coin_position = $('.coinThrow').offset();
		var offset_ = randomCoords($('#coinId_'+1));
		let p0 = {x: coin_position.left, y: coin_position.top}, 
		p1 = p2 = {x:(offset_[0]+coin_position.left)/2, y:offset_[1]-0.4*$('.onlyWishingPool').height()}, 
		p3 = {x: offset_[0], y: offset_[1]};
		var steps = 100;
		var array_x=[], array_y=[];

		for(i = 0; i <= 1; i += 0.01){
			var output = bezier(i, p0, p1, p2, p3);
			array_x.push({value:output.x});
			array_y.push({value:output.y});
		}

		let scale_temp = 0.4;
		if(window.innerWidth<=425){
			scale_temp =0.8
		}

	    anime({
		        targets: '.coinThrow',
		        left: array_x,
		        top: array_y,
		        rotate: {
		            value: 90,
		            easing: 'easeInOutSine'
		        },
		        scale: scale_temp,
		        complete: function () {
		            setTimeout(function () {
		                restart_ani = anime({
		                    targets: '.hand',
		                    top: '3vw',
		                    easing: 'linear',
		                    direction: 'reverse'
		                })

		                $(".wishingPool .achieveWish, .wishingPool .wishingOrder").removeClass("show");
		                $(".achWishPopup, .makewishPopup, .manaWish, .item_all p, .item img, .item_all .circle, .coinBox").removeClass("disable");

		                wishingOrder_ani.seek(0);
		                setTimeout(function () {
		                    hand_ani.seek(0);
		                }, 500);

		                var temp = $('.coinThrow').detach();
		                $('.animation_container').append(temp);
		                temp.attr('id', 'coinId_' + coinId);
		                $('.coinThrow').addClass('coin_pool').removeClass('coinThrow');

		                $("#coinId_" + coinId).click(function () {
		                    $(".wishingPool .achieveWish").toggleClass("show");
		                    $("header, .container-fluid, .onlyWishingPool, .wishingPool_female, .wishingPool_man, .coin_pool").toggleClass("coinChange");
		                    $(".achWishPopup, .makewishPopup, .manaWish, .item_all p, .item img, .item_all .circle, .coinBox").addClass("disable");

		                    let data = coin_info[$(this).attr('id')];

		                    if (data[2] == '1') $("#aw_region").val('亞洲');
		                    else if (data[2] == '2') $("#aw_region").val('歐洲');
		                    else if (data[2] == '3') $("#aw_region").val('非洲');
		                    else if (data[2] == '4') $("#aw_region").val('大洋洲');
		                    else if (data[2] == '5') $("#aw_region").val('北美洲');
		                    else if (data[2] == '6') $("#aw_region").val('南美洲');
		                    else $("#aw_region").val('南極洲');
		                    
		                    $("#aw_wishno").val(data[0]);
		                    $("#aw_city").val(data[9]);
		                    $("#aw_date").val(data[3]);
		                    $("#aw_people").val(data[5] + " 人");
		                    $("#aw_day").val(data[4] + " 天");
		                    $("#aw_money").val(data[7] + " 元");
		                    $("#aw_remarks").val(data[8]);
		                });

		                coinId++;
		                coinNumber++;
		                $('.hand').append("<img class='coin_asia_throw' src='img/coin_asia.svg'>");
		            }, 300);

		            // Refreash page
		            setTimeout(function () {
		                window.location.reload();
		            }, 1100)
		        }
	    });
	}

// ============================WISHING POOL===================================	

	$(function () {

	    setTimeout(function () {
	        coinGenerate();
	        $(".animation_container .coin_pool").click(function () {

	            $(".wishingPool .achieveWish").toggleClass("show");
	            $("header, .container-fluid, .onlyWishingPool, .wishingPool_female, .wishingPool_man, .coin_pool").toggleClass("coinChange");
	            $(".achWishPopup, .makewishPopup, .manaWish, .item_all p, .item img, .item_all .circle, .coinBox").addClass("disable");

	            var data = coin_info[$(this).attr('id')];
	            if (data[2] == '1') $("#aw_region").val('亞洲');
	            else if (data[2] == '2') $("#aw_region").val('歐洲');
	            else if (data[2] == '3') $("#aw_region").val('非洲');
	            else if (data[2] == '4') $("#aw_region").val('大洋洲');
	            else if (data[2] == '5') $("#aw_region").val('北美洲');
	            else if (data[2] == '6') $("#aw_region").val('南美洲');
	            else $("#aw_region").val('南極洲');
	            
	            $("#aw_wishno").val(data[0]);
	            $("#aw_city").val(data[9]);
	            $("#aw_date").val(data[3]);
	            $("#aw_people").val(data[5] + " 人");
	            $("#aw_day").val(data[4] + " 天");
	            $("#aw_money").val(data[7] + " 元");
	            $("#aw_remarks").val(data[8]);

	        });
	    }, 300);

	    setInterval(spray, 1500);

	    setInterval(function () {
	        setTimeout(function () {
	            $('.self_destroy').remove();
	        }, 1200);
	    }, 1500);

	});

	var self_destroy_number = 0;
	function spray() {
	    var temp_L = Math.floor(Math.random() * (4) + 3);
	    for (var z = 0; z < temp_L; z++) {
	        var pool_x = $('.wishingPool .onlyWishingPool img').offset().left + $('.wishingPool .onlyWishingPool img').width() / 2;
	        var pool_y = $('.wishingPool .onlyWishingPool img').offset().top + $('.wishingPool .onlyWishingPool img').height() * 0.1;
	        var offset_ = randomCoords($('#coinId_' + 1));
	        var p0 = { x: pool_x, y: pool_y },
	            p1 = p2 = {x: (offset_[0] + pool_x) / 2, y: offset_[1] - 0.4 * $('.onlyWishingPool img').height()},
	            p3 = { x: offset_[0], y: offset_[1] };
	        var steps = 100;
	        var array_x = [], array_y = [];

	        for (i = 0; i <= 1; i += 0.01) {
	            var output = bezier(i, p0, p1, p2, p3);
	            array_x.push({value: output.x});
	            array_y.push({value: output.y});
	        }

	        var max = 7, min = 1;
	        var randomCoin = Math.floor(Math.random() * (max - min + 1) + min);
	        switch (randomCoin) {
	            case 1:
	                $('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy" + self_destroy_number + "' src='img/coin_asia.svg'>");
	                break;
	            case 2:
	                $('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy" + self_destroy_number + "' src='img/coin_europe.svg'>");
	                break;
	            case 3:
	                $('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy" + self_destroy_number + "' src='img/coin_africa.svg'>");
	                break;
	            case 4:
	                $('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy" + self_destroy_number + "' src='img/coin_oceania.svg'>");
	                break;
	            case 5:
	                $('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy" + self_destroy_number + "' src='img/coin_northUsa.svg'>");
	                break;
	            case 6:
	                $('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy" + self_destroy_number + "' src='img/coin_southUsa.svg'>");
	                break;
	            case 7:
	                $('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy" + self_destroy_number + "' src='img/coin_antarctica.svg'>");
	                break;
	        }

	        var temp_name = '#self_destroy' + self_destroy_number;
	        if (background_change) $(temp_name).addClass("coinChange");

	        anime({
		            targets: temp_name,
		            left: array_x,
		            top: array_y,
		            rotate: {
		                value: 90,
		                easing: 'easeInOutSine'
		            },
		            scale: 0.4,
	        });

	        self_destroy_number++;
	    }
	}

	$(function () {
	    setInterval(function () {
	        if (background_change) $('.self_destroy').addClass("coinChange")
	        else $('.self_destroy').removeClass("coinChange")
	    }, 100);
	});

	function bezier(t, p0, p1, p2, p3) {
	    var cX = 3 * (p1.x - p0.x),
	        bX = 3 * (p2.x - p1.x) - cX,
	        aX = p3.x - p0.x - cX - bX;

	    var cY = 3 * (p1.y - p0.y),
	        bY = 3 * (p2.y - p1.y) - cY,
	        aY = p3.y - p0.y - cY - bY;

	    var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
	    var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
	    return {x: x, y: y};
	}

	var coinId = coinNumber = 0;
	var coin_info = [];
	function coinGenerate(){
	coinNumber = parseInt(Math.random() * 10) + 25;

	for (i = 0; i < coinNumber; i++) {
		var min = 1;
		var max = 7;
		var randomCoin = Math.floor(Math.random() * (max - min + 1) + min);
 
        switch(randomCoin){
			case 1:
			$('.animation_container').append("<img id='coinId_"+coinId+"'class='coin_pool asiaCoin' src='img/coin_asia.svg'>");
			  break;			  
			case 2:
  	  	  	$('.animation_container').append("<img id='coinId_"+coinId+"'class='coin_pool euCoin' src='img/coin_europe.svg'>");
			break;
			case 3:
  	  	  	$('.animation_container').append("<img id='coinId_"+coinId+"'class='coin_pool aficaCoin' src='img/coin_africa.svg'>");
			break;
			case 4:
  	  	  	$('.animation_container').append("<img id='coinId_"+coinId+"'class='coin_pool oceanCoin' src='img/coin_oceania.svg'>");
			break;
			case 5:
  	  	  	$('.animation_container').append("<img id='coinId_"+coinId+"'class='coin_pool NACoin' src='img/coin_northUsa.svg'>");
			break;
			case 6:
  	  	  	$('.animation_container').append("<img id='coinId_"+coinId+"'class='coin_pool SACoin' src='img/coin_southUsa.svg'>");
			break;
			case 7:
  	  	  	$('.animation_container').append("<img id='coinId_"+coinId+"'class='coin_pool anatrCoin' src='img/coin_antarctica.svg'>");
			break;
		}

		$('#coinId_'+coinId).css('transform','rotate(90deg) scale(0.4)');
		$('#coinId_'+coinId).css('animation-delay', (Math.random())*150+"ms");

		$('#coinId_'+coinId).hover(function() {
			$(this).addClass('coin_pool2').removeClass('coin_pool');
	        $(this).css('transform','rotate(90deg) scale(.6)');
		});

		$('#coinId_'+coinId).mouseleave(function() {
			$(this).addClass('coin_pool').removeClass('coin_pool2');
		});

        var offset_ = randomCoords($('#coinId_'+coinId));
        $('#coinId_'+coinId).offset({ left: offset_[0], top: offset_[1] });
        
        let info = [];
        $.ajax({
			    type: "POST",
			    url: "php/getWish.php",
			    data: { _getArea: randomCoin},
			    dataType: "json",
			    success: function (data) {
		    	for(var i = 0; i< data.length; i++){
		    		   info[i] = data[i];
		    		}
		    	}
		});

       	var temp_name = 'coinId_' + coinId;
        coin_info[[temp_name]] = info;
        coinId ++;
	  }
	}

	$(window).resize(function () {
	    updateCoin();
	});

	function updateCoin() {
	    for (i = 0; i < coinNumber; i++) {
	        var offset_ = randomCoords($('#coinId_' + i));
	        $('#coinId_' + i).offset({left: offset_[0], top: offset_[1]});
	    }
	}

	function randomCoords(coin) {
	    var coinWidth = coin.width();
	    var coinHeight = coin.height();
	    var pool_x = $('.wishingPool .onlyWishingPool').offset().left + $('.wishingPool .onlyWishingPool').width() / 2;
	    var pool_y = $('.wishingPool .onlyWishingPool').offset().top + $('.wishingPool .onlyWishingPool').height() * 0.38;
	    var rX, rY;

	    if (window.innerWidth <= 425) {
	        rX = $('.wishingPool .onlyWishingPool').width() * 0.7;
	        rY = $('.wishingPool .onlyWishingPool').height() * 0.18;
	        pool_x += $('.wishingPool .onlyWishingPool').width() * 0.5;
	        pool_y -= $('.wishingPool .onlyWishingPool').height() * 0.01;
	    } else {
	        rX = $('.wishingPool .onlyWishingPool').width() * 0.4;
	        rY = $('.wishingPool .onlyWishingPool').height() * 0.0623;
	    }

	    var a = Math.random(),
	        b = Math.random();

	    if (b < a) {
	        c = b;
	        b = a;
	        a = c;
	    }

	    var temp_x = b * rX * Math.cos(2 * Math.PI * a / b);
	    var temp_y = b * rY * Math.sin(2 * Math.PI * a / b);
	    return [pool_x + (temp_x - coinWidth / 2), pool_y + ((temp_y >= 0 ? temp_y : -1 * temp_y) - coinHeight / 2)];
	}

// ============================ACHIEVE WISH===================================

	// Put the data into achievewish popup
	var a = $('.achieveWish .region');
	if (a.val() == '1') a.val('亞洲');
	else if (a.val() == '2') a.val('歐洲');
	else if (a.val() == '3') a.val('非洲');
	else if (a.val() == '4') a.val('大洋洲');
	else if (a.val() == '5') a.val('北美洲');
	else if (a.val() == '6') a.val('南美洲');
	else a.val('南極洲');
	
	// Submit saveDate form by date_button
	$id("date_button").onclick = function () {
	    if ($id('achDate').value == "") {
	        swal({
		            title: '請填寫規劃期限',
		            html: '<span style="color:#515151;font-size:18px">填寫期限對雙方都有保障 :)</span>',
		            confirmButtonText: '返回',
		            confirmButtonColor: '#E74C3C',
		            width: 500
	        });
	        $id("achDate").focus();
	        return;
	    } else {
	        var wishNO_ = parseInt($("#aw_wishno").val());
			var achDate_ = parseInt($("#achDate").val());

			$.post("php/saveDate.php",
		    {
		        achDate_: achDate_,
		        wishNO_: wishNO_
		    },
		    function (data, status) {
		        var temp = anime({
		            targets: '.achieveWish',
		            translateY: '150%',
		            easing: 'easeInOutSine',
		            complete: function () {
		                setTimeout(function () {
		                    $(".coin_pool").removeClass("coinChange");
		                    $(".wishingPool .achieveWish, .wishingPool .wishingOrder").removeClass("show");
		                    $("header, .container-fluid, .onlyWishingPool, .wishingPool_female, .wishingPool_man").toggleClass("coinChange");
        					$(".achWishPopup, .makewishPopup, .manaWish, .item_all p, .item img, .item_all .circle, .coinBox").removeClass("disable");
		                    temp.seek(0);
		                    coin_bright();
		                }, 500);
		            }
		        });

		        $(".wishingPool .achDate").removeClass("show");
		        $(".wishingPool .achieveWish").toggleClass("coinChange");
		        $(".signUp, .cancel").removeClass("disable");
		    });
	    }
	}

// ============================REPORT WISH===================================

	// Submit report form by report_button
	$id("report_button").onclick = function () { $id("saveReport").submit();}


// ==============================OTHERS======================================

	if ($(window).width() < 768) {
	    $('.number').attr('placeholder', '請填寫人數');
	}

})