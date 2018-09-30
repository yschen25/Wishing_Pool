$(function(){
	// Remove 000webhost logo
	$('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').parent().remove();
})

//Change the coin's brightness when click the all button 
$(".item_all .circle").click(function(){

	if(!$(this).hasClass("circleChange")){
		$(".item_all p").addClass("circleP");
		$(".coin_pool").addClass("hide");
		$(this).addClass("circleChange");
		$(".item img").addClass("coinChange");
	}
	else{
		$(".item_all p").removeClass("circleP");
		$(".coin_pool").removeClass("hide");
		$(this).removeClass("circleChange");
		$(".item img").removeClass("coinChange");
	}
});

//Change the coin's brightness when click the coin 
$(".item img").click(function(){
   $(this).toggleClass("coinChange");

   if($(this).attr('id')=='asiaCoin'){
   		$(".coin_pool.asiaCoin").each(function(){
   			$(this).toggleClass('hide');
   		});
   }
    else if($(this).attr('id')=='euCoin'){
   		$(".coin_pool.euCoin").each(function(){
   			$(this).toggleClass('hide');
   		});
   }
       else if($(this).attr('id')=='aficaCoin'){
   		$(".coin_pool.aficaCoin").each(function(){
   			$(this).toggleClass('hide');
   		});
   }
   else if($(this).attr('id')=='oceanCoin'){
   		$(".coin_pool.oceanCoin").each(function(){
   			$(this).toggleClass('hide');
   		});
   }
   else if($(this).attr('id')=='NACoin'){
   		$(".coin_pool.NACoin").each(function(){
   			$(this).toggleClass('hide');
   		});
   }
   else if($(this).attr('id')=='SACoin'){
   		$(".coin_pool.SACoin").each(function(){
   			$(this).toggleClass('hide');
   		});
   }
   else if($(this).attr('id')=='anatrCoin'){
   		$(".coin_pool.anatrCoin").each(function(){
   			$(this).toggleClass('hide');
   		});
   }

// let off_all=false; 
if($(".item img").hasClass("coinChange")){   			
   	$(".item_all .circle").addClass("circleChange");
   	$(".item_all p").addClass("circleP");
}else{
   	$(".item_all .circle").removeClass("circleChange");
   	$(".item_all p").removeClass("circleP");
}

});


//Change the type button color when click the button 
$(".type_boxup label").click(function(){
   $(this).toggleClass("aClick");
});
$(".type_boxdown label").click(function(){
   $(this).toggleClass("aClick");
});

//Show the makewish popup when click the makewish button 
$(".makewishPopup").click(function(){
	$(".wishingPool .wishingOrder").toggleClass("show");
	$(".container-fluid").toggleClass("coinChange");
	$(".onlyWishingPool").toggleClass("coinChange");
	$(".wishingPool_female").toggleClass("coinChange");
	$(".wishingPool_man").toggleClass("coinChange");
	$(".coin_pool").toggleClass("coinChange");
	$(".achWishPopup").addClass("disable");
	$(".makewishPopup").addClass("disable");
	$(".manaWish").addClass("disable");
	$(".item_all p").addClass("disable");
	$(".item img").addClass("disable");
	$(".item_all .circle").addClass("disable");
	coin_dark();
});

