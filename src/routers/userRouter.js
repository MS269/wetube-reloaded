import express from "express";
import {
  logout,
  getEdit,
  postEdit,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
  remove,
  see,
} from "../controllers/userController";
import { privateOnlyMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", privateOnlyMiddleware, logout);
userRouter
  .route("/edit")
  .all(privateOnlyMiddleware)
  .get(getEdit)
  .post(postEdit);
userRouter
  .route("/change-password")
  .all(privateOnlyMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/remove", remove);
userRouter.get("/:id([0-9a-f]{24})", see);

export default userRouter;
