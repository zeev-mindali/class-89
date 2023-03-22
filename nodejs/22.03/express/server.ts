//הכרחי imports for our site.
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/Config";

//REST :
//GET    => www.johnbryce.co.il/login/?user=zeev&password=12345                   => upto 256 char
//POST   => www.johnbryce.co.il/login  + body {'user':'zeev','password':'12345'}  => upto 2gb
//PUT    => like post but for update
//DELETE => like GET but for delete

//{}

//{videoId,videoURL,videoTitle,videoDescription,videoFile}
//addVideo    => POST   ✅
//deleteVideo => DELETE
//videoList   => GET
//videoSearch => GET
//videoUpdate => PUT

const router = express.Router();

router.post(
  "/addVideo",
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body;
    console.log("Request Body: ", body);
    response.status(201).json("{'msg':'video was uploaded'}");
  }
);
