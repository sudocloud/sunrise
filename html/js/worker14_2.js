/**
 * Created by joeyjiang on 2017/5/20.
 */
var countNum = 0;
function  count()
{
    postMessage(countNum);
    countNum++;
    setTimeout(count,1000);
}
count();