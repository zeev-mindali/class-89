import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";
import { youtube } from "../../Redux/YouTubeStore";
import { Category } from "../../modal/Category";

function Menu(): JSX.Element {
  const [categories, setCategories] = useState<Category[]>(
    youtube.getState().categories.categories
  );

  //   useEffect(() => {
  //     if (localStorage.getItem("Categories")) {
  //       //setCategories(JSON.parse(localStorage.getItem("Categories") as any));
  //     }
  //   }, []);

  youtube.subscribe(() => {
    setCategories(youtube.getState().categories.categories);
  });

  return (
    <div className="Menu">
      <h2>Main Menu</h2>
      <hr />
      <NavLink to="/">All Songs</NavLink>
      <br />
      <br />
      <NavLink to="/addSong">Add Song</NavLink>
      <br />
      <br />
      <NavLink to="/addCategory">Add Category</NavLink>
      <br />
      <br />
      <NavLink to="/search">Song Search</NavLink>
      <br />
      <br />
      <NavLink to="/favorites">Favorites</NavLink>
      <br />
      <br />
      <NavLink to="/about">About Us</NavLink>
      <hr />
      <NavLink to="/export">Export</NavLink>
      {youtube.getState().categories.categories.map((item) => {
        return <h3 key={item.id}>{item.name}</h3>;
      })}
    </div>
  );
}

export default Menu;