//Show the achievewish popup when click the achievewish button 
$(".achWishPopup").click(function(){
	$(".wishingPool .achieveWish").toggleClass("show");
	$(".container-fluid").toggleClass("coinChange");
	$(".onlyWishingPool").toggleClass("coinChange");
	$(".wishingPool_female").toggleClass("coinChange");
	$(".wishingPool_man").toggleClass("coinChange");
	$(".coin_pool").toggleClass("coinChange");
	$(".achWishPopup").addClass("disable");
	$(".makewishPopup").addClass("disable");
	$(".manaWish").addClass("disable");
	$(".item_all p").addClass("disable");
	$(".item img").addClass("disable");
	$(".item_all .circle").addClass("disable");
	coin_dark();
});
$(".cancel").click(function(){
	$(".wishingPool .achieveWish").removeClass("show");
	$(".wishingPool .wishingOrder").removeClass("show");
	$(".container-fluid").toggleClass("coinChange");
	$(".onlyWishingPool").toggleClass("coinChange");
	$(".wishingPool_female").toggleClass("coinChange");
	$(".wishingPool_man").toggleClass("coinChange");
	$(".coin_pool").toggleClass("coinChange");
	$(".coin_pool").removeClass("coinChange"); // in case
	$(".coin_pool2").removeClass("coinChange"); // in case
	$(".achWishPopup").removeClass("disable");
	$(".makewishPopup").removeClass("disable");
	$(".manaWish").removeClass("disable");
	$(".item_all p").removeClass("disable");
	$(".item img").removeClass("disable");
	$(".item_all .circle").removeClass("disable");
	// anime.remove('.wishingOrder');
	coin_bright();	
});
//disable the achievewish's input
$('.achieveWish input').attr('disabled','disabled');
$('.achieveWish .message').attr('disabled','disabled');

//Show the date popup
$(".signUp").click(function(){
	$(".wishingPool .achDate").toggleClass("show");
	$(".wishingPool .achieveWish").toggleClass("coinChange");
	$(".signUp").addClass("disable");
	$(".cancel").addClass("disable");
});
$(".cancelachDate").click(function(){
	$(".wishingPool .achDate").removeClass("show");
	$(".wishingPool .achieveWish").toggleClass("coinChange");
	$(".signUp").removeClass("disable");
	$(".cancel").removeClass("disable");

});

//Show the report popup
$(".reportButton").click(function(){
	$(".wishingPool .report").toggleClass("show");
	$(".wishingPool .achDate").toggleClass("show");
	$(".wishingPool .achieveWish").toggleClass("coinChange");
	$(".signUp").addClass("disable");
	$(".cancel").addClass("disable");
	$(".reportButton").addClass("disable");
});
$(".cancelReport").click(function(){
	$(".wishingPool .report").toggleClass("show"); 
	$(".wishingPool .achDate").removeClass("show");
	$(".wishingPool .achieveWish").toggleClass("coinChange");
	$(".signUp").removeClass("disable");
	$(".cancel").removeClass("disable");
	$(".reportButton").removeClass("disable");
});


//Verify the makewish popup colume when submit 
function $id(id){
  return document.getElementById(id);
}

