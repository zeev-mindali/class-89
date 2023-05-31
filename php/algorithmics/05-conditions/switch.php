<?php

    $a = 666;

    switch ($a){
        case 1:
            echo "one\n";
            break;
        case 2:
            echo "two\n";
            break;
        case 3:
            echo "tree tree\n";
            break;
        default:
            echo "Where The Food";
    }

    $str="Noam";
    switch ($str){
        case "Matan":
            echo "$str wants Maya";
            break;
        case "Ido":
            echo "$str wants or hila or noam or lior or anything that breath";
            break;
        default:
            echo "$str wants (still thinking)";
    }

    $grade=85;

    switch($grade){
        case $grade>100:
            echo "No bonus for you today";
            break;
        case $grade=100:
                echo "Matan ?!?!?!?";
                break;
        case $grade>94:
            echo "A+";
            break;
        case $grade>90:
            echo "A";
            break;
        case $grade>85:
            echo "B+"
            break;
        default:
            echo "Hello Nadav";
    }

?>