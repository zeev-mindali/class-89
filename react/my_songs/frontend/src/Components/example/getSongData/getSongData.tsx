import { useReducer, useState } from "react";
import "./getSongData.css";
import songReducer, { ACTION_TYPES, INITIAL_STATE } from "./SongReducer";

function GetSongData(): JSX.Element {
  //song information : loading, data, error
  //   const [loading, setLoading] = useState(false);
  //   const [songData, setData] = useState({});
  //   const [error, setError] = useState("");
  const [songSearch, setSearch] = useState("");
  const [state, dispatch] = useReducer(songReducer, INITIAL_STATE);

  const handleFetch = () => {
    //setLoading(true);
    //setError("");
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("url")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setLoading(false);
        // setData(data);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        // setLoading(false);
        // setError(err);
        dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: err });
      });
  };
  return (
    <div className="getSongData">
      <input
        type="text"
        onKeyUp={(args) => {
          setSearch(args.currentTarget.value);
        }}
      />
      <button onClick={handleFetch}>
        {state.loading ? "Fetching data..." : "Click for search..."}
      </button>
      <span>{state.error.length > 1 && `Error:${state.error}`}</span>
    </div>
  );
}

export default GetSongData;
