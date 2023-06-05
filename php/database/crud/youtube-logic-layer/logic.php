<?php

    require_once "../data-access-layer/dal.php";
    
    function addSong($song){
        //create add song statement
        $sql = "INSERT INTO youtube (url,title,liked) values ('$song->url','$song->title',false)";

        //add the song
        $id = execute($sql);

        //update the id
        $youtube->id=$id;

        //return the song with it's new shiny id
        return $song;

    }

    //update existing song
    function updateSong($song){
        //create an update statement
        $sql = "UPDATE youtube SET url='$song->url', title='$song->title',liked=$song->liked WHERE id=$song.id";

        //execute
        execute($sql);

        //return the song
        return $song;
    }


    //get all songs
    function getAllSongs(){
        $sql = "Select * FROM youtube";
        $result = select($sql);
        return $result;
    }

    //get songs from 10 to 20
    function getSongRange($from,$to){
        $sql = "SELECT * FROM youtube WHERE id>=$from AND id<=$to";
        $result = execute($sql);
        return result;
    }

    //get songs from 10 to 20
    function getSongRangeEBAY($from,$total){
        $sql = "SELECT * FROM youtube WHERE id>=$from AND id<=($from+$total)";
        $result = execute($sql);
        return result;
    }

?>