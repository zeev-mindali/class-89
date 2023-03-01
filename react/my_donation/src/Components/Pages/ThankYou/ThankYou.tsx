import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

function ThankYou(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="ThankYou">
      <h1>Goodbye, and thanks for the fish</h1>
      <hr />
      <button onClick={() => navigate("/")}>To Home Page...</button>
    </div>
  );
}

export default ThankYou;
