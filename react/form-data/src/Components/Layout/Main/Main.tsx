import WomanMan from "../../MyCompoents/WomanMan/WomanMan";
import "./Main.css";
import cake from "../../../assets/cake.jpg";

function Main(): JSX.Element {
  return (
    <div className="Main">
      <h1>When a man loves a Woman</h1>
      <WomanMan />
      <img src={cake} />
    </div>
  );
}

export default Main;
