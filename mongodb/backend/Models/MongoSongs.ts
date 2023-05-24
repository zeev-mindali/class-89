import { Document, Schema, model } from "mongoose";
import Cat from "../Models/Cat";

// 1. model interface describing the data in the model
export interface ISongModel extends Document {
  //don't specify the _id here !!!!!
  url: string;
  songName: string;
  songImg: string;
  category: Schema.Types.ObjectId; //FK - foreign key
  videoFile: string;
}

//2. model schema describing validation, constrains and more:
//match: [/^[a-z].+$,"url need to start with lower case letter"],
const SongSchema = new Schema<ISongModel>(
  {
    url: {
      type: String,
      required: [true, "missing url address"],
      minlength: [3, "url too short"],
      maxlength: [255, "url too long"],
      trim: true,
      unique: true,
    },
    songName: {
      type: String,
      required: [true, "missing song name"],
      minlength: [3, "song name too short"],
      maxlength: [100, "song name too long"],
      trim: true,
      unique: false,
    },
    songImg: {
      type: String,
      required: [true, "missing song image"],
      minlength: [3, "song image too short"],
      maxlength: [100, "song image too long"],
      trim: true,
      unique: false,
    },
    videoFile: {
      type: String,
      minlength: [3, "video file url too short"],
      maxlength: [100, "video file url too long"],
      trim: true,
      unique: false,
    },
    category: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    versionKey: false, //do not create __v field for versioning
    toJSON: { virtuals: true }, //when converting to db to json - allow to bring virtual fields
    //id:false //do not duplivate _id into id field
  }
);

//our virtual fields:
SongSchema.virtual("categoryName", {
  ref: Cat, //which model are you descrbing
  localField: "category", //which field in our model is it
  foreignField: "_id", //which field on category model is it
  justOne: true, //category is a single object and not an array
});

//3. model class - this is the final model class
export const SongModel = model<ISongModel>("SongModel", SongSchema, "songs");
