<?php

    $arr1= [10,20,30,"and Nadav"];
    foreach($arr1 as $item){
        echo "$item\n";
    }

    echo "<br/><hr/><br/>";

    foreach($arr1 as $index=>$value){
        echo "$index &arr; $value | ";
    }

    echo "<br/><hr/><br/>"

    $arr2 = ["Ido"=>"Hila","Matan"=>"Maya","Anton"=>"Adam"];
    foreach($arr2 as $item){
        echo "$item";
    }

    echo "<br/><hr/><br/>";

    foreach($arr2 as $key=>$item){
        echo "$key &rarr; $item | ";
    }

    echo "<br/><hr/><br/>";

    foreach($arr2 as $key=>$item){
        echo "$key | ";
    }
?>