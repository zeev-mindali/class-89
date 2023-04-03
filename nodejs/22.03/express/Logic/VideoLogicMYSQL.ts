import Song from "../Models/Song";
import Category from "../Models/Cat";

import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";

//add song, update song, delete song, getSongById, getAllSongs
//add category, delete category, updateCategory, getAllCategory
//one time running : create table songs, create table categories

const addSong = async (newSong: Song) => {
  const SQLcommand = `
  INSERT INTO youtube.songs 
  (url, songName, songImg, category, videoFile) 
  VALUES 
  ('${newSong.url}', '${newSong.songName}', '${newSong.songImg}', ${newSong.category},'');
  `;

  const result: OkPacket = await dal_mysql.execute(SQLcommand);
  return result.insertId;
};

const updateSong = (song: Song) => {};

const deleteSong = (id: number) => {};

const getSongById = (id: number) => {};

const getAllSongs = () => {};

const createSongsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS youtube.songs
  (id INT NOT NULL AUTO_INCREMENT,url VARCHAR(45) NOT NULL,songName VARCHAR(45) NOT NULL,songImg VARCHAR(45) NOT NULL,
  category INT NOT NULL,videoFile VARCHAR(45) NOT NULL,PRIMARY KEY(id));`;
  const response = dal_mysql.execute(SQLcommand);
};

const createCategoriesTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS youtube.category (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX name_UNIQUE (name ASC) VISIBLE);`;
  const response = dal_mysql.execute(SQLcommand);
};

//categories
const addCategory = async (newCategory: string) => {
  //SQL command for adding new category
  const SQLcommand = `INSERT INTO youtube.category (name) VALUES ('${newCategory}');`;
  console.log("sql>", SQLcommand);
  const response: OkPacket = await dal_mysql.execute(SQLcommand);
  const categoryId = response.insertId;
  console.log("New Id", categoryId, " Message:", response.message);
  return categoryId;
};

const deleteCategory = (id: number) => {};

const updateCategory = (cat: Category) => {};

const getAllCategories = async () => {
  const SQLcommand = `SELECT * FROM youtube.category`;
  return await dal_mysql.execute(SQLcommand);
};

export default {
  addSong,
  updateSong,
  deleteSong,
  getSongById,
  getAllSongs,
  createSongsTable,
  createCategoriesTable,
  addCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
};
