/**
 * Created by joeyjiang on 2017/5/18.
 */

window.onload = function () {
    Divbox1 = document.getElementById("box1");
    Divmsg = document.getElementById("msg");
    img1 = document.getElementById("img1");

    //Divbox1.ondragover = function (event) {
    //    showObj(event);
    //}

    Divbox1.ondragover = function (event) {
        event.preventDefault();
    }
    img1.ondragstart = function (event) {
        event.dataTransfer.setData("imgId", "img1");
    }
    Divbox1.ondrop = dropImghandler;
}

function dropImghandler(event) {
    showObj(event);
    event.preventDefault();
    var img = document.getElementById(event.dataTransfer.getData("imgId"));
    event.target.appendChild(img);
}

function showObj(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    Divmsg.innerHTML = s;
}