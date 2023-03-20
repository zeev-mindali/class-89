import { useNavigate, useParams } from "react-router-dom";
import "./Player.css";
import { Button } from "@mui/material";

function Player(): JSX.Element {
  const params = useParams();
  const songID = params.videoId;
  const navigate = useNavigate();
  return (
    <div className="Player">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
      <hr />
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${songID}?controls=0&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Player;
