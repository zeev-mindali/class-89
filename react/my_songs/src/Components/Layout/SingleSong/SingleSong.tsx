import { useNavigate } from "react-router-dom";
import "./SingleSong.css";

interface SongProps {
  songID: string;
  songIMG: string;
  songTitle: string;
}

function SingleSong(props: SongProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      className="SingleSong Box"
      style={{ width: "90%" }}
      onClick={() => navigate("/player/" + props.songID)}
    >
      <img src={props.songIMG} />
      {props.songTitle}
    </div>
  );
}

export default SingleSong;
