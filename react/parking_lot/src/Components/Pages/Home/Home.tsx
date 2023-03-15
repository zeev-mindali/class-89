import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../Utils/Notify";
import "./Home.css";

function Home(): JSX.Element {
    const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("token") === null || localStorage.getItem("token").length<10){
        //no login made yet
        notify.error("Please Login");
        navigate("/login");
    }
  },[])  
  return (
    <div className="Home">
      <h1>we will put here a picture and some info</h1>
    </div>
  );
}

export default Home;
