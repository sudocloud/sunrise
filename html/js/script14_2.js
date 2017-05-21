/**
 * Created by joeyjiang on 2017/5/20.
 */
var work = null;
var cnt;
function  startWorker()
{
    cnt = document.getElementById("result");
    if(work)
    {
        return;
    }
    work = new Worker("js/worker14_2.js");
    work.onmessage = function(e){
         cnt.innerHTML = e.data;
    }
}

function  stopWorker()
{
    if(work)
    {
        work.terminate();
        work = null;
    }
}