import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getDelete,
  getUpload,
  postUpload,
} from "../controllers/videoController";
import { privateOnlyMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(privateOnlyMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(privateOnlyMiddleware)
  .get(getDelete);
videoRouter
  .route("/upload")
  .all(privateOnlyMiddleware)
  .get(getUpload)
  .post(postUpload);

export default videoRouter;
