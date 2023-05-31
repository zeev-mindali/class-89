import { NextFunction, Request, Response } from "express";

function errorsHandler(err: any, request: Request, response: Response, next: NextFunction): void {
    const status = err.status || 500;
    if(status === 500) console.log(err);
    response.status(status).send(err.message);
}

export default errorsHandler;