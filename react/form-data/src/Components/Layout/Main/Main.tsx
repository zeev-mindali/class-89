import WomanMan from "../../MyCompoents/WomanMan/WomanMan";
import "./Main.css";
import cake from "../../../assets/cake.jpg";
import { SyntheticEvent, useState } from "react";

function Main(): JSX.Element {
  const manList = ["Ilan", "Sagi", "Nadav", "Matan", "Alon", "Adam", "Ido"];
  const womanList = ["Maya B.", "Hila", "Lior", "Noam", "Maya G."];

  //const [victim, setVictim] = useState("No Body");
  const [groom, setGroom] = useState("");
  const [msg, setMsg] = useState("");

  const getRandomName = () => {
    //setVictim(womanList[Math.floor(Math.random() * womanList.length)]);
    let victim = womanList[Math.floor(Math.random() * womanList.length)];
    setMsg(`${groom} wants to marry with ${victim}`);
  };

  const changeGroomName = (args: SyntheticEvent) => {
    let myValue = (args.target as HTMLInputElement).value;
    setGroom(myValue);
  };

  return (
    <div className="Main">
      {/* <h1>When a man loves a Woman</h1>
      <WomanMan />
      <img src={cake} /> */}
      <br />
      <br />
      <br />
      {/* <input type="text" onChange={changeGroomName} /> */}
      <input
        type="text"
        onChange={(args) => {
          setGroom(args.target.value);
        }}
      />
      <button onClick={getRandomName}>Get Random Victim</button>
      <br />
      {/* <div className="Box">Victim name {victim}</div> */}
      <br />
      <br />
      {msg}
    </div>
  );
}

export default Main;
