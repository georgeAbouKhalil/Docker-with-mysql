import express, { Request, Response, NextFunction } from "express";
import errorsHandler from "./3-middleware/errors-handler";
import ErrorModel from "./4-models/error-model";
import productsController from "./6-controllers/products-controller";

const server = express();

server.use(express.json());
server.use("/api", productsController);
server.use("*", (request: Request, response: Response, next: NextFunction) => next(new ErrorModel(404, "Route not found")));
server.use(errorsHandler);

server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
