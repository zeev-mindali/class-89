//הכרחי imports for our site.
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import VideoLogic from "../Logic/VideoLogicMYSQL";
import VideoLogicMYSQL from "../Logic/VideoLogicMYSQL";

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
    //get the body, which represent our object
    const newSong = request.body;
    //send the command to mysql
    const result = await VideoLogicMYSQL.addSong(newSong);
    //response to user
    response.status(201).json(result);
  }
);

router.get(
  "/newCat/:catName",
  async (request: Request, response: Response, next: NextFunction) => {
    // console.log("in video routes");
    // console.log(request.params.catName);
    //const catName = request.body["name"];
    response
      .status(201)
      .json(await VideoLogicMYSQL.addCategory(request.params.catName));
  }
);

router.get(
  "/allCat",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await VideoLogicMYSQL.getAllCategories());
  }
);

router.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("Controller working !!!");
  }
);

export default router;
