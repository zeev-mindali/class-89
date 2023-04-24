import { SyntheticEvent, useEffect, useState } from "react";
import "./AddNewCategory.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addCategoryAction } from "../../Redux/CategoriesReducer";
import { Category } from "../../modal/Category";
import { youtube } from "../../Redux/YouTubeStore";

function AddNewCategory(): JSX.Element {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const languages = ["name", "heb", "eng", "rus", "hindi"];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/videos/allCat")
      .then((res) => setCategories(res.data));
  }, []);

  const navigate = useNavigate();

  const myCategory = (args: SyntheticEvent) => {
    let value = (args.target as HTMLInputElement).value;
    setCategory(value);
  };

  const addNewCat = () => {
    youtube.dispatch(addCategoryAction(new Category(0,category)))
    axios
      .get(`http://localhost:4000/api/v1/videos/newCat/${category}`)
      .then((res) => navigate("/"));
  };

  return (
    <div className="AddNewCategory">
      <div className="Box">
        <input
          placeholder="Category name..."
          onKeyUp={(args) => {
            setCategory(args.currentTarget.value);
          }}
        />
        <input type="submit" value="add" onClick={addNewCat} />
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>name</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item["id"]}>
              <td>{item["id"]}</td>
              <td>{item[languages[0]]}</td>
              <td>✏</td>
              <td
                onClick={() => {
                  axios.delete(
                    `http://localhost:4000/api/v1/videos/deleteCat/${item["id"]}`
                  );
                }}
              >
                ❌
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddNewCategory;
