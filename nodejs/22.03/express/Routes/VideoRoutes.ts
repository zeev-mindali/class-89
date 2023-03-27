//הכרחי imports for our site.
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import VideoLogic from "../Logic/VideoLogicMYSQL";

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
  "addVideo",
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body;
    console.log("Request Body: ", body);
    response.status(201).json("{'msg':'video was uploaded'}");
  }
);

// URL=> http://localhost:8080/deleteVideo/5
// axios.delete("http://localhost:8080/deleteVideo/5") <= react
router.delete(
  "deleteVideo/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const videoId = +request.params.id || null;
    if (videoId === null || videoId < 1) {
      response.status(404).json("{'msg':'video not found'}");
    }
    console.log("deleteing ");
    response.status(204);
  }
);

router.get(
  "videoList",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await VideoLogic.videoList());
  }
);
export default router;
