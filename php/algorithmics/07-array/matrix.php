<?php

    for ($i=1;$i<=10;i++){
        for ($j=1;$j<=10;$j++){
            $mat[$i][]=$i*$j;
        }
    }

    for ($i=0;$i<count($mat);$i++){
        for ($j=0;$j<$mat[$i];$j++){
            echo "$mat[$i][$j]"." ";
        }
    }


?>