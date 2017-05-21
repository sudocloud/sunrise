/**
 * Created by joeyjiang on 2017/5/20.
 */
var serverData, statusDiv;
var SERVER_URL = "server/server15_1.php";

window.onload = function(){
    serverData = document.getElementById("serverData");
    statusDiv = document.getElementById("statusDiv");
    loop();


}
function loop()
{
    startLisenServer();
    setTimeout(loop,1000);
}
function startLisenServer()
{
    statusDiv.innerHTML = "start Connect Server...";
    var es = new EventSource(SERVER_URL);
    es.onopen = openHandler;
    es.onerror = errorHandler;
    es.onmessage = messageHandler;
}
function openHandler(e)
{
    statusDiv.innerHTML = "Server open";
}

function errorHandler(e)
{
    statusDiv.innerHTML = "Error";
}
function messageHandler(e)
{
    serverData.innerHTML = e.data;
}