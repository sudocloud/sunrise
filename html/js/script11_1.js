/**
 * Created by joeyjiang on 2017/5/19.
 */
window.onload = function() {
    //Create a stage by getting a reference to the canvas
    demoCanvas = document.getElementById("canvas");
    stage = new createjs.Stage(demoCanvas);
    //Create a Shape DisplayObject.
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    //Set position of Shape instance.
    circle.x = circle.y = 50;
    //Add Shape instance to stage display list.
    stage.addChild(circle);
    //Update stage will render next frame
    stage.update();

}
