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

export {
  getAllSongs,
  getSongById,
  addSong,
  updateSong,
  deleteSong,
  getPartialSongInfo,
};

/*

        SQL     : SELECT * FROM songs WHERE category = 1
        MONGODB : return SongModel.find({category:1}).exec();

        SQL     : SELECT * FROM songs WHERE category = 10 AND name = 'This is not a love song'
        MONGODB : return SongModel.find({category=1,name='this is not a love song'}).exec();

        SQL     : SELECT * from songs WHERE category=1 OR name = 'ilan'
        MONGODB : return SongModel.find({$or:[{category:1, name:'ilan'}]}).exec();

        SQL     : SELECT * FROM songs WHERE category BETWEEN 1 AND 3
        MONGODB : return SongModel.find({category: {$gte:1,$lte:3}}).exec()

        SQL     : SELECT category,name FROM songs WHERE category BETWEEN 1 AND 3
        MONGODB : return SongModel.find(({category:{$gte:1,$lte3},{name:true, category:true, _id:false}})).exec();

        SQL     : SELECT * FROM songs WHERE category between 1 and 3 ORDER BY category ASC name DESC
        MONGODB : return SongModel.find({category:{$gte:1,$lte:3}},null,{sort:{category:1, name:-1}}).exec();

        SQL     : SELECT * FROM girls LIMIT 10 SKIP 10 GET 7
        MONGODB : return GirlsModel.find({},null,{skip:10, limit:7}).exec();    //Paganation

        SQL     : SELECT * FROM songs WHERE name LIKE '%ilan%'  %ilan ilan%
        MONGODB : return SongModel.find({name: {$regex:/^(\b\w+\b){2,}$/}}).exec();

        SQL     : INNER JOIN - get all songs with category for each song
                : SELECT songs.*, name as categoryName
                  FROM songs JOIN categories
                  ON songs.category = category.id
                  
        MONGODB : return SongModel.find({categoryId: {$ne:null}}).populate("category").exec();
*/
