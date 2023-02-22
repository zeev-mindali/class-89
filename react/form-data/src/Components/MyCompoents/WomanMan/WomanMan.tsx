import { useEffect, useState } from "react";
import "./WomanMan.css";

function WomanMan(): JSX.Element {
  const manList = ["Ilan", "Sagi", "Nadav", "Matan", "Alon", "Adam", "Ido"];
  const womanList = ["Maya B.", "Hila", "Lior", "Noam", "Maya G."];
  const actionList = [
    "will Marry with",
    "will Divorce with",
    "to be friend with",
  ];

  const getRandom = (myArray: any) => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };
  
  //old style

//   function getRandomFunction(myArray:any):String{
//     return myArray[Math.floor(Math.random() * myArray.length)];
//   }

  const [man, setMan] = useState(getRandom(manList));
  const [woman, setWoman] = useState(getRandom(womanList));

  //     variable   function
  const [myAction, setMyAction] = useState(getRandom(actionList));

  useEffect(() => {
    setInterval(() => {
      setMan(getRandom(manList));
      setWoman(getRandom(womanList));
      setMyAction(getRandom(actionList));
    }, 1000);
  }, []);

  return (
    <div className="WomanMan">
      <h1>
        {man} {myAction} {woman}
      </h1>
    </div>
  );
}

export default WomanMan;
