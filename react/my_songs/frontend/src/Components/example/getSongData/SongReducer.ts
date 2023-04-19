export const INITIAL_STATE = {
  loading: false,
  songsData: {},
  error: "",
  songURL: "",
  songImg: "",
};

export const ACTION_TYPES = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  FETCH_CLEAR: "FETCH_CLEAR",
};

const songReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
        error: "",
        songData: {},
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: true,
        error: "",
        songData: {},
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: {},
      };
    case ACTION_TYPES.FETCH_CLEAR:
      return state;
    default:
      return state;
  }
  //   if (action.type === "FETCH_START") {
  //     return {
  //       ...state,
  //       loading: true,
  //       error: "",
  //       songData: {},
  //     };
  //   } else if (action.type === "FETCH_SUCCESS") {
  //     return {
  //       ...state,
  //       loading: false,
  //       error: "",
  //       songData: action.payload,
  //     };
  //   } else if (action.type === "FETCH_ERROR") {
  //     return {
  //       ...state,
  //       loading: false,
  //       error: action.payload,
  //       songData: {},
  //     };
  //   } else {
  //     return state;
  //   }
};

export default songReducer;
