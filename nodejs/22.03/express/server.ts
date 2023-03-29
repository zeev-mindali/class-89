//imports
import bodyParser from "body-parser";
import cors from "cors"; //npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import loginRouter from "./Routes/LoginRoutes";
import router from "./Routes/VideoRoutes";

//create server
const server = express();

//handle cors
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

//where i will save the video files
server.use(express.static("user_videos"));

//enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true }));

//parse the body as json , for easy work
server.use(bodyParser.json());


//how to use the routes
//all videos => http://localhost:3000/api/v1/videos/videoList
server.use("api/v1/videos/", router);
server.use("api/v1/users/", loginRouter);

//handle errors (route not found)

//start the server
