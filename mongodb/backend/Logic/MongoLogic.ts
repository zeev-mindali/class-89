import { ClientError, VideoNotFoundError } from "../Models/Client-Errors";
import { ISongModel, SongModel } from "../Models/MongoSongs";

//SELECT * FROM SONGS
const getAllSongs = async (): Promise<ISongModel[]> => {
  //get all songs without virtual field
  //return SongModel.find().exec();

  //get all songs with virtual field
  return SongModel.find().populate("category").exec();
};

//select * from songs where id = ???
const getSongById = async (id: string): Promise<ISongModel> => {
  const singleSong = await SongModel.findById(id).exec();
  if (!singleSong) throw new VideoNotFoundError(id);
  return singleSong;
};

//insert into songs (create)
const addSong = (newSong: ISongModel): Promise<ISongModel> => {
  const errors = newSong.validateSync();
  if (errors) throw new ClientError(400, errors.message);
  return newSong.save();
};

//update songs set ....
const updateSong = async (song: ISongModel): Promise<ISongModel> => {
  const errors = song.validateSync();
  if (errors) throw new ClientError(400, errors.message);
  const updateSong = await SongModel.findByIdAndUpdate(song._id, song, {
    returnOriginal: false,
  }).exec();
  if (!updateSong) throw new VideoNotFoundError(song._id);

  return updateSong;
};

//delete from songs......
const deleteSong = async (id: string): Promise<void> => {
  const deleteSong = await SongModel.findByIdAndDelete(id).exec();
  if (!deleteSong) throw new VideoNotFoundError(id);
};

// select title,url from songs
const getPartialSongInfo = (): Promise<ISongModel[]> => {
  return SongModel.find({}, { title: true, url: true, _id: false }).exec();
};

/*

*/