function checkForm(){

	 var region = $id("region").value;
	 var city = $id("city").value;
	 var categoryrArray = [];
	 $('.wishingOrder input:checkbox[name=category]:checked').each(
	 	function(){
	 		categoryrArray.push($(this).val());
	 	});
	 var date = $id("date").value;
	 var day = $id("day").value;
	 var people = $id("people").value;
	 var memberArray = [];
	 $('.wishingOrder input:checkbox[name=memberType]:checked').each(
	 	function(){
	 		memberArray.push($(this).val());
	 	});
	 var money = $id("money").value;
	 var message = $id("message").value;


	 if(region==''){
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
	 if(categoryrArray.length==0){
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
	 if(message==''){
	 	swal({
              title: '請填寫許願內容',
              html: '<span style="color:#515151;font-size:18px">許下願望，大家都願意竭盡全力幫你實現願望</span>',
              confirmButtonText: '返回',
              confirmButtonColor: '#E74C3C',
              width: 500
        });
	 	$id("message").focus();
		return;
	 }
	 else{
		 if($('#region').val() == 1){

		 	$('.coin_asia_throw').attr('src','img/coin_asia.svg').addClass('asiaCoin');
		 }
		 else if($('#region').val() == 2){
		 	
		 	$('.coin_asia_throw').attr('src','img/coin_europe.svg').addClass('euCoin');

		 }else if($('#region').val() == 3){

		 	$('.coin_asia_throw').attr('src','img/coin_africa.svg').addClass('aficaCoin');

		 }else if($('#region').val() == 4){

		 	$('.coin_asia_throw').attr('src','img/coin_oceania.svg').addClass('oceanCoin');

		 }else if($('#region').val() == 5){

		 	$('.coin_asia_throw').attr('src','img/coin_northUsa.svg').addClass('NACoin');

		 }else if($('#region').val() == 6){

		 	$('.coin_asia_throw').attr('src','img/coin_southUsa.svg').addClass('SACoin');

		 }else if($('#region').val() == 7){

		 	$('.coin_asia_throw').attr('src','img/coin_antarctica.svg').addClass('anatrCoin');
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
	    	function(data, status){
	        // alert("Data: " + data + "\nStatus: " + status);
	    });

		// document.getElementById("saveMakewish").submit();
		document.getElementById("saveMakewish").reset();
		$(".wishingOrder .aClick").each(function(){
			$(this).removeClass('aClick');
		});
	}
	
}

//Check the checkForm form by makewish_button
window.onload = function init(){
  document.getElementById("makewish_button").onclick = checkForm;
} 

//Put the data into achievewish Popup
var a = $('.achieveWish .region');
if(a.val()=='1'){
	a.val('亞洲');
}else if(a.val()=='2'){
	a.val('歐洲');
}else if(a.val()=='3'){
	a.val('非洲');
}else if(a.val()=='4'){
	a.val('大洋洲');
}else if(a.val()=='5'){
	a.val('北美洲');
}else if(a.val()=='6'){
	a.val('南美洲');
}else{
	a.val('南極洲');
}

//Submit saveDate form by date_button
$id("date_button").onclick = function(){
	if($id('achDate').value==""){
		swal({
              title: '請填寫規劃期限',
              html: '<span style="color:#515151;font-size:18px">填寫期限對雙方都有保障 :)</span>',
              confirmButtonText: '返回',
              confirmButtonColor: '#E74C3C',
              width: 500
        });
	 	$id("achDate").focus();
		return;
	}else{	
			SessionPlanId = $('#dateButton').attr('value');
			achieveWishLoginCheck(SessionPlanId);	
	}
}

//date_button logincheck
function achieveWishLoginCheck(sessId)
      {
        var xhr2 = new XMLHttpRequest();
          xhr2.onreadystatechange=function (){
            if( xhr2.readyState == 4){
                 if( xhr2.status == 200 ){
                       if(xhr2.responseText=='NOT'){
                            $('#logoinBox').css('display','block');
                            $id("memId").value="rick@gmail.com";
							$id("memPsw").value="111";
                       }else{
                       		let wishNO_ = parseInt($("#aw_wishno").val());
							let achDate_ = parseInt($("#achDate").val());

							 $.post("php/saveDate.php",
						     {
						        achDate_: achDate_,
						        wishNO_: wishNO_
						     },
						    	function(data, status){
								// $(".achWishPopup").removeClass("disable");
								// $(".makewishPopup").removeClass("disable");
								// $(".manaWish").removeClass("disable");
								// $(".item_all p").removeClass("disable");
								// $(".item img").removeClass("disable");
								// $(".item_all .circle").removeClass("disable");

								var temp = anime({
									targets: '.achieveWish',
								   	translateY: '150%',
								   	easing: 'easeInOutSine', 
								   	complete:function(){
								   		setTimeout(function(){
											$(".wishingPool .achieveWish").removeClass("show");
											$(".wishingPool .wishingOrder").removeClass("show");
											$(".container-fluid").toggleClass("coinChange");
											$(".onlyWishingPool").toggleClass("coinChange");
											$(".wishingPool_female").toggleClass("coinChange");
											$(".wishingPool_man").toggleClass("coinChange");
											$(".coin_pool").removeClass("coinChange");
											$(".achWishPopup").removeClass("disable");
											$(".makewishPopup").removeClass("disable");
											$(".manaWish").removeClass("disable");
											$(".item_all p").removeClass("disable");
											$(".item img").removeClass("disable");
											$(".item_all .circle").removeClass("disable");
											temp.seek(0);
											coin_bright();
								   		},500);
									} 	
								});

								$(".wishingPool .achDate").removeClass("show");
								$(".wishingPool .achieveWish").toggleClass("coinChange");
								$(".signUp").removeClass("disable");
								$(".cancel").removeClass("disable");
						    });	
                       }   
               }else{
                    alert( xhr2.status );
                 }
              }
          }
          var url = "php/logincheck.php?sessId=" + sessId;
          xhr2.open("Get", url, true);
          xhr2.send( null );
        }


//Submit report form by report_button
$id("report_button").onclick = function(){
	SessionReportId = $("#reportWish").attr('value');
	wishLoginCheck(SessionReportId);
}

//report_button logincheck
function wishLoginCheck(sessId)
      {
        var xhr2 = new XMLHttpRequest();
          xhr2.onreadystatechange=function (){
            if( xhr2.readyState == 4){
                 if( xhr2.status == 200 ){
                       if(xhr2.responseText=='NOT'){
                            $('#logoinBox').css('display','block');
                            $id("memId").value="rick@gmail.com";
							$id("memPsw").value="111";

                       }else{
                       		$id("saveReport").submit();
                       }   
               }else{
                    alert( xhr2.status );
                 }
              }
          }
          var url = "php/logincheck.php?sessId=" + sessId;
          xhr2.open("Get", url, true);
          xhr2.send( null );
        }


if($(window).width()<768){
	$('.number').attr('placeholder','請填寫人數');
}


var wishingOrder_ani, hand_ani, coin_ani;

function transformToCoin(){

	// var myTimeline =anime.timeline({
	//   autoplay: false
	// });

	// myTimeline
	// .add({
	//     targets: '.wishingOrder',
	//    	translateX: '58%',
	//    	easing: 'easeInQuad',	   	
	//    	rotate: 900,
	//     scale: 0.001
	// })
	// .add({
	// 	targets: '.hand',
	//    	bottom: '0',
	//    	elasticity: 80,
	// })
	// .add({
	// 	targets: '.coin_asia_throw',
	// 	opacity: 1,
	// 	offset: 1000,
	// 	easing: 'linear',
	// 	complete:function(){
	// 		$('.coin_asia_throw').css(
	// 			"opacity","1"
	// 		);
	// 		arc();
	// 	}
	// });

	// myTimeline.restart();

	 $(".container-fluid").toggleClass("coinChange");
	 $(".onlyWishingPool").toggleClass("coinChange");
	 $(".wishingPool_female").toggleClass("coinChange");
	 $(".wishingPool_man").toggleClass("coinChange");
	 $(".coin_pool").toggleClass("coinChange");

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
		complete:function(){
			$('.coin_asia_throw').addClass('coinThrow');
			$('.coin_asia_throw').removeClass('coin_asia_throw');
			arc();
		}
	});

}


