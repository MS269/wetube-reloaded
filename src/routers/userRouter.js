import express from "express";
import {
  logout,
  getEdit,
  postEdit,
  remove,
  startGithubLogin,
  finishGithubLogin,
  see,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/remove", remove);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/:id([0-9a-f]{24})", see);

export default userRouter;
