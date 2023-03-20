import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Song from "../../../Model/Song";
import SingleSong from "../SingleSong/SingleSong";
import "./MainPage.css";

function MainPage(): JSX.Element {
  //let songs: Song[] = [];
  const [songs, setSongs] = useState<Song[]>([]);
  //const navigate = useNavigate();

  useEffect(() => {
    setSongs(
      localStorage.getItem("songs")
        ? JSON.parse(localStorage.getItem("songs"))
        : []
    );
  }, []);

  return (
    <div className="MainPage">
      <h1>מוקדש באהבה לאישתי</h1>
      <hr />
      {/*songs.map((item) => (
        <div
          onClick={() => navigate(`/player/${item.url.split("=")[1]}`)}
          className="Box"
        >
          <img src={item.songImg} />
          <br />
          {item.songName}
        </div>
      ))*/}
      {songs.map((item) => (
        <SingleSong
          songID={item.url.split("=")[1]}
          songIMG={item.songImg}
          songTitle={item.songName}
        />
      ))}
    </div>
  );
}

export default MainPage;
