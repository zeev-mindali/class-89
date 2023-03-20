import { Button, Input, MenuItem, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import cat from "../../../Model/Cat";
import Song from "../../../Model/Song";
import "./AddSong.css";

function AddSong(): JSX.Element {
  const apiKey = "AIzaSyCTV38_t5fqYC5joDmQZdE_fhB8n7O4zxQ";
  const [songImg, setImg] = useState("");
  const [songName, setSongName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Song>();

  const send = (userData: Song) => {
    console.log(userData);
    //working with google cloud :)
    const songIdentifier = userData.url.split("=")[1];
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`
      )
      .then((response) => {
        setImg(response.data.items[0].snippet.thumbnails.default.url);
        setSongName(response.data.items[0].snippet.title);
        console.log(response.data.items[0].snippet);
      });
  };

  return (
    <div className="AddSong Box">
      <h1>Add New Song</h1>
      <br />
      <form onSubmit={handleSubmit(send)}>
        <TextField placeholder="enter youtube url..." {...register("url")} />
        <br /> <br />
        <Select style={{ width: 200 }} {...register("category")}>
          {cat.allCat().map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
        <br />
        <br />
        <Button type="submit" fullWidth>
          Add Song
        </Button>
      </form>
      <hr />
      {songImg.length > 3 && <img src={songImg} />}
      <br />
      {songName.length > 3 && <div>{songName}</div>}
      <br />
    </div>
  );
}

export default AddSong;
