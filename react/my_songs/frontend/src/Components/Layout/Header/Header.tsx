import { useState } from "react";
import "./Header.css";
import { youtube } from "../../Redux/YouTubeStore";

function Header(): JSX.Element {
  const [totalSongs, setTotalSongs] = useState(
    youtube.getState().songs.allSongs.length
  );

  const [totalCategories, setTotalCategories] = useState(
    youtube.getState().categories.categories.length
  );

  youtube.subscribe(() => {
    setTotalSongs(youtube.getState().songs.allSongs.length);
    setTotalCategories(youtube.getState().categories.categories.length);
  });

  return (
    <div className="Header">
      <h1>Class 89 - the best that lecturer can get</h1>
      total songs : {totalSongs}
      <br />
      total categories {totalCategories}
    </div>
  );
}

export default Header;
