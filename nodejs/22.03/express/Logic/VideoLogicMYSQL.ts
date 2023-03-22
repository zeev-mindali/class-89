import Song from "../Models/Song";

const videoListNoGood = () => {
  let videoList: string[] = [];
  videoList.push("zeev");
  videoList.push("Nadav");
  videoList.push("Sagi");
  videoList.push("Maya");
  videoList.push("Omer");
  videoList.push("Matan");

  return videoList;
};

const videoList = async (): Promise<Song[]> => {
  let songsList: Song[] = [];
  let song = new Song(
    "you tube",
    "this is not a love song",
    "http://yyy.nbbb.ddd",
    "romantic"
  );
  songsList.push(song);
  //get data from DB it's take time.... AWAIT
  return songsList;
};

// const videoListSQL = async (searchParamter:string): Promise<Song[]> => {
//     const sql = `SELECT * FROM videos WHERE name LIKE ${searchParamter}`;
//     const songs = await dal.excute(sql);
//     return songs;
//   };

const videoByName = (searchParamter: string) => {};

export default { videoList, videoByName };
