<?php

    $arr1=array(10,20,30,"hi");
    for ($i=0;$i<count($arr);$i++){
        echo $arr1[$i]." "; //102030hi => 10 20 30 hi
    }


    echo "<br>";
    echo "first item: $arr1[0] , second item: $arr1[1], last item: $arr1[count($arr1)-1]";

    //second way to create array
    $arr2= [10,20,30,"hi"];

    //third way to create array
    for ($i=0;$i<10;$i++){
        $arr3[$i] = $i*$i;
        echo "$arr3[$i]";
    }

    //forth way to create array
    for ($i=0;$i<10;$i++){
        $arr4[] = $i*$i;    //adding a new value into the array (like push)
        echo "$arr4[$i]";
    }

?>