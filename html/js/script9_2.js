/**
 * Created by joeyjiang on 2017/5/19.
 */
window.onload = function () {
    DivimgContainer = document.getElementById("imgContainer");
    Divmsg = document.getElementById("msg");

    //Divbox1.ondragover = function (event) {
    //    showObj(event);
    //}

    DivimgContainer.ondragover = function (event) {
        event.preventDefault();
    }
    DivimgContainer.ondrop = dropImghandler;
}

function dropImghandler(event) {
    event.preventDefault();
    showObj(event);
    var f = event.dataTransfer.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(event){
        DivimgContainer.innerHTML = "<img src=\""+fileReader.result+"\">";
    }
    fileReader.readAsDataURL(f);

}

function showObj(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    Divmsg.innerHTML = s;
}