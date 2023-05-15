import { useEffect, useState } from "react";
import "./export.css";
import { youtube } from "../../Redux/YouTubeStore";

function Export(): JSX.Element {
  const [items, setItems] = useState("");
  useEffect(() => {
    let result: string = "id,description,img,title,url,video_file,category\n";
    youtube.getState().songs.allSongs.map((item) => {
      result += `${item.id},${item.description},${item.img},${item.title},${item.url},,0\n`;
    });
    setItems(result);
  }, []);
  return (
    <div className="export">
      <textarea value={items} style={{ width: 600, height: 600 }} />
    </div>
  );
}

export default Export;
