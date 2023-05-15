import Song from "../Models/Song";
import Category from "../Models/Cat";

import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import { response } from "express";

//add song, update song, delete song, getSongById, getAllSongs
//add category, delete category, updateCategory, getAllCategory
//one time running : create table songs, create table categories

const addSong = async (newSong: Song) => {
  const SQLcommand = `
  INSERT INTO youtube.songs 
  (description,img,title,url,video_file,category) 
  VALUES 
  ('${newSong.description}','${newSong.img}','${newSong.title}','${newSong.url}','',0);
  `;

  const result: OkPacket = await dal_mysql.execute(SQLcommand);
  return result.insertId;
};

// const updateSong = async (song: Song) => {
//   const SQLcommands = `
//     UPDATE
//     youtube.songs
//     SET url = '${song.url}', songName = '${song.title}', songImg = '${song.img}', category = ${song.category}, videoFile = '${song.video_file}'
//     WHERE
//     (id = ${song.id});
//     `;
//   await dal_mysql.execute(SQLcommands);
//   return true;
// };

const deleteSong = (id: number) => {
  const SQLcommand = `DELETE FROM youtube.songs WHERE id=${id}`;
  dal_mysql.execute(SQLcommand);
  return true;
};

const getSongById = async (id: number) => {
  return await dal_mysql.execute(`SELECT * FROM youtube.songs WHERE id =${id}`);
};

const getAllSongs = async () => {
  const SQLcommand = `SELECT * FROM youtube.songs`;
  return await dal_mysql.execute(SQLcommand);
};

const createSongsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS songs (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NULL,
    img VARCHAR(255) NULL,
    title VARCHAR(255) NULL,
    url VARCHAR(255) NULL,
    video_file VARCHAR(255) NULL,
    category INT NULL,
    PRIMARY KEY (id));`;
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
  const SQLcommand = `INSERT INTO category (name) VALUES ('${newCategory}');`;
  console.log("sql>", SQLcommand);
  const response: OkPacket = await dal_mysql.execute(SQLcommand);
  const categoryId = response.insertId;
  console.log("New Id", categoryId, " Message:", response.message);
  return categoryId;
};

const deleteCategory = (id: number) => {
  //console.log("id:", id);
  const SQLcommand = `DELETE FROM category WHERE id=${id}`;
  dal_mysql.execute(SQLcommand);
};

const updateCategory = (cat: Category) => {};

const getAllCategories = async () => {
  const SQLcommand = `SELECT * FROM category`;
  return await dal_mysql.execute(SQLcommand);
};

export default {
  addSong,
  //updateSong,
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
