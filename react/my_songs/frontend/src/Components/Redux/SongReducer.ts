import Song from "../modal/Song";

//initial state
export class SongsState {
  public allSongs: Song[] = [];
}

//what action i will use...
export enum SongActionType {
  addSong = "addSong",
  deleteSong = "deleteSong",
  searchSong = "searchSong",
  downloadSongs = "downloadSongs",
}

//action data structure
export interface SongAction {
  type: SongActionType;
  payload?: any;
}

//which function will run when i will dispatch an action
export const addSongAction = (newSong: Song): SongAction => {
  return { type: SongActionType.addSong, payload: newSong };
};

export const deleteSongAction = (songID: number): SongAction => {
  return { type: SongActionType.deleteSong, payload: songID };
};

export const searchSongAction = (songName: string): SongAction => {
  return { type: SongActionType.searchSong, payload: songName };
};

export const downloadSongsAction = (allSongs: Song[]): SongAction => {
  return { type: SongActionType.downloadSongs, payload: allSongs };
};

//this is the reducer function, but since it's manged only by redux, we built the function above
export function SongReducer(
  currentState: SongsState = new SongsState(),
  action: SongAction
): SongsState {
  const newState = { ...currentState };

  switch (action.type) {
    case SongActionType.addSong:
      //will give as an error - data mutation....
      //newState.allSongs.push(action.payload);
      newState.allSongs = [...newState.allSongs,action.payload]
      break;
    case SongActionType.deleteSong:
    //   newState.allSongs = newState.allSongs.filter(
    //     (item) => item.title != action.payload
    //   );
    newState.allSongs = [...newState.allSongs].filter(item=>item.id !== action.payload)
      break;
    case SongActionType.searchSong:
      newState.allSongs = newState.allSongs.filter((item) =>
        item.title.includes(action.payload)
      );
      break;
    case SongActionType.downloadSongs:
      newState.allSongs = action.payload;
      break;
  }

  return newState;
}
