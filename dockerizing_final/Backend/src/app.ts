import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import errorsHandler from "./2-middleware/errors-handler";
import ErrorModel from "./3-models/error-model";
import productsController from "./5-controllers/products-controller";

const server = express();

server.use(cors());
server.use(express.json());
server.get("/", (request: Request, response: Response) => response.send("<h1>Welcome to Northwind REST API</h1>"));
server.use("/api", productsController);
server.use("*", (request: Request, response: Response, next: NextFunction) => next(new ErrorModel(404, "Route not found")));
server.use(errorsHandler);

server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
