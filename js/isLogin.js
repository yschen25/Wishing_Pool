window.addEventListener("load", function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var arr = xhr.responseText.split(",");
                if (xhr.responseText != "not") { //already login
                    $id("nickNameInfo").innerHTML = arr[0];
                    $id("loginImg").src = "img/member/" + arr[2];
                    $id("member").style.display = "inline";
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
