/**
 * Created by joeyjiang on 2017/5/19.
 */
window.onload = function(){
    var canvas = document.getElementById("tutorial");
    var image = document.getElementById("source");
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgb(200,0,0)"; //use attr
      //ctx.scale(2,0.5);    //ctx.scale(x, y);  x表示水平缩放倍数 y表示垂直缩放倍数
    ctx.translate(100,100); //move translate(x, y);  //x表示距cavas left的水平距离 y表示距cavas top的垂直距离
    ctx.rotate(45);   //rotate  rotate(angle);    //逆时针旋转角度
    ctx.fillRect(10, 10, 55, 50);   //fillRect(x, y, width, height) //fill rect 的x表示距canvas left距离 y表示距canvas top的距离   width和height 表示rect的宽和高
    ctx.drawImage(image,50,50,50,50); //drawImage(image, dx, dy, dWidth, dHeight);

}