let self_destroy_number=0;

function spray(){

	let temp_L = Math.floor(Math.random()*(4)+3);

   for(var z=0;z<temp_L;z++){

	  let pool_x = $('.wishingPool .onlyWishingPool img').offset().left + $('.wishingPool .onlyWishingPool img').width()/2;
	  let pool_y = $('.wishingPool .onlyWishingPool img').offset().top + $('.wishingPool .onlyWishingPool img').height()*0.1;
	  var offset_ = randomCoords($('#coinId_'+1));


	  let p0 = {x: pool_x, y: pool_y}, 
	  p1 = p2 = {x:(offset_[0]+pool_x)/2, y:offset_[1]-0.4*$('.onlyWishingPool img').height()}, 
	  p3 = {x: offset_[0], y: offset_[1]};
	  
	  var steps = 100;
	  var array_x=[], array_y=[];


	   for(i=0;i<=1;i+=0.01){
	   	var output = bezier(i, p0, p1, p2, p3);

	    array_x.push({value:output.x});
	    array_y.push({value:output.y});
	 
	   }

   		let max =7,min=1;
   		let randomCoin = Math.floor(Math.random()*(max-min+1)+min);
 
 		// $('.hand').append("<img id='coinId_"+coinId+"'class='coin_pool asia' src='img/coin_asia.svg'>");

        switch(randomCoin){
			case 1:
			$('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy"+self_destroy_number+"' src='img/coin_asia.svg'>");
			  break;			  
			case 2:
  	  	  	$('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy"+self_destroy_number+"' src='img/coin_europe.svg'>");
			break;
			case 3:
  	  	  	$('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy"+self_destroy_number+"' src='img/coin_africa.svg'>");
			break;
			case 4:
  	  	  	$('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy"+self_destroy_number+"' src='img/coin_oceania.svg'>");
			break;
			case 5:
  	  	  	$('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy"+self_destroy_number+"' src='img/coin_northUsa.svg'>");
			break;
			case 6:
  	  	  	$('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy"+self_destroy_number+"' src='img/coin_southUsa.svg'>");
			break;
			case 7:
  	  	  	$('.animation_container').append("<img class='coin_pool self_destroy' id='self_destroy"+self_destroy_number+"' src='img/coin_antarctica.svg'>");
			break;
		}

		var temp_name = '#self_destroy'+self_destroy_number;

		if(background_change)
		$(temp_name).addClass("coinChange");

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

var background_change = false;

function coin_dark(){	
	background_change =true;
}
function coin_bright(){
	background_change =false;
}

$(function(){
	setInterval(function(){
		if(background_change)
			$('.self_destroy').addClass("coinChange")
		else
			$('.self_destroy').removeClass("coinChange")
	},100);
});

function arc(){

  let coin_position = $('.coinThrow').offset();
  // let pool_y = $('.onlyWishingPool').height() - 0.3 * $('.onlyWishingPool').height() + 0.06*$('.onlyWishingPool').height()*Math.random()*(Math.random()>=0.5 ? 1:-1);
  // let pool_x = $('.onlyWishingPool').width() + 0.1*$('.onlyWishingPool').width()*Math.random()*(Math.random()>=0.5 ? 1:-1);
  var offset_ = randomCoords($('#coinId_'+1));

  let p0 = {x: coin_position.left, y: coin_position.top}, 
  p1 = p2 = {x:(offset_[0]+coin_position.left)/2, y:offset_[1]-0.4*$('.onlyWishingPool').height()}, 
  p3 = {x: offset_[0], y: offset_[1]};
  // var draw = function() {
  // var LUT = curve.getLUT(16);
  //    LUT.forEach(function(p) { drawCircle(p,2); });
  // }
  
  // console.log(output.x);
  var steps = 100;
  var array_x=[], array_y=[];


   for(i=0;i<=1;i+=0.01){
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
	  complete:function(){
	  	setTimeout(function(){ 

	  		restart_ani = anime({
				targets: '.hand',
			   	top: '3vw',
			   	easing: 'linear',
			   	direction: 'reverse'
			})
			$(".wishingPool .achieveWish").removeClass("show");
			$(".wishingPool .wishingOrder").removeClass("show");
			$(".achWishPopup").removeClass("disable");
			$(".makewishPopup").removeClass("disable");
			$(".manaWish").removeClass("disable");
			$(".item_all p").removeClass("disable");
			$(".item img").removeClass("disable");
			$(".item_all .circle").removeClass("disable");

			wishingOrder_ani.seek(0);
			setTimeout(function(){ 
				hand_ani.seek(0);
		    },500);


			var temp = $('.coinThrow').detach();
			$('.animation_container').append(temp);
			temp.attr('id','coinId_'+coinId);
 			$('.coinThrow').addClass('coin_pool').removeClass('coinThrow');

			$("#coinId_"+coinId).click(function(){
				// alert(123);
				$(".wishingPool .achieveWish").toggleClass("show");
				$(".container-fluid").toggleClass("coinChange");
				$(".onlyWishingPool").toggleClass("coinChange");
				$(".wishingPool_female").toggleClass("coinChange");
				$(".wishingPool_man").toggleClass("coinChange");
				$(".coin_pool").toggleClass("coinChange");
				$(".achWishPopup").addClass("disable");
				$(".makewishPopup").addClass("disable");
				$(".manaWish").addClass("disable");
				$(".item_all p").addClass("disable");
				$(".item img").addClass("disable");
				$(".item_all .circle").addClass("disable");


				let data = coin_info[$(this).attr('id')];


				if(data[2]=='1'){
					$("#aw_region").val('亞洲');
				}else if(data[2]=='2'){
					$("#aw_region").val('歐洲');
				}else if(data[2]=='3'){
					$("#aw_region").val('非洲');
				}else if(data[2]=='4'){
					$("#aw_region").val('大洋洲');
				}else if(data[2]=='5'){
					$("#aw_region").val('北美洲');
				}else if(data[2]=='6'){
					$("#aw_region").val('南美洲');
				}else{
					$("#aw_region").val('南極洲');
				}

				$("#aw_wishno").val(data[0]);


				// $("#aw_region").val(data[2]);
				$("#aw_city").val(data[9]);
				$("#aw_date").val(data[3]);
				$("#aw_people").val(data[5]+" 人");		
				$("#aw_day").val(data[4]+" 天");	
				$("#aw_money").val(data[7]+" 元");			
				$("#aw_remarks").val(data[8]);

			});


			coinId++;
			coinNumber++;

			$('.hand').append(
				"<img class='coin_asia_throw' src='img/coin_asia.svg'>"
			);
	  	 }, 300);
	  }
	});
}

function bezier(t, p0, p1, p2, p3){
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

$(function() {

	// coinGenerate();

	setTimeout(function(){
		coinGenerate();
		 $(".animation_container .coin_pool").click(function(){

			$(".wishingPool .achieveWish").toggleClass("show");
			$(".container-fluid").toggleClass("coinChange");
			$(".onlyWishingPool").toggleClass("coinChange");
			$(".wishingPool_female").toggleClass("coinChange");
			$(".wishingPool_man").toggleClass("coinChange");
			$(".coin_pool").toggleClass("coinChange");
			$(".achWishPopup").addClass("disable");
			$(".makewishPopup").addClass("disable");
			$(".manaWish").addClass("disable");
			$(".item_all p").addClass("disable");
			$(".item img").addClass("disable");
			$(".item_all .circle").addClass("disable");


			let data = coin_info[$(this).attr('id')];


			if(data[2]=='1'){
				$("#aw_region").val('亞洲');
			}else if(data[2]=='2'){
				$("#aw_region").val('歐洲');
			}else if(data[2]=='3'){
				$("#aw_region").val('非洲');
			}else if(data[2]=='4'){
				$("#aw_region").val('大洋洲');
			}else if(data[2]=='5'){
				$("#aw_region").val('北美洲');
			}else if(data[2]=='6'){
				$("#aw_region").val('南美洲');
			}else{
				$("#aw_region").val('南極洲');
			}

			$("#aw_wishno").val(data[0]);


			// $("#aw_region").val(data[2]);
			$("#aw_city").val(data[9]);
			$("#aw_date").val(data[3]);
			$("#aw_people").val(data[5]+" 人");		
			$("#aw_day").val(data[4]+" 天");	
			$("#aw_money").val(data[7]+" 元");			
			$("#aw_remarks").val(data[8]);

		});
	},300);

	setInterval(spray,1500);

	setInterval(function(){
			setTimeout(function(){$('.self_destroy').remove();},1200);
	},1500);

	//If index has value then show the makewish popup
	if($('.city').val()!="" || $('.message').val()!="" || $('.place_box option').val()!="" || $('label').hasClass('aClick')){
		$(".wishingPool .wishingOrder").toggleClass("show");
		$(".container-fluid").toggleClass("coinChange");
		$(".achWishPopup").addClass("disable");
		$(".makewishPopup").addClass("disable");
		$(".manaWish").addClass("disable");
		$(".item_all p").addClass("disable");
		$(".item img").addClass("disable");
		$(".item_all .circle").addClass("disable");

		$(".onlyWishingPool").toggleClass("coinChange");
		$(".wishingPool_female").toggleClass("coinChange");
		$(".wishingPool_man").toggleClass("coinChange");
		$(".coin_pool").toggleClass("coinChange");
	}

//Get the data from index and let the dropdownlist selected
regionValue = $('#regionValue').val();
$('.place_box option[value="' + regionValue + '"]').attr('selected','selected');

  // setInterval(updateCoin, 1000);

 
});

let coinId = 0, coinNumber=0;
let coin_info=[];
function coinGenerate(){
	coinNumber = parseInt(Math.random()*10)+25;

	// if($(document).width()<=425)
	// 	coinNumber = parseInt(Math.random()*10)+25;
	// $.ajax({
	//     type: "POST",
	//     url: "php/getWish.php",
	//     dataType: "json", // Set the data type so jQuery can parse it for you
	//     success: function (data) {
	//     	for(let i=0; i<data.length;i++){
	//     		console.log(data[i]);
	//     	}
	//     }
	// });
	
	for(i=0; i<coinNumber;i++){
		let min = 1;
		let max = 7;
		let randomCoin = Math.floor(Math.random()*(max-min+1)+min);
 
 		// $('.hand').append("<img id='coinId_"+coinId+"'class='coin_pool asia' src='img/coin_asia.svg'>");

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
        

       let info=[];
  //      $.ajax({
	 //    type: "POST",
	 //    url: "php/getWish.php",
	 //    dataType: "json", // Set the data type so jQuery can parse it for you
	 //    success: function (data) {
	 //    	for(let i=0; i<data.length;i++){
	 //    		   info[i] = data[i];
	 //    		}
	 //    	}
		// });

        $.ajax({
	    type: "POST",
	    url: "php/getAreaNo.php",
	    data: { _getArea: randomCoin},
	    dataType: "json", // Set the data type so jQuery can parse it for you
	    success: function (data) {

	    	for(let i=0; i<data.length;i++){
	    		   info[i] = data[i];
	    		}
	    	}
		});

       

       	var temp_name = 'coinId_'+coinId;
        coin_info[[temp_name]] = info;

        coinId++;
	  }

}

function randomCoords(coin){

    let coinWidth = coin.width();
    let coinHeight = coin.height();
	let pool_x = $('.wishingPool .onlyWishingPool').offset().left + $('.wishingPool .onlyWishingPool').width()/2;
	let pool_y = $('.wishingPool .onlyWishingPool').offset().top + $('.wishingPool .onlyWishingPool').height()*0.38;

    let rX, rY;
	if(window.innerWidth<=425){
		rX = $('.wishingPool .onlyWishingPool').width()*0.7;
	    rY = $('.wishingPool .onlyWishingPool').height()*0.18;
	    pool_x += $('.wishingPool .onlyWishingPool').width()*0.5;
	    pool_y -= $('.wishingPool .onlyWishingPool').height()*0.01;
	}
	else{
	    rX = $('.wishingPool .onlyWishingPool').width()*0.4;
	    rY = $('.wishingPool .onlyWishingPool').height()*0.0623;
   	}

    var a = Math.random(),
        b = Math.random();
    

        if(b < a){
            c = b;
            b = a;
            a = c;
        }

		let temp_x = b * rX * Math.cos( 2 * Math.PI * a / b );
	    let temp_y = b * rY * Math.sin( 2 * Math.PI * a / b );
	    
	    return [pool_x+(temp_x-coinWidth/2), pool_y+((temp_y>=0 ? temp_y:-1*temp_y)-coinHeight/2)];
} 

function updateCoin(){
	for(i=0;i<coinNumber;i++){
		 var offset_ = randomCoords($('#coinId_'+i));
        $('#coinId_'+i).offset({ left: offset_[0], top: offset_[1] });
	}
}
    
$( window ).resize(function() {
  updateCoin();
});