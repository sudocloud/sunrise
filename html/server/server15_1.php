<?php
/**
 * Created by PhpStorm.
 * User: joeyjiang
 * Date: 2017/5/20
 * Time: 12:25
 */

header('Content-Type:text/event-stream');

    date_default_timezone_set("Asia/Shanghai");
    echo 'data:'.date('Y-m-d H-i-s');
    echo "\n\n";