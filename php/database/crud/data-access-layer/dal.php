<?php

    //create a database connection
    function connect(){
        $user="root";
        $pass="12345678";
        $server="localhost";
        $schema="youtube";

        $conn = mysqli_connect($server,$user, $pass, $schema);

        //check if the connection is established
        if (mysqli_connect_errno($conn)){
            die("failed to connect to mysql , error:".mysqli_connect_error()."\nPlease kill nadav");
        }

        //support hebrew/arabic/russion
        mysqli_set_charset($conn, "utf8");

        return $conn;
    }

    //insert,update,delete
    //getting a sql statement
    function execute($sql){
        //connect to data base
        $connection = connect();

        //execute query:
        mysqli_execute($connection,$sql);

        //get the autoincrement number
        $id = mysqli_insert_id($connection); //update,delete=>0

        //close the connection
        mysqli_close($connection);

        //return id
        return $id;
    }

    //select
    function select($sql){
        //connect to database
        $connection = connect();

        //get a cursor represented buy the query
        $cursor = mysqli_query($connection,$sql);

        $row = mysqli_fetch_object($cursor); //take first row

        while ($row){
            $arr[] = $row;
            $row = mysql_fetch_object($cursor); //take the next record,object,row
        }

        //close the connection is cost
        mysqli_close($connection);

        //return an array containing the data:
        return $arr;
    }

?>