/**
 * Created by joeyjiang on 2017/5/20.
 */
var num = 0;
var txt;
var btn;
window.onload = function(){
    txt = document.getElementById("txt");
    if(sessionStorage.num)
    {
        num = sessionStorage.num;
    }
    else
    {
        num = 0;
    }
    btn = document.getElementById("btn");

    btn.onclick = function(){
        num++;
        sessionStorage.num = num;
        txt.innerHTML = num;

    }
}