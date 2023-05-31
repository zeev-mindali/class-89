<?php

    include "math_function.php";

    echo getAvg(10,20,30);


    sayHi();

    showMessage ("and I, will allways, love youuuuuuuuuuuu",1000);
    showMessage ("Ido and Hila for ever and ever and ever......");

    function sayHi(){
        echo "Hi!\n";
    }

    function showMessage($message,$times=100){
        for ($i=1;$i<=$times;$i++){
            echo $message."\n";
        }
    }

?>